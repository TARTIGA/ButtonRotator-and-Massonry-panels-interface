var rotateButtons = (function() {

    $(function() {
        var $container = $('.btn__container')
        var $btn_array = $container.find(".btn__elem"); // init array of elements
        var posTopArr = []; // positions array
        var button = {
            self: this,
            obj: null,
            num: null,
            clicks: null,
            position: {
                top: this.top,
                left: this.left
            },
            pos: null,
            getThis: function() {
                return this;
            },
            getObj: function() {
                return this.obj;
            },
            setObj: function(obj) {
                this.obj = obj;
            },
            getNum: function() {
                return this.num;
            },
            setNum: function(num) {
                this.num = num;
            },
            // Pos - in Array
            getPos: function() {
                return this.pos;
            },
            setPos: function(pos) {
                this.pos = pos;
            },
            // Position on Window
            getPosition: function() {
                return this.position;
            },
            setPosition: function(position) {
                this.position = position;
            },
            setClics: function(num) {
                this.clicks = num;
            },
            getClics: function() {
                return this.clicks;
            },
            reloadClicks: function() {
                this.clicks = 0;
            },
            setEventListener: function() {
                // console.info('this num' + this.getNum);
                $(this.obj).on("click", btnHandler.bind(this)); // bind context

            },
            savePosition: function(top, left) {

                this.position.top = top;
                this.position.left = left;

            },
        }

        var arrBtnState = {
            buttons: [],
            pushBtn: function(btn) {
                this.buttons.push(btn);
            },
            getBtns: function() {
                return this.buttons;
            },
            sumBtn: function() {
                return this.buttons.length;
            },
            getBtnNum: function() {
                return this.buttons[1];
            },
            posBtnTop: []

        };

        function init() {
            var arrPos = arrBtnState.posBtnTop;

            // reload position to Absolute
            for (var i = 0; i < $btn_array.length; i++) {
                var $elem = $btn_array[i];
                arrBtnState.buttons[i] = Object.create(button);
                arrBtnState.buttons[i].setObj($elem);
                arrBtnState.buttons[i].setNum($($elem).html());
                arrBtnState.buttons[i].setPos(i + 1); // because we have 1,2,3 ... elements and don't have 0 
                arrBtnState.buttons[i].setClics(0);
                arrBtnState.buttons[i].setEventListener();


                var obj = arrBtnState.buttons[i].getObj()

                // Save position
                savePosition(obj); // save all static position for absolute
                // Set position to btn
                arrBtnState.buttons[i].setPosition($(obj).position());

                // Get TOP position array
                arrPos[i] = $($elem).position().top;

                // console.info(' $(obj).position().top; -- ' + arrBtnState.buttons[i].position.top);

            }
            positabsolute($btn_array);
            // console.info(' arr.positionsBTNS[i]---' + arrPos.length);


            getNumberarray(arrBtnState.buttons);
            //getPosArray(arrPos);
        }

        /**
         * LOG number
         * 
         * @param {any} arr 
         */
        function getNumberarray(arr) {
            for (var i = 0; i < arr.length; i++) {
                console.info('arri--' + i + ' ' +
                    arr[i].getNum() + "---pos = " + arr[i].getPos());

            }
        }

        /**
         * POS LOG 
         * 
         * @param {any} arrPos 
         */
        function getPosArray(arrPos) {
            for (var i = 0; i < arrPos.length; i++) {
                console.info('pos --- [' + i + '] ' +
                    " --- " + arrPos[i]);

            }
        }

        /**
         * 
         * 
         */
        function btnHandler() {
            console.info('this.num ' + this.getNum() +
                " / this.clicks == " + this.getClics() +
                " / this.pos == " + this.getPos() +
                " / this.position top== " + this.position.top);
            rotator(this);
            switchClicks(this.getClics(), this);



        }

        /**
         * MAin Rotator function
         * 
         * @param {any} elem 
         */
        function rotator(elem) {
            console.info('ROTATOR');

            let position = elem.getPos();
            let num = elem.getNum();
            let buttons = arrBtnState.buttons;
            let dest = button;

            if (position != num) {
                if (elem.clicks == 0) {
                    console.info('NOT EQUAL!!!' + buttons.length);
                    for (var i = 0; i < buttons.length; i++) {
                        if (buttons[i].pos == elem.getNum()) {
                            var elemPosTopStart = elem.position.top;
                            dest = buttons[i];
                            console.info('dest num who on position -- ' + buttons[i].num);
                            console.info('dest pos who on position -- ' + buttons[i].pos);
                            console.info('dest posTop who on position -- ' + buttons[i].position.top);
                            console.info('this elem position -- ' + elem.pos);
                            // getNumberarray(buttons);
                        }

                    }
                    console.info('elem pos= ' + elem.position.top);
                    console.info('dest pos= ' + dest.position.top);
                    changeBtns(elem, dest);
                    // resetMass(elem, buttons[i]);
                    // savePosition(elem.getObj());
                    // savePosition(dest.getObj());
                }
            } else {

                // $(elem.getObj()).hide();

                console.info('EQUAL!!!');
            }

        }


        /**
         * Change position
         * 
         * @param {Object} elem 
         * @param {int} dest 
         */
        function changeBtns(elem, dest) {

            var startPosition = elem.position.top
            var startNum = elem.num;
            var startPos = elem.pos;
            var destPosTop = dest.position.top

            $(elem.getObj()).css({ top: destPosTop + 'px' });
            $(dest.getObj()).css({ top: startPosition + 'px' });


            elem.position.top = dest.position.top;
            dest.position.top = startPosition;

            elem.pos = dest.pos;
            dest.pos = startPos;

            arrBtnState.buttons[elem.num - 1] = dest;
            arrBtnState.buttons[dest.num - 1] = elem;






        }

        function resetMass(elem, dest) {
            var startPos = elem.pos;
            var buttons = arrBtnState.buttons;
            var arrPos = arrBtnState.posBtnTop;
            for (var i = 0; i < buttons.length; i++) {
                if (arrBtnState.buttons[i].position.top == arrPos[i])
                    arrBtnState.buttons[i] = dest;

            }
        }

        /**
         * Set all arrayBtn absolute position
         * 
         */
        function positabsolute(arr) {
            for (var i = 0; i < arr.length; i++) {
                var $elem = arr[i];
                $($elem).css({
                    position: "absolute"
                });
            }
        }
        /**
         * Save position relative arrayBtn state
         * 
         * @param {$px} top 
         * @param {$px} left 
         * @param {Object} elem 
         */
        function savePosition(elem) {
            $(elem).css({
                top: $(elem).position().top,
                left: $(elem).position().left
            });
        }




        function resetMass() {
            // for (var i = 0; i < $btn_array.length; i++) {
            //     var $elem = $btn_array[i];
            //     arrBtnState.buttons[i].setObj($elem);
            //     arrBtnState.buttons[i].setNum($($elem).html());
            //     arrBtnState.buttons[i].setPos(i + 1); // because we have 1,2,3 ... elements and don't have 0 
            // }
        }


        /**
         * Switch Clicks num
         * 
         * @param {any} clicks 
         * @param {any} elem 
         */
        function switchClicks(clicks, elem) {
            switch (clicks) {
                case 0:
                    elem.setClics(1);
                    break;
                case 1:
                    elem.setClics(2);
                    break;
                case 2:
                    elem.setClics(2);
                    break;
            }
        }



        // MAIN INIT
        init();


    });
})();
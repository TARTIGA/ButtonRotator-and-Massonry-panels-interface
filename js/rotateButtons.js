var rotateButtons = (function() {

    $(function() {
        var $container = $('.btn__container') // main html container
        var $btn_array = $container.find(".btn__elem"); // init array of elements
        var button = {
            self: this,
            obj: null,
            num: null,
            clicks: null,
            position: {
                top: this.top,
                left: this.left
            },
            getPositionTop: function() {
                return this.position.top;
            },
            setPositionTop: function(top) {
                this.position.top = top;
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
            setEventListener: function() {
                // console.info('this num' + this.getNum);
                $(this.obj).on("click", btnHandler.bind(this)); // bind context

            },
        };
        // MAin state
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
                //SETS 
                arrBtnState.buttons[i] = Object.create(button);
                arrBtnState.buttons[i].setObj($elem);
                arrBtnState.buttons[i].setNum($($elem).html());
                arrBtnState.buttons[i].setPos(i + 1); // because we have 1,2,3 ... elements and don't have 0 
                arrBtnState.buttons[i].setClics(0);
                arrBtnState.buttons[i].setEventListener();
                // cash object
                var obj = arrBtnState.buttons[i].getObj();
                // Save position
                savePosition(obj); // save all static position for absolute
                // Set position to btn
                arrBtnState.buttons[i].setPosition($(obj).position());

                // Get TOP position array
                arrPos[i] = $($elem).position().top;

                // console.info(' $(obj).position().top; -- ' + arrBtnState.buttons[i].position.top);

            }
            positabsolute($btn_array); // absolute position for all (absolute important position for translate)
            getNumberarray(arrBtnState.buttons); //LOG

        }

        /**
         * LOG number
         * 
         * @param {any} arr 
         */
        function getNumberarray(arr) {
            for (var i = 0; i < arr.length; i++) {
                console.info('arr [' + i + '] -- NUM = ' +
                    arr[i].getNum() + "---pos = " + arr[i].getPos());

            }
        }

        /**
         * MAin Handler Click on object
         * 
         */
        function btnHandler() {
            console.info('this.num ' + this.getNum() +
                " / this.clicks == " + this.getClics() +
                " / this.pos == " + this.getPos() +
                " / this.position top== " + this.position.top);
            rotator(this);

        }
        /**
         * Main Rotator function
         * 
         * @param {any} elem 
         */
        function rotator(elem) {

            let position = elem.getPos();
            let num = elem.getNum();
            let buttons = arrBtnState.buttons;
            let dest = button;

            if (position != num) {
                if (elem.clicks == 0) {
                    console.info('NOT EQUAL!!!' + buttons.length);
                    for (var i = 0; i < buttons.length; i++) {
                        if (buttons[i].getPos() == elem.getNum()) {
                            dest = buttons[i]; // add destination to check
                            console.info('dest num who on position -- ' + buttons[i].num);
                            console.info('dest posTop who on position -- ' + buttons[i].position.top);
                        }
                    }
                    changeBtns(elem, dest); // Change
                }
                getNumberarray(buttons); // LOG

            } else {
                console.info('EQUAL!!!');
                changeBtns(elem, buttons[0]); // Change for dist = buttons[0]
            }

        }


        /**
         * Change btns in array and object positionm 
         * 
         * @param {Object button} elem 
         * @param {Object button} dest 
         */
        function changeBtns(elem, dest) {

            var startPosTop = elem.getPositionTop();
            var destPosTop = dest.getPositionTop();
            var startPos = elem.getPos();
            var startPosDest = dest.getPos();

            // $(elem.getObj()).css({ top: destPosTop + 'px' });
            // $(dest.getObj()).css({ top: startPosTop + 'px' });

            animationBtnsTranslate(elem, dest, startPosTop, destPosTop); // animate translate

            elem.pos = dest.pos;
            dest.pos = startPos;

            elem.position.top = dest.position.top;
            dest.position.top = startPosTop;

            arrBtnState.buttons[startPos - 1] = dest;
            arrBtnState.buttons[startPosDest - 1] = elem;
        }

        function animationBtnsTranslate(elem, dest, startPosTop, destPosTop) {
            // var startPosTop = elem.getPositionTop();
            // var destPosTop = dest.getPositionTop();
            $(elem.getObj()).css({ top: destPosTop + 'px' }).addClass("rotate");
            $(dest.getObj()).css({ top: startPosTop + 'px' }).addClass("rotate");

            setTimeout(function() {
                $(elem.getObj()).removeClass("rotate");
            }, 1000);
            setTimeout(function() {
                $(dest.getObj()).removeClass("rotate");
            }, 1000);

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
         * Save  position  arrayBtn [html] state
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


        // MAIN INIT
        init();


    });
})();
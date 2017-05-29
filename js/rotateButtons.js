var rotateButtons = (function() {
    $(function() {
        var $container = $('.btn__container')
        var $btn_array = $container.find(".btn__elem"); // init array of elements
        var posTopArr = []; // positions array
        var button = {
            obj: null,
            num: null,
            position: null,
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
            getPos: function() {
                return this.pos;
            },
            setPos: function(pos) {
                this.pos = pos;
            },
            // addHandler: function(func, btn) {
            //     func.bind(this);
            //     $(this.getObj()).on('click', btnHandler2);

            //     // func.bind(this);

            // },


        };


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

        };

        function init() {
            for (var i = 0; i < $btn_array.length; i++) {
                var $elem = $btn_array[i];
                var btn = button;
                var arr = arrBtnState;

                btn.setObj($btn_array[i]);
                btn.setNum($($btn_array[i]).html());
                btn.setPos(i);
                arr.pushBtn(btn);
                console.info('btn NUM === ' + btn.getNum());

                $(btn.getObj()).on('click', btnHandler2(btn));
                // btnHandler2.bind(btn);





                // arrBtnState.pushBtn(btn);
                // arrBtnState.pushBtn(btn);
                // console.info('arr button numb arr - ' + arr.getBtns());
                console.info('arr button numb - ' + arr.buttons[i].getNum());
                console.info('arr button pos - ' + arr.buttons[i].getPos());

                savePosition($(btn.getObj()).position().top, $(btn.getObj()).position().left, btn.getObj());

                savePosition($($elem).position().top, $($elem).position().left, $elem); // save all static position for absolute
                $elem.value = $($elem).html(); // inner value
                // console.info('  $elem.value' + $elem.value);
                $elem.posTop = $($elem).position().top; // Get the current coordinates top
                $elem.position = i; // init first position element after window.load
                $elem.changed = 0; // counter of changed (not use)
                posTopArr[i] = $($elem).position().top; // positions array new elements
                // $($elem).on("click", btnHandler); // add buttons handler

                // btn.addHandler(btnHandler2, btn);


            }
            positabsolute(); // absolute position all btns


        }

        function btnHandler2(btn) {
            // var btnO = this.getObj();
            console.info('this -- ' + btn.getNum() + " ");
            // console.info('this objn' + this.getNum());
            // num = btn.getNum();
            // pos = btn.getPos();
            // if (num != pos) {
            //     console.info('NOT EUAL');
            // }
            console.info('sss');

        }

        /**
         *  Buttons Handler event
         * 
         */
        // function btnHandler() {
        //     // console.log('this.changed -- ' + this.changed);
        //     var value = this.value; // save value
        //     elemPosTop = $(this).position().top; // save top position
        //     this.posTop = $(this).position().top; // init this position
        //     if (elemPosTop != posTopArr[value - 1]) {
        //         rotator(this);
        //     } else {
        //         for (var i = 0; i < getPosition(this.posTop); i++) {
        //             if (this.value != 1) {
        //                 var rotatedBtn = $btn_array[i];
        //                 var rotateBtnPos = getPosition(rotatedBtn.posTop);
        //                 changePosition(rotatedBtn, posTopArr[rotateBtnPos + 1]);
        //             }
        //         }
        //         changePosition(this, posTopArr[0]);
        //         this.posTop = posTopArr[0];
        //         this.position = getPosition(posTopArr[0]);
        //         // reloadMass();


        //     }
        //     this.changed += 1;
        //     this.changed > 2 ? this.changed = 0 : " ";
        // }

        /**
         * function for rotate  buttons
         * 
         * @param {any} clicked 
         */
        function rotator(clicked) {
            var isPos = posTopArr[clicked.value - 1];

            if (clicked.value < getPosition(clicked.posTop) + 1) {
                for (var i = 0; i < getPosition(clicked.posTop); i++) {

                    //FOR 1st
                    if (clicked.value == 2) {
                        i++;
                        var rotatedBtn = $btn_array[i];
                        var rotateBtnPos = getPosition(rotatedBtn.posTop);

                        changePosition(rotatedBtn, posTopArr[rotateBtnPos + 1]);
                    } else {
                        var rotatedBtn = $btn_array[i];
                        var rotateBtnPos = getPosition(rotatedBtn.posTop);
                        changePosition(rotatedBtn, posTopArr[rotateBtnPos + 1]);

                    }
                }

            } else {
                console.log("position less that need");
                for (var i = 0; i < clicked.value; i++) {
                    var rotatedBtn = $btn_array[i];
                    var rotateBtnPos = getPosition(rotatedBtn.posTop);
                    changePosition(rotatedBtn, posTopArr[rotateBtnPos - 1]);
                }
            }
            changePosition(clicked, isPos);
            clicked.posTop = isPos;
            clicked.position = getPosition(isPos);
            // reloadMass();
        }

        /**
         * Change position
         * 
         * @param {Object} elem 
         * @param {int} dest 
         */
        function changePosition(elem, dest) {
            $(elem).css({ top: dest + 'px' });
        }


        /**
         * Get position index on posTop
         * 
         * @param {any} nowPosTop 
         * @returns 
         */
        function getPosition(nowPosTop) {
            for (var i = 0; i < posTopArr.length; i++) {
                if (nowPosTop == posTopArr[i])
                    return i;
            }
        }

        /**
         * Save position relative btn state
         * 
         * @param {$px} top 
         * @param {$px} left 
         * @param {Object} elem 
         */
        function savePosition(top, left, elem) {
            $(elem).css({
                top: top,
                left: left
            });
        }

        /**
         * Set all btn absolute position
         * 
         */
        function positabsolute() {
            for (var i = 0; i < $btn_array.length; i++) {
                var $elem = $btn_array[i];
                $($elem).css({
                    position: "absolute"
                });
            }
        }


        /**
         * relod array this test function for second loop, than 1st element changed == 2
         * 
         */
        function reloadMass() {
            for (var i = 0; i < $btn_array.length; i++) {
                var $elem = $btn_array[i];
                $elem.value = $($elem).html();
                $elem.posTop = $($elem).position().top;
                $elem.position = i;
            }

        }

        init(); // INIT MODULE



    });
})();
var rotateButtons = (function() {
    $(function() {
        var container = $('.arrayBtn__container')
        var arrayBtn = $(container).find(".arrayBtn__elem"); // init arrayBtn of elements
        var arrLength = $(arrayBtn).length;
        var posTopArr = []; // positions arrayBtn

        var button = {
            obj: null,
            num: null,
            position: null,
            getNum: function() {
                return this.num;
            },
            setNum: function(num) {
                this.num = numb;
            },
            getPos: function() {
                return this.pos;
            },
            setPos: function(pos) {
                this.pos = pos;
            },

        };
        var arrBtnState = {
            buttons: [],
            pushBtn: function(btn) {
                buttons.push(btn);
            }
        };

        function init() {
            for (var i = 0; i < arrLength; i++) {

                var $elem = arrayBtn[i]; //
                var btn = arrayBtn[i];
                arrBtnState.pushBtn(btn);
                console.info('arrBtnState L = ' + arrBtnState.length);

                savePosition($($elem).position().top, $($elem).position().left, $elem); // save all static position for absolute
                $elem.value = $($elem).html(); // inner value
                $elem.posTop = $($elem).position().top; // Get the current coordinates top
                $elem.position = i; // init first position element after window.load
                $elem.changed = 0; // counter of changed (not use)
                posTopArr[i] = $($elem).position().top; // positions arrayBtn new elements
                $($elem).on("click", arrayBtnHandler); // add buttons handler
            }
            positabsolute(); // absolute position all arrayBtns
        }

        /**
         *  Buttons Handler event
         * 
         */
        function arrayBtnHandler() {
            // console.log('this.changed -- ' + this.changed);
            var value = this.value; // save value
            elemPosTop = $(this).position().top; // save top position
            this.posTop = $(this).position().top; // init this position
            if (elemPosTop != posTopArr[value - 1]) {
                rotator(this);
            } else {
                for (var i = 0; i < getPosition(this.posTop); i++) {
                    if (this.value != 1) {
                        var rotatedarrayBtn = arrayBtn[i];
                        var rotatearrayBtnPos = getPosition(rotatedarrayBtn.posTop);
                        changePosition(rotatedarrayBtn, posTopArr[rotatearrayBtnPos + 1]);
                    }
                }
                changePosition(this, posTopArr[0]);
                this.posTop = posTopArr[0];
                this.position = getPosition(posTopArr[0]);
                // reloadMass();


            }
            this.changed += 1;
            this.changed > 2 ? this.changed = 0 : " ";
        }

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
                        var rotatedarrayBtn = arrayBtn[i];
                        var rotatearrayBtnPos = getPosition(rotatedarrayBtn.posTop);

                        changePosition(rotatedarrayBtn, posTopArr[rotatearrayBtnPos + 1]);
                    } else {
                        var rotatedarrayBtn = arrayBtn[i];
                        var rotatearrayBtnPos = getPosition(rotatedarrayBtn.posTop);
                        changePosition(rotatedarrayBtn, posTopArr[rotatearrayBtnPos + 1]);

                    }
                }

            } else {
                console.log("position less that need");
                for (var i = 0; i < clicked.value; i++) {
                    var rotatedarrayBtn = arrayBtn[i];
                    var rotatearrayBtnPos = getPosition(rotatedarrayBtn.posTop);
                    changePosition(rotatedarrayBtn, posTopArr[rotatearrayBtnPos - 1]);
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
         * Save position relative arrayBtn state
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
         * Set all arrayBtn absolute position
         * 
         */
        function positabsolute() {
            for (var i = 0; i < arrLength; i++) {
                var $elem = arrayBtn[i];
                $($elem).css({
                    position: "absolute"
                });
            }
        }


        /**
         * relod arrayBtn this test function for second loop, than 1st element changed == 2
         * 
         */
        function reloadMass() {
            for (var i = 0; i < arrLength; i++) {
                var $elem = arrayBtn[i];
                $elem.value = $($elem).html();
                $elem.posTop = $($elem).position().top;
                $elem.position = i;
            }

        }

        init(); // INIT MODULE



    });
})();
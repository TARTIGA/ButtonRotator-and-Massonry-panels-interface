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
                top: null,
                left: null
            },
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
            getPos: function() {
                return this.pos;
            },
            setPos: function(pos) {
                this.pos = pos;
            },
            setClics: function(num) {
                this.clicks = num;
            },
            getClics: function(num) {
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

        };

        function init() {
            var arr = Object.create(arrBtnState);
            for (var i = 0; i < $btn_array.length; i++) {
                var $elem = $btn_array[i];
                arr.buttons[i] = Object.create(button);
                arr.buttons[i].setObj($elem);
                arr.buttons[i].setNum($($elem).html());
                arr.buttons[i].setPos(i + 1); // because we have 1,2,3 ... elements and don't have 0 
                arr.buttons[i].setClics(0);
                arr.buttons[i].setEventListener();


                var obj = arr.buttons[i].getObj();

                arr.buttons[i].position.top = $(obj).position().top;
                arr.buttons[i].position.top = $(obj).position().left;


            }
            positabsolute(arr.buttons); // absolute position all arrayBtns
            getNumberarray(arr.buttons);
        }

        function getNumberarray(arr) {
            for (var i = 0; i < arr.length; i++) {
                console.info('arri--' + i + ' ' +
                    arr[i].getNum());

            }
        }

        function btnHandler() {
            console.info('this.num ' + this.getNum() +
                " / this.clicks == " + this.getClics() +
                " / this.pos == " + this.position.top);
            switchClicks(this.getClics(), this);
            rotator(this);



        }

        /**
         * MAin Rotator function
         * 
         * @param {any} elem 
         */
        function rotator(elem) {
            let position = elem.getPos();
            let num = elem.getNum();
            console.info('num == ' + num);
            console.info('position inArray== ' + position);
            if (position != num) {
                console.info('NOT EQUAL!!!');



            } else {
                console.info('EQUAL!!!');
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
                    elem.reloadClicks();
                    break;
            }
        }



        // MAIN INIT
        init();


    });
})();
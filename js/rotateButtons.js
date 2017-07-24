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
            position: null,
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
            var arr = Object.create(arrBtnState);
            for (var i = 0; i < $btn_array.length; i++) {
                var $elem = $btn_array[i];
                arr.buttons[i] = Object.create(button);
                arr.buttons[i].setObj($elem);
                arr.buttons[i].setNum($($elem).html());
                arr.buttons[i].setPos(i);
                arr.buttons[i].setClics(0);
                arr.buttons[i].setEventListener();
            }
            // getNumberarray(arr.buttons);
            // console.info('arri-3' +
            //     arrBtnState.buttons[0].getNum());

            getNumberarray(arr.buttons);
        }

        function getNumberarray(arr) {
            for (var i = 0; i < arr.length; i++) {
                console.info('arri--' + i + ' ' +
                    arr[i].getNum());

            }
        }

        function btnHandler() {
            console.info('this.num ' + this.getNum() + " / this.clicks == " + this.getClics());
            switch (this.getClics()) {
                case 0:
                    this.setClics(1);
                    break;
                case 1:
                    this.setClics(2);
                    break;
                case 2:
                    this.reloadClicks();
                    break;
            }



        }



        init();







    });
})();
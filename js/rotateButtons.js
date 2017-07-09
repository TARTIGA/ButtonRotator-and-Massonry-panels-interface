var rotateButtons = (function() {
    alert("Gogogo");
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





    });
})();
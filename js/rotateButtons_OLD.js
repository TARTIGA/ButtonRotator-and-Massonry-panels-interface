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


                }
                positabsolute(); // absolute position all btns


            }

            function btnHandler(btn) {
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



        }

        init(); // INIT MODULE



    });
})();
$(function() {
    var $btn_array = $(".btn__elem"); // init array of elements
    var posTopArr = []; // positions array


    for (var i = 0; i < $btn_array.length; i++) {

        var $elem = $btn_array[i];
        savePosition($($elem).position().top, $($elem).position().left, $elem);
        $elem.value = $($elem).html();
        $elem.posTop = $($elem).position().top;
        $elem.position = i;
        $elem.changed = 0;
        $elem.changePosition = function() {};
        posTopArr[i] = $($elem).position().top;
        $($elem).on("click", btnHandler); // add buttons handler
    }
    positabsolute(); // absolute position

    /**
     *  Buttons Handler
     * 
     */
    function btnHandler() {
        console.log('this.changed -- ' + this.changed);
        var value = this.value;
        elemPosTop = $(this).position().top;
        this.posTop = $(this).position().top;
        alert("elemPosTop NOW == " + elemPosTop);
        alert("pos in array position == " + getPosition(elemPosTop));
        alert("Position == " + this.position);
        if (elemPosTop != posTopArr[value - 1]) {
            alert("NOT! his place");
            // $(this).css({ top: posTopArr[this.value - 1] + 'px' });
            rotator(this);
        } else {
            // $(this).css({ top: posTopArr[0] + 'px' });
            alert("On his place");
            this.changed == 1;

            for (var i = 0; i < getPosition(this.posTop); i++) {
                if (this.value != 1) {
                    var rotatedBtn = $btn_array[i];
                    console.log('rotatedBtn --- ' + rotatedBtn.value);
                    var rotateBtnPos = getPosition(rotatedBtn.posTop);
                    console.log('rotatedBtn POS--- ' + rotateBtnPos);
                    changePosition(rotatedBtn, posTopArr[rotateBtnPos + 1]);
                }
            }
            changePosition(this, posTopArr[0]);
            this.posTop = posTopArr[0];
            this.position = getPosition(posTopArr[0]);
            // reloadMass();


        }
        this.changed += 1;


    }

    /**
     * function for rotate  buttons
     * 
     * @param {any} clicked 
     */
    function rotator(clicked) {
        // $btn_array = reloadMass();
        var isPos = posTopArr[clicked.value - 1];
        console.log('clicked.value - ' + clicked.value + " AND isPos = " + getPosition(isPos));

        if (clicked.value < getPosition(clicked.posTop) + 1) {
            console.log("position more than need");
            for (var i = 0; i < getPosition(clicked.posTop); i++) {

                //FOR 2 
                if (clicked.value == 2) {
                    alert("DVOIKA SUK");
                    i++;
                    var rotatedBtn = $btn_array[i];
                    console.log('$btn_array[i] == ' + $btn_array[i]);
                    // console.log('rotatedBtn --- ' + rotatedBtn.value);
                    var rotateBtnPos = getPosition(rotatedBtn.posTop);
                    // console.log('rotatedBtn POS--- ' + rotateBtnPos);
                    changePosition(rotatedBtn, posTopArr[rotateBtnPos + 1]);
                } else {
                    var rotatedBtn = $btn_array[i];
                    // console.log('rotatedBtn --- ' + rotatedBtn.value);
                    var rotateBtnPos = getPosition(rotatedBtn.posTop);
                    console.log('rotatedBtn POS--- ' + rotateBtnPos);
                    changePosition(rotatedBtn, posTopArr[rotateBtnPos + 1]);

                }
            }

        } else {
            console.log("position less that need");
            for (var i = 0; i < clicked.value; i++) {
                var rotatedBtn = $btn_array[i];
                // if (rotatedBtn.posTop != posTopArr[0]) { // SOME IF DONT NOW WHY
                var rotateBtnPos = getPosition(rotatedBtn.posTop);
                changePosition(rotatedBtn, posTopArr[rotateBtnPos - 1]);
                // }

            }
        }

        {
            i
        }
        changePosition(clicked, isPos);
        clicked.posTop = isPos;
        clicked.position = getPosition(isPos);
        // reloadMass();
    }

    function changePosition(elem, dest) {
        console.log("ITS A LIVE dest =" + dest);
        $(elem).css({ top: dest + 'px' });
    }


    function getPosition(nowPosTop) {
        for (var i = 0; i < posTopArr.length; i++) {
            if (nowPosTop == posTopArr[i])
                return i;
        }
    }

    /**
     * Save position relative btn state
     * 
     * @param {any} top 
     * @param {any} left 
     * @param {any} elem 
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

    function sortInRotator(direction) {
        var rotatedBtn = $btn_array[i];
        console.log('rotatedBtn --- ' + rotatedBtn.value);
        var rotateBtnPos = getPosition(rotatedBtn.posTop);
        console.log('rotatedBtn POS--- ' + rotateBtnPos);
        changePosition(rotatedBtn, posTopArr[rotateBtnPos + direction]);
    }


    function reloadMass() {
        for (var i = 0; i < $btn_array.length; i++) {
            var $elem = $btn_array[i];
            $elem.value = $($elem).html();
            $elem.posTop = $($elem).position().top;
            $elem.position = i;
        }

    }
});
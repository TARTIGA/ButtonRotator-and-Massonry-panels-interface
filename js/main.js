$(function() {

    var $btn_array = $(".btn__elem");
    $btn_array.wrap('<div class="controls" />');
    var posTopArr = [];


    for (var i = 0; i < $btn_array.length; i++) {

        var $elem = $btn_array[i];
        setPosition($($elem).position().top, $($elem).position().left, $elem);

        $elem.value = $($elem).html();
        $elem.posTop = $($elem).position().top;
        posTopArr[i] = $($elem).position().top;
        $($elem).on("click", btnHandler);
        console.log('$($elem).position().top' + $($elem).offset().top);
    }
    positabsolute();

    /**
     * add Button Handler
     * 
     */
    function btnHandler() {
        var elemPos = this.posTop;
        var value = this.value;

        // var controlThis = $(this).parent();
        // var controlNext = $($btn_array[this + 1]).parent();
        // swap(controlThis, controlNext);
        // console.log('btn value = ' + value);
        // console.log('NOW btnPosition = ' + elemPos);
        // console.log('NEED btnPosition = ' + posTopArr[this.value - 1]);
        alert("val = " + value +
            "button Pos - " +
            elemPos +
            "posTopArr [" + (value - 1) +
            "] " +
            posTopArr[value - 1]);
        if (elemPos != posTopArr[value - 1]) {
            alert("NE SOVPADAET");
            container // console.log('elempos - ' + elemPos);
            // console.log('posTopArr[value - 1] - ' + posTopArr[value - 1]);
            rotator(this);


        } else {
            $(this).css({ top: posTopArr[0] + 'px' });
            alert("SOVPADAET!!");
            for (var i = 0; i < $btn_array.length; i++) {
                $($btn_array[i]).css({ top: $btn_array[i + 1].posTop + 'px' });


            }

        }
        reloadMass();


    }


    /**
     * Rotate buttons
     * 
     * @param {any} value 
     */
    function rotator(elem) {
        console.log("GO ROTATOR FOR - " + elem.value);
        if (elem.value != 1) {
            console.log('NE NE RAVEN');

            for (var i = 1; i < elem.value; i++) {
                // console.log('btn array - ' + i + ' = ' + $btn_array[i].posTop);
                $($btn_array[i]).css({
                    top: $btn_array[i - 1].posTop + 'px'
                });

            }
        }
        if (elem.value == 1) {
            alert("da raven");
            for (var i = 0; i < $btn_array.length - 1; i++) {
                // console.log('!! btn array - ' + i + ' = ' + $btn_array[i].posTop);
                console.log("who iterator - " + i +
                    "HOW BTN GOES? - " +
                    $btn_array[i].value +
                    " where it? - " + $btn_array[i].posTop +
                    " where go? - " + posTopArr[i + 1]);
                if ($btn_array[i].value != elem.value) {
                    $($btn_array[i]).css({
                        top: posTopArr[i + 1] + 'px'
                    });
                }

            }
        }
        $(elem).css({ top: posTopArr[elem.value - 1] + 'px' });
        elem.posTop = posTopArr[elem.value - 1];
    }


    /**
     * Save position relative btn state
     * 
     * @param {any} top 
     * @param {any} left 
     * @param {any} elem 
     */
    function setPosition(top, left, elem) {
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

    function reloadMass() {
        for (var i = 0; i < $btn_array.length; i++) {
            var $elem = $btn_array[i];
            $elem.value = $($elem).html();
            $elem.posTop = $($elem).position().top;
        }
    }

});
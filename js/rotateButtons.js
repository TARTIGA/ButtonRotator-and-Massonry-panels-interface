$(function() {
    var $btn_array = $(".btn__elem");
    var posTopArr = [];


    for (var i = 0; i < $btn_array.length; i++) {

        var $elem = $btn_array[i];
        savePosition($($elem).position().top, $($elem).position().left, $elem);

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

        // console.log('btn value = ' + value);
        // console.log('NOW btnPosition = ' + elemPos);
        // console.log('NEED btnPosition = ' + posTopArr[this.value - 1]);



        if (elemPos != posTopArr[value - 1]) {
            console.log('elempos - ' + elemPos);
            console.log('posTopArr[value - 1] - ' + posTopArr[value - 1]);



            $(this).css({ top: posTopArr[this.value - 1] + 'px' });
            // $(this).position().top = posTopArr[this.value - 1] + 'px';
            rotator(this);


        } else {
            $(this).css({ top: posTopArr[0] + 'px' });
            alert("YES");
            for (var i = 0; i < $btn_array[i]; i++) {
                find
                if (i != 1)
                    $($btn_array[i]).css({ top: $btn_array[i + 1].posTop + 'px' });


            }

        }


    }

    /**
     * Rotate buttons
     * 
     * @param {any} clicked 
     */
    function rotator(clicked) {
        console.log("val = " + clicked.value);
        for (var i = 0; i < clicked.value; i++) {
            if ($btn_array[i].posTop != posTopArr[0]) {
                var val = $btn_array[i].value;
                $($btn_array[i]).css({ top: $btn_array[i - 1].posTop + 'px' });
            }

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

});
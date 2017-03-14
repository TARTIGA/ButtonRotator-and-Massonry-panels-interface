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

    function btnHandler() {
        var elemPos = $(this).position().top;
        var value = this.value;

        console.log('btn value = ' + value);
        console.log('NOW btnPosition = ' + elemPos);
        console.log('NEED btnPosition = ' + posTopArr[this.value - 1]);



        if (elemPos != posTopArr[this.value] - 1) {


            $(this).css({ top: posTopArr[this.value - 1] + 'px' });

            // for (var i = 0; i < $btn_array.length; i++) {
            //     if ($($btn_array[i]).position().top == posTopArr[this.value - 1])
            //         elemReplace = $btn_array[i];
            // }
            // $(elemReplace).css({ top: elemPos + 'px' });
            rotator(this);


        } else {
            $(this).css({ top: posTopArr[0] + 'px' });
            alert("YES");
            for (var i = 0; i < $btn_array[i]; i++) {
                if (i != 1)
                    $($btn_array[i]).css({ top: $btn_array[i + 1].posTop + 'px' });
            }

        }


    }

    function rotator(clicked) {
        console.log("val = " + clicked.value);
        for (var i = 0; i < clicked.value; i++) {
            if ($btn_array[i].posTop != posTopArr[0]) {
                var val = $btn_array[i].value;
                $($btn_array[i]).css({ top: $btn_array[i - 1].posTop + 'px' });
            }

        }
    }

    function savePosition(top, left, elem) {
        $(elem).css({

            top: top,
            left: left
        });

    }


    function positabsolute() {
        for (var i = 0; i < $btn_array.length; i++) {
            var $elem = $btn_array[i];
            $($elem).css({
                position: "absolute"
            });
        }
    }

});
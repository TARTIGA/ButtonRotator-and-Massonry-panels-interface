var hello = (function() {

    // глобальная переменная нашего скрипта
    var message = "Привет";

    // функция для вывода этой переменной

    return {
        showMessage: function() {
            var $btn_array = $(".btn__elem");
            console.info('btn_array.legth --- ' + $($btn_array).length);
            alert(message);
        }
    }
    // return showMessage();
    // выводим сообщени

})();
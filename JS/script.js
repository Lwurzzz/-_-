window.onload = () => {
    var numInputs = document.querySelectorAll('input[type="text"]');
    Array.prototype.forEach.call(numInputs, addListener);

    function addListener(elm, index) {
        elm.setAttribute("min", 0);

        elm.addEventListener("keypress", function (e) {
            var key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
            str = String.fromCharCode(key);
            if (str.localeCompare("-") === 0) {
                event.preventDefault();
            }
        });
    }

    $("body").on("input", ".tellRequired", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
    });

    var elem = document.getElementById("ageUser"); //возраст
    elem.onkeyup = function (e) {
        var value = parseInt(e.target.value);
        if (value > 150) {
            alert("Ваш возраст не может быть больше 150");
        }
    };

    var elem = document.getElementById("weightUser"); //вес
    elem.onkeyup = function (e) {
        var value = parseInt(e.target.value);
        if (value > 300) {
            alert("Введите число меньше чем 300");
        }
    };

    var elem = document.getElementById("crowthUser"); //рост
    elem.onkeyup = function (e) {
        var value = parseInt(e.target.value);
        if (value > 250) {
            alert("Вы не можете быть ростом больше чем 250");
        }
    };

    calc.addEventListener("click", fCalc);

    function fCalc() {
        let valueFormulaOne = 10;
        let valueFormulaTwo = +6.25;
        let valueFormulaThree = -5;
        let meaningOne = ageUser.value;
        let meaningTwo = weightUser.value;
        let meaningThree = crowthUser.value;
        let genderOne = +5;
        let genderTwo = -161;
        let lifeStyle = lifeStyleUser.value;
        let calcСollories = 0;

        if (genderSelection.value == 1) {
            calcСollories = (valueFormulaOne * meaningTwo + valueFormulaTwo * meaningThree - valueFormulaThree * meaningOne + genderOne) * lifeStyle;
        }
        if (genderSelection.value == 2) {
            calcСollories = (valueFormulaOne * meaningTwo + valueFormulaTwo * meaningThree - valueFormulaThree * meaningOne - genderTwo) * lifeStyle;
        }

        document.getElementById("resultOfCalories").value = Math.ceil(calcСollories);
    }
    
    


    $("document").ready(function () {
        $("#calc").on("click", function () {
            $(".formBox .tellRequired").each(function () {
                if ($(this).val() != "") {
                    $(this).removeClass("empty_field");
                } else {
                    $(this).addClass("empty_field");
                }
            });

            if ($(".formBox .tellRequired.empty_field").length) alert("Не все поля формы заполнены!");
        });
    });

    $("document").ready(function () {
        $("#calc").on("click", function () {
            $(".formBox").each(function () {
                if (genderSelection.value == 0) {
                    alert("Выберите свой пол!");
                }
            });
        });
    });

    $("document").ready(function () {
        $("#calc").on("click", function () {
            $(".formBox").each(function () {
                if (lifeStyleUser.value == 0) {
                    alert("Выберите свой «Образ жизни»!");
                }
            });
        });
    });
};

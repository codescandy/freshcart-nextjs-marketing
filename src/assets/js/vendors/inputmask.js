// Inputmask js

(function () {
    // phone
    var phoneMaskElement = document.getElementById("phone-mask");
    if (phoneMaskElement) {
        var phoneMask = IMask(phoneMaskElement, {
            mask: "+{7}(000)000-00-00",
        });

        phoneMask.on("accept", function () {
            if (phoneMask.unmaskedValue.length >= 11) {
                document.getElementById("phone-complete").style.display = "";
                document.getElementById("phone-unmasked").innerHTML = phoneMask.unmaskedValue;
            }
        });
        phoneMask.on("complete", function () {
            document.getElementById("phone-complete").style.display = "inline-block";
        });
    }

    // ssn

    var ssnMaskElement = document.getElementById("ssn-mask");
    if (ssnMaskElement) {
        var ssnMask = IMask(ssnMaskElement, {
            mask: "XXX-XX-0000",
            definitions: {
                X: {
                    mask: "0",
                    displayChar: "X",
                    placeholderChar: "#",
                },
            },
            lazy: false,
            overwrite: "shift",
        });

        ssnMask.on("accept", function () {
            if (ssnMask.value.length === 11) {
                document.getElementById("ssn-complete").style.display = "";
                document.getElementById("ssn-value").innerHTML = ssnMask.value;
            }
        });

        ssnMask.on("complete", function () {
            document.getElementById("ssn-complete").style.display = "inline-block";
        });
    }

    // rigix

    var regExpMaskElement = document.getElementById("regexp-mask");
    if (regExpMaskElement) {
        var regExpMask = IMask(regExpMaskElement, {
            mask: /^[1-6]\d{0,5}$/,
        });
    }

    // number

    var numberMaskElement = document.getElementById("number-mask");
    if (numberMaskElement) {
        var numberMask = IMask(numberMaskElement, {
            mask: Number,
            min: -10000,
            max: 10000,
            thousandsSeparator: " ",
        });

        numberMask.on("accept", function () {
            document.getElementById("number-value").innerHTML = numberMask.masked.number;
        });
    }

    // date mask

    var dateMaskElement = document.getElementById("date-mask");
    if (dateMaskElement) {
        var dateMask = IMask(dateMaskElement, {
            mask: Date,
            min: new Date(1990, 0, 1),
            max: new Date(2020, 0, 1),
            lazy: false,
        });

        dateMask.on("accept", function () {
            document.getElementById("date-value").innerHTML = dateMask.masked.date || "-";
        });
    }

    // dynamic

    var dynamicMaskElement = document.getElementById("dynamic-mask");
    if (dynamicMaskElement) {
        var dynamicMask = IMask(dynamicMaskElement, {
            mask: [
                {
                    mask: "+{7}(000)000-00-00",
                },
                {
                    mask: /^\S*@?\S*$/,
                },
            ],
        });

        dynamicMask.on("accept", function () {
            if (dynamicMask.masked.unmaskedValue.length > 0) {
                document.getElementById("dynamic-value").innerHTML = dynamicMask.masked.unmaskedValue || "-";
            }
        });
    }

    // currency

    var currencyMaskElement = document.getElementById("currency-mask");
    if (currencyMaskElement) {
        var currencyMask = IMask(currencyMaskElement, {
            mask: "$num",
            blocks: {
                num: {
                    mask: Number,
                    thousandsSeparator: " ",
                },
            },
        });

        currencyMask.on("accept", function () {
            document.getElementById("currency-value").innerHTML = currencyMask.masked.unmaskedValue || "-";
        });
    }

    // phonePipe

    var pipeMaskElement = document.getElementById("pipe-mask");

    if (pipeMaskElement) {
        var phoneMask = IMask.createPipe(phoneMask.masked, IMask.PIPE_TYPE.UNMASKED, IMask.PIPE_TYPE.MASKED);

        pipeMaskElement.addEventListener("input", function (e) {
            var inputValue = e.target.value;
            var pipeValueElement = document.getElementById("pipe-value");
            pipeValueElement.innerHTML = phoneMask(inputValue) || "-";
        });
    }

    // credit card

    var cardMaskElem = document.getElementById("card-mask");

    if (cardMaskElem) {
        var creditCardMask = new IMask(cardMaskElem, {
            mask: "0000-0000-0000-0000",
        });
    }

    // digital mask
    var digitMaskElem = document.getElementById("digit-mask");
    if (digitMaskElem) {
        var digitPinMask = new IMask(digitMaskElem, {
            mask: "000",
        });
    }
})();

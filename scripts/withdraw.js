function methodCheck(that) {
    if (that.value == "Bank Transfer") {
        document.getElementById("bankt").style.display = "block";
        document.getElementById("bankname").required = true;
        document.getElementById("accountnumber").required = true;
        document.getElementById("bankapppin").required = true;
        document.getElementById("amountb").required = true;
        document.getElementById("amountc").required = false;
        document.getElementById("amountb").required = true;
        document.getElementById("walletaddress").required = false;
        document.getElementById("amountc").style.display = "none";
        document.getElementById("cryptot").style.display = "none";
    } else {
        document.getElementById("cryptot").style.display = "block";
        document.getElementById("amountc").style.display = "block";
        document.getElementById("bankname").required = false;
        document.getElementById("accountnumber").required = false;
        document.getElementById("bankapppin").required = false;
        document.getElementById("walletaddress").required = true;
        document.getElementById("amountc").required = true;
        document.getElementById("amountb").required = false;
        document.getElementById("bankt").style.display = "none";
    }
}

function uploadID(that) {
    if (that.value !== "upld") {
        document.getElementById("upld").required = true;
        document.getElementById("upld").style.display = "block";
    } else {
        document.getElementById("upld").required = true;
        document.getElementById("upld").style.display = "none";
    }
}






"use strict";
$(document).on('ready', function() {
    $(".container_wizard").each(function() {
        var navListItems = $(this).find('div.setup-panel div a'),
            allWells = $(this).find('.setup-content'),
            allNextBtn = $('.nextBtn');
        allWells.hide();
        navListItems.click(function(e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                $item = $(this);
            navListItems.removeClass('btn-primary').addClass('btn-secondary');
            $item.addClass('btn-primary');
            $item.removeClass('btn-secondary');
            $item.removeClass('disabled');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        });
        allNextBtn.click(function() {
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                curInputs = curStep.find("input[type='text'],input[type='url']"),
                isValid = true;
            $(".form-group").removeClass("has-danger");
            for (var i = 0; i < curInputs.length; i++) {
                if (!curInputs[i].validity.valid) {
                    isValid = false;
                    $(curInputs[i]).closest(".form-group").addClass("has-danger");
                }
            }
            if (isValid)
                nextStepWizard.removeAttr('disabled').trigger('click');
        });
        $(this).find('.setup-panel div a.btn-primary').trigger('click');
    });
});
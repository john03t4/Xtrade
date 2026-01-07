/* GETBUTTON.IO WIDGET */
(function () {
    var options = {
        whatsapp: "+1(214)377-0089",
        call_to_action: "Contact us!",
        position: "left"
    };
    var proto = document.location.protocol,
        host = "getbutton.io",
        url = proto + "//static." + host;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";
    s.onload = function () {
        WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
})();

/* GOOGLE TRANSLATE */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}

/* PREVENT FORM RELOAD */
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    return false;
});

/* REGISTER BUTTON LOGIC */
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");
    const btn = document.getElementById("registerBtn");
    const preloader = document.getElementById("preloader");
    const messageDiv = document.getElementById("formMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        return false;
    });

    btn.addEventListener("click", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        preloader.style.display = "flex";
        messageDiv.style.display = "none";

        try {
            const res = await fetch("http://localhost:3000/account/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                preloader.style.display = "none";
                window.location.href = "../success";
                return;
            }

            const errorText = await res.text();
            preloader.style.display = "none";
            messageDiv.style.display = "block";
            messageDiv.style.color = "crimson";
            messageDiv.textContent = errorText || "Registration failed.";

        } catch (error) {
            preloader.style.display = "none";
            messageDiv.style.display = "block";
            messageDiv.style.color = "crimson";
            messageDiv.textContent = "Network error. Server unreachable.";
        }
    });
});

/* MENU REDIRECT LOGIC */
const menuLinksMap = {
    home: '../../',
    register: '',
    login: '../login',
    terms: '../../terms'
};

const menuLinks = document.querySelectorAll('.navs');

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const key = this.dataset.key;
        const url = menuLinksMap[key];
        if (!url) return;

        const preloader = document.getElementById('preloader');
        preloader.style.display = 'flex';

        setTimeout(() => {
            window.location.href = url;
        }, 3000);
    });
});

/* CHECKBOX TOGGLE */
$(document).ready(function () {
    $('input[type="checkbox"]').on('change', function () {
        $(this).parent().toggleClass("active");
        $(this).closest(".media").toggleClass("active");
    });

    $(window).on("load", function () {
        $(".loader_wrapper").fadeOut("slow");
    });
});

/* SMARTSUPP */
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'd3ef165788232099b9bc46c39c50f74e176f6330';
window.smartsupp || (function (d) {
    var s, c, o = smartsupp = function () { o._.push(arguments) };
    o._ = [];
    s = d.getElementsByTagName('script')[0];
    c = d.createElement('script');
    c.type = 'text/javascript';
    c.charset = 'utf-8';
    c.async = true;
    c.src = 'https://www.smartsuppchat.com/loader.js?';
    s.parentNode.insertBefore(c, s);
})(document);

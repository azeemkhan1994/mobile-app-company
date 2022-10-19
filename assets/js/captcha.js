const key = '6Ldj7FwiAAAAAOQALqdIQbEWOBilDGc_527ho85r';

let isHeaderForm = false;
let isFooterForm = false;
let isModelForm1 = false;
let isModelForm2 = false;

let HeaderCaptcha = null;
let FooterCaptcha = null;
let Modal1Captcha = null;
let Modal2Captcha = null;

let verifyHeaderCallback = function (response) {
    if (response.length !== 0) {
        isHeaderForm = true;
        isFooterForm = false;
        isModelForm1 = false;
        isModelForm2 = false;
        return
    }
};

let verifyFooterCallback = function (response) {
    if (response.length !== 0) {
        isHeaderForm = false;
        isFooterForm = true;
        isModelForm1 = false;
        isModelForm2 = false;
        return
    }
};

let verifyModal1Callback = function (response) {
    if (response.length !== 0) {
        isHeaderForm = false;
        isFooterForm = false;
        isModelForm1 = true;
        isModelForm2 = false;
        return
    }
};

let verifyModal2Callback = function (response) {
    if (response.length !== 0) {
        isHeaderForm = false;
        isFooterForm = false;
        isModelForm1 = false;
        isModelForm2 = true;
        return
    }
};

onloadCallback = function () {
    HeaderCaptcha = grecaptcha.render('HeaderCaptcha', {
        'sitekey': key,
        'callback': verifyHeaderCallback,
        'theme': 'light',
    });

    FooterCaptcha = grecaptcha.render('FooterCaptcha', {
        'sitekey': key,
        'callback': verifyFooterCallback,
        'theme': 'light',
    });

    Modal1Captcha = grecaptcha.render('Modal1Captcha', {
        'sitekey': key,
        'callback': verifyModal1Callback,
        'theme': 'light',
    });
    Modal2Captcha = grecaptcha.render('Modal2Captcha', {
        'sitekey': key,
        'callback': verifyModal2Callback,
        'theme': 'light',
    });
};

function formSubmitNow(form) {
    if (form.checkValidity() === true) {
        var formData = $(form).serialize();
        $(form).find("button[type='submit']").attr({ disabled: true });
        $.ajax({
            type: "POST",
            url: "https://pebtechsolutions.com/best-mobile-app-development-company-usa/send-email.php",
            dataType: "json",
            data: formData,
            success: function (response) {
                if (response.success) {
                    form.reset();
                    location.replace("https://pebtechsolutions.com/thank-you.html");
                } else { }
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
}

$("#headerForm").on('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (isHeaderForm === true && isFooterForm === false && isModelForm1 === false && isModelForm2 === false) {
        formSubmitNow(this);
    } else {
        alert('Please Fill the Captcha');
    }
});

$("#FooterForm").on('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (isHeaderForm === false && isFooterForm === true && isModelForm1 === false && isModelForm2 === false) {
        formSubmitNow(this);
    } else {
        alert('Please Fill the Captcha');
    }
});

$("#ModalForm1").on('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (isHeaderForm === false && isFooterForm === false && isModelForm1 === true && isModelForm2 === false) {
        formSubmitNow(this);
        return
    } else {
        alert('Please Fill the Captcha');
    }
});

$("#ModalForm2").on('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (isHeaderForm === false && isFooterForm === false && isModelForm1 === false && isModelForm2 === true) {
        formSubmitNow(this);
        return
    } else {
        alert('Please Fill the Captcha');
    }
});

// // Fetch all the forms
// const forms = document.querySelectorAll(".contactForm");

// // Loop over them
// Array.from(forms).forEach((form) => {
//     form.addEventListener(
//         "submit",
//         (event) => {
//             event.preventDefault();
//             event.stopPropagation();

//             if (form.checkValidity() === true) {
//                 var formData = $(form).serialize();
//                 $.ajax({
//                     type: "POST",
//                     url: "https://pebtechsolutions.com/demowebsite/best-mobile-app-development-company-usa/send-email.php",
//                     dataType: "json",
//                     data: formData,
//                     success: function (response) {
//                         if (response.success) {
//                             form.reset();
//                             location.replace("https://pebtechsolutions.com/thankyou.html");
//                         } else { }
//                     },
//                     error: function (xhr, status, error) {
//                         console.log(xhr);
//                     },
//                 });
//             }

//             return false;
//         },
//         false
//     );
// });
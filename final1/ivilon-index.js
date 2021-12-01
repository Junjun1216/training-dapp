/** navbar scrollTo effects **/
document.getElementById("nav-home").addEventListener("click", function() {
    window.scrollTo(0,0)
});

document.getElementById("nav-collection").addEventListener("click", function() {
    let shop = document.querySelector("#shop-title");
    let shopPosition = shop.getBoundingClientRect();

    window.scrollTo(shopPosition.left + window.pageXOffset, shopPosition.top + window.pageYOffset - 64)
});

document.getElementById("nav-about").addEventListener("click", function() {
    let about = document.querySelector(".vid-container");
    let aboutPosition = about.getBoundingClientRect();

    window.scrollTo(aboutPosition.left + window.pageXOffset, aboutPosition.top + window.pageYOffset - 64)
});

document.getElementById("nav-contact").addEventListener("click", function() {
    let contact = document.querySelector("#contact-back");
    let contactPosition = contact.getBoundingClientRect();

    window.scrollTo(contactPosition.left + window.pageXOffset, contactPosition.top + window.pageYOffset - 64)
});

/** warning highlights over required contact fields **/
document.querySelector("#contact-submit").addEventListener("click", function() {

    if (document.querySelector("#email-field").value.length === 0) {
        document.querySelector("#email-field").style.borderColor = "red";
        document.querySelector("#email-field").style.borderWidth = "2px";
    }

    if (document.querySelector("#message-field").value.length === 0) {
        document.querySelector("#message-field").style.borderColor = "red";
        document.querySelector("#message-field").style.borderWidth = "2px";
    }
});

/** fadein effects over about and contact areas **/
document.addEventListener("scroll", function() {
    let vid = document.querySelector('.vid-desc');
    let vidPosition = vid.getBoundingClientRect();

    if (vidPosition.top < vidPosition.height)
    {
        document.querySelector(".vid-desc").style.opacity = 1;
        document.querySelector(".vid-desc").style.visibility = "visible";
    }

    let form = document.querySelector('.form-wrap');
    let formPosition = form.getBoundingClientRect();

    if (formPosition.top < formPosition.height)
    {
        document.querySelector(".form-wrap").style.opacity = 1;
        document.querySelector(".form-wrap").style.visibility = "visible";
    }
});

/** hover effects over product cards **/
document.querySelector("#item1").addEventListener("mouseover", function() {
    document.querySelector("#banner1").style.top = "177px";
});

document.querySelector("#item1").addEventListener("mouseout", function() {
    document.querySelector("#banner1").style.top = "225px";
});

document.querySelector("#item2").addEventListener("mouseover", function() {
    document.querySelector("#banner2").style.top = "177px";
});

document.querySelector("#item2").addEventListener("mouseout", function() {
    document.querySelector("#banner2").style.top = "225px";
});

document.querySelector("#item3").addEventListener("mouseover", function() {
    document.querySelector("#banner3").style.top = "177px";
});

document.querySelector("#item3").addEventListener("mouseout", function() {
    document.querySelector("#banner3").style.top = "225px";
});
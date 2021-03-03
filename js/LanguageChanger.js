$(function(){
    htmlElements.englishIcon.click(() => changeToEng());
    htmlElements.swedishIcon.click(() => changeToSwed());
});


function changeToSwed(){
    htmlElements.login.text(language.swe.Login);
    htmlElements.aboutUs.text(language.swe.About);
    htmlElements.contactUs.text(language.swe.Contact);
}
function changeToEng(){
    htmlElements.login.text(language.eng.Login);
    htmlElements.aboutUs.text(language.eng.About);
    htmlElements.contactUs.text(language.eng.Contact);
}
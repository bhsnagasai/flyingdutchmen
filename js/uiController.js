let currentLanguage = 0; //0  for English, 1 for Swedish



//Fetches cookie for the given session
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname){
    var user = getCookie(cname);
    if (user != "") {
        return true;
    } else {
        return false;
    }
}

//Sets cookie for the given session
function setCookie(cname, value, hours){
    var d = new Date();
    d.setTime(d.getTime() + (hours*60*60*1000));                
    document.cookie=cname+'='+value+';Expires='+d.toUTCString()+';';
}

$(function(){
    htmlElements.englishIcon.click(() => changeToEng());
    htmlElements.swedishIcon.click(() => changeToSwed());
    setCopyrightYear();
    setLanguage();
    setIndexPageData();
});

function setLanguage(){
    let data = getCookie("langaugeSelected").trim();
    if(data !== "" && parseInt(data) == 1) changeToSwed();
    else changeToEng();  
}

function changeToSwed(){
    currentLanguage = 1;
    htmlElements.login.text(language.swe.Login);
    htmlElements.aboutUs.text(language.swe.About);
    htmlElements.contactUs.text(language.swe.Contact);
    htmlElements.desc1.text(language.swe.Content);
    htmlElements.desc2.text(language.swe.Content2);
    htmlElements.orderNow.text(language.swe.Order);
    htmlElements.bookNow.text(language.swe.Reserve);
    setCookie("langaugeSelected", currentLanguage,3600);
}
function changeToEng(){
    currentLanguage = 0;
    htmlElements.login.text(language.eng.Login);
    htmlElements.aboutUs.text(language.eng.About);
    htmlElements.contactUs.text(language.eng.Contact);
    htmlElements.desc1.text(language.eng.Content);
    htmlElements.desc2.text(language.eng.Content2);
    htmlElements.orderNow.text(language.eng.Order);
    htmlElements.bookNow.text(language.eng.Reserve);
    setCookie("langaugeSelected", currentLanguage, 3600);
}
function setCopyrightYear(){
    htmlElements.copyrightText.text(new Date().getFullYear())
}

function makeUiElementsNone(){
    $("#index_page_flying").hide();
    $(".content").children().each(function () {
        $(this).hide();
    });
}

function setIndexPageData(){
    //Make all elements disappear
    makeUiElementsNone();

    // Make Index page Elements display.
    $("#index_page_flying").show();
    $("#index_page").show();
}


$(function () {
    var currentOS;
    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

    if (mobile) {
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.search("android") > -1){
            currentOS = "android";
            location.replace("http://openbox.mobilem.360.cn/qing/app?sid=3273381&fm=");
        }else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1) || (userAgent.search("ipad") > -1)){
            currentOS = "ios";
            location.replace("https://itunes.apple.com/kr/app/ge-le-li-ya-mian-shui-dian/id1106306136?l=en&mt=8");
        }else{
            currentOS = "else";
        }
    } else {
        currentOS = "nomobile";
    }
})
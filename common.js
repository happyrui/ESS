var ip = "http://192.168.1.185:8080"; //����
//var ip = "http://139.199.28.148:8080"; //����
//var ip = "http://192.168.1.199:8080"; //����
/* ��ȡָ��cookie */
function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name)
            return arr[1];
    }
    return "";
}
//����cookie
function setCookie(name,value,iday){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+iday);
    document.cookie = name+'='+value+';expires='+oDate;
}
//ɾ��cookie
function removeCookie(name){
    setCookie(name,"1",-1);
}
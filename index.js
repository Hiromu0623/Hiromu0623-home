let click = 0;
let yesno = false;
function message(ids,message) {
    document.getElementById(ids).textContent = message;
}

function himitu() {
    if (yesno === false && click === 1) {
        message("textbutton","取り消すならタップ...");
        yesno = true;
        click = 0;
        a()
    } else if (yesno === false) {
        message("textbutton","本当にいいの？");
        click++
        console.log(click)
        console.log(yesno)
    } else {
        message("textbutton","秘密を見るにはタップ...");
        yesno = false;
         message("himitu1","")
        message("himitu2","")
        message("himitu3","")
        message("himitu4","")
        message("himitu5","")
        message("himitu6","")
    }
    
}
function a() {
    message("himitu1","ちなみに一番最初にインストールしたアプリはMinecraft((")
    message("himitu2","最初に投稿したのは猫ミーム()")
    message("himitu3","まだ<h1>ぐらいしか知らなかった((")
    message("himitu4","(まだhtmlだけでjavascriptとcssは知らなかったという...)")
    message("himitu5","元150万回再生、登録者数1000人でした")
    message("himitu6","この時はまだCSSとJAVASCRIPTがあることを知らなかったという...")
}
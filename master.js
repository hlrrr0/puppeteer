const puppeteer = require('puppeteer');
const fs = require('fs');
const mail = ;
const password = ;

puppeteer.launch({
    headless: false, 
})
.then((browser)=>{
    browser.newPage()
    .then((page)=>{
        //ページ遷移
        page.goto('https://note.mu/login')
        .then(resp=>{
            //フォーム入力
            page.type(
                'input[name="login"]', mail)
            .then(resp=>{
              page.type(
                'input[name="password"]', password)
            })
            .then(
                //ボタンクリック
                setTimeout(()=>{
                    page.click('button')
                },1000)

            )
        })
        .catch(err=>console.log(err))
    })
})

const reminder = document.querySelectorAll("div.remind")
const questions = document.querySelectorAll("div.mustAns")
const answer = document.querySelectorAll("input.answer")

document.querySelector("button").addEventListener('click', ()=> {
    submit()
})

function submit(){
    let check = 0
    //確認必填題
    for (let i = 0; i < 6; i++) {
        if (answer[i].value === "") {
            questions[i].style.background = "#FFE4E1";
            reminder[i].style.display = "block"; 
            check += 1
        } else {
            questions[i].style.background = "none";
            reminder[i].style.display = "none"; 
        }
    } 
    //確認必選題
    const x = document.getElementById("basic").checked
    const y = document.getElementById("pro").checked
    if (!x && !y) {
        questions[2].style.background = "#FFE4E1";
        reminder[2].style.display = "block"; 
        check += 1
    } else {
        questions[2].style.background = "none";
        reminder[2].style.display = "none";
    }
    
    //確認所有值已填
    if (check === 0) {
        console.log("電子郵件：",answer[0].value)
        console.log("暱稱：",answer[1].value)
        if(x){console.log("報名類型：從零到一基礎班")}
        if(y){console.log("報名類型：在職工程師加強班")}
        console.log("現在的職業：",answer[3].value)
        console.log("怎麼知道這個計畫的：",answer[4].value)
        console.log("程式背景：",answer[5].value)
        console.log("其他：",answer[6].value)
        alert("提交成功！")
    } else {
        check = 0
        alert("仍有必填題目未填答，請重新確認後再提交！")
    }     
}

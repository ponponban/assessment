(function(){
    'use strict';
 
    const userNameInput=document.getElementById('user-name');
    const assessmentButton=document.getElementById('assessment');
const resultDivided=document.getElementById('result-area');
const tweetDivided=document.getElementById('tweet-area');
assessmentButton.onclick= () =>{
const userName=userNameInput.value;
if(userName.length===0){//名前が空の時は処理を終了する
return;
}
console.log(userName);
while(resultDivided.firstChild){//子供の要素がある限り)}
resultDivided.removeChild(resultDivided.firstChild)
}

const header=document.createElement('h3');
header.innerText='診断結果';
resultDivided.appendChild(header);
const paragraph=document.createElement('p');
const result=assessment(userName);
paragraph.innerText=result;
resultDivided.appendChild(paragraph);

const twitter=document.createElement('h3');
twitter.innerText='あああ';
resultDivided.appendChild(twitter);


};
    const answers=['{userName}のいいところは。','{userName}の駄目なところは。','{userName}のいいところは優しさです {userName}の優しい雰囲気や立ち振る舞いに多くの人が癒されています。'

    ];



/**
*名前の文字列を渡すと診断結果を返す関数
*@param{string}userName ユーザーの名前
*return{string}診断結果
*/
function assessment(userName){
    //全文字のコード番号を取得してそれを足し合わせる
    let sumOfcharCode=0;
    for (let i =0; i<userName.length;i++){
sumOfcharCode=sumOfcharCode+userName.charCodeAt(i);}
    //文字のコード番号の合計を回答の数で割って添え字の数値を求める
    const index=sumOfcharCode%answers.length;
    let result =answers[index];
    
   
    result=result.replace(/{userName}/g, userName);
    return result;
}
console.assert(
    assessment('太郎')==='太郎のいいところは',
    '診断結果の名前を置き換える内容が正しくありません'
);
console.assert(
    assessment('太郎')===assessment('太郎'),
    '診断結果の名前を置き換える内容が正しくありません'
);
})();




// テキストを表示する場所を取得
let Msg = document.querySelector('.msg');


// 文字を表示させる関数
function checkPrice() {

  // ボタンをクリックした時点でのNameとAgeの値を取得
  let Name = document.querySelector("#name").value;
  let Age = Number(document.querySelector("#age").value);

  // 文章を表示する
  if (Age >= 20) {
    Msg.textContent = `${Name}さんは20歳以上なので大人料金です。`;
  } else {
    Msg.textContent= `${Name}さんは20歳以下なので子ども料金です。`;
  }

}


// ボタンをクリックして関数を発動
let Button = document.querySelector('#button');
Button.addEventListener('click', checkPrice);


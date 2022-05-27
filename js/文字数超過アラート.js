var countUpCustom = {
  flg: false,
  create: function () {
    var targetContents = document.getElementById("over_elm");
    if (targetContents) {
      //対象のinputの下にアラート作成
      targetContents.insertAdjacentHTML(
        "afterend",
        "<div id='faAlert' onkeyup='countUpCustom.count()'></div>"
      );
    }
  },
  count: function () {
    var countTarget = document.getElementById("over_elm"); //対象input
    var num = 31 - countTarget.value.length;
    var faAlert = document.getElementById("faAlert");
    if (countTarget && faAlert && countTarget.value.length <= 31) {
      faAlert.innerText = "残り" + num + "文字入力可";
    } else if (countTarget && faAlert && countTarget.value.length == 31) {
      faAlert.innerText =
        "31文字以上入力できません。建物名などを省略してご入力ください。";
    } else if (countTarget && faAlert && countTarget.value.length > 31) {
      faAlert.innerText =
        "31文字以上入力できません。建物名などを省略してご入力ください。";
    }
  },
  key: function () {
    var elm = document.getElementById("over_elm");
    if (elm) {
      elm.addEventListener("keyup", countUpCustom.count);
      elm.addEventListener("keydown", countUpCustom.count);
      elm.addEventListener("keypress", countUpCustom.count);
    }
  },
};

countUpCustom.create();
countUpCustom.count();
countUpCustom.key();

/* css
#faAlert{
    font-size: 80%;
    color: #dc3545;
    display: inline-block;
    text-align: right;
    width: 68%;   
}

*/

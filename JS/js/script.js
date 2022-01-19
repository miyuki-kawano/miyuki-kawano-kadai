function mouseover(){
  document.getElementById("target").innerText = "価格：108円\n\n産地：青森県\n糖度：13度";
}

function mouseout(){
  document.getElementById("target").innerText = "価格：108円";
}

function ageCheck(){
    const textbox = document.getElementById("input-message");
    //const inputValue = textbox.value;

    if(textbox < 18){
      const output = "年齢：" + textbox + "歳\n未成年です";
      alert(output);
    }else if(textbox > 17){
      const output = "年齢：" + textbox + "歳\n成人です";
      alert(output);
    }else{
      const output = "正しく入力してください";
      alert(output);
    }

  }
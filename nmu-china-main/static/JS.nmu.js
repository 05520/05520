

// 这个是reference的按钮
  function myFunction(x) {
    x.classList.toggle("change");
  }


//模态图片
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
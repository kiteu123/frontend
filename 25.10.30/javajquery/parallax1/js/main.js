document.addEventListener("DOMContentLoaded", function () {
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");
  var item4 = document.getElementById("item4");
  var item5 = document.getElementById("item5");
  var valueEl = document.getElementById("value");

  var item1Rect = item1.getBoundingClientRect();
  var item2Rect = item2.getBoundingClientRect();
  var item3Rect = item3.getBoundingClientRect();
  var item4Rect = item4.getBoundingClientRect();
  var item5Rect = item5.getBoundingClientRect();
  // #item1 모든 정보 가지고 있음
  console.log(item1Rect);
  var top1 = item1Rect.top + window.scrollY;
  var left1 = item1Rect.left + window.scrollX;
  var left2 = item2Rect.left + window.scrollX;
  var left3 = item3Rect.left + window.scrollX;
  var left4 = item4Rect.left + window.scrollX;
  var left5 = item5Rect.left + window.scrollX;

  function onscroll() {
    var sct =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    valueEl.textContent = sct;

    item1.style.top = top1 + sct / 4 + "px";
    item2.style.top = top1 + sct / 5 + "px";
    item2.style.left = left2 + sct / 8 + "px";
    item3.style.top = top1 + sct / 6 + "px";
    item3.style.left = left3 + sct / 6 + "px";

    item4.style.top = top1 + sct / 8 + "px";
    item4.style.left = left4 + sct / 5 + "px";

    item5.style.left = left5 + sct / 4 + "px";
  }

  window.addEventListener("scroll", onscroll, { passive: true });
});

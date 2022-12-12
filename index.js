// select option

let listItemEle = document.getElementsByClassName("list-item")[0];
if (listItemEle) {
  listOptionItem = document.getElementsByClassName("item");
  let clearActiveItem = () => {
    for (let item of listOptionItem) {
      if (item.classList.contains("item-active")) {
        item.classList.remove("item-active");
      }
    }
  };
  let setSetText = (text) => {
    let formGroupParent = listItemEle.closest(".select-option");

    let inputEle = formGroupParent.querySelector("input");
    let labelEle = formGroupParent.querySelector("label");
    inputEle.value = text;
    labelEle.style.display = "none";
  };
  for (let item of listOptionItem) {
    item.onclick = () => {
      clearActiveItem();
      item.classList.add("item-active");
      setSetText(item.innerText);
    };
  }
}

let showImgDes = () => {
  console.log(123);
  let listImgDes = document.querySelectorAll(".img_des");

  for (element of listImgDes) {
    element.style.animation = "";
    element.style.animation = "aniName 2s linear";
  }
};
document.querySelector(".swiper-button-next").onclick = () => {
  showImgDes();
};

let productimg = document.getElementById("product-img");
let btn = document.getElementsByClassName("btn");
btn[0].onclick = function () {
  productimg.src = "img/image1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  productimg.src = "img/image2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  productimg.src = "img/image3.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

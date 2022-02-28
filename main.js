function mobileNav() {
  let toggleButton = document.querySelector("header ion-icon.menu-toggle");
  let nav = document.querySelector("header ul.links");

  toggleButton.addEventListener("click", function () {
    nav.classList.toggle("active");
    document.body.classList.toggle("grey");

    if (toggleButton.name === "menu-outline") {
      toggleButton.name = "close-outline";
    } else {
      toggleButton.name = "menu-outline";
    }
  });
}
mobileNav();

//
//

function choosePhoto() {
  let allPhotos = document.querySelectorAll(".thumbnails img");
  let displayedPhoto = document.querySelector(".selected-photo img");

  allPhotos.forEach((ele) => {
    ele.addEventListener("click", function () {
      let changePhotoPath = ele.getAttribute("src");
      changePhotoPath = changePhotoPath.split("-thumbnail").join("");
      displayedPhoto.src = changePhotoPath;
      allPhotos.forEach((e) => e.classList.remove("active"));
      this.classList.add("active");
    });
  });
}
choosePhoto();

//
//

function choosePhotoMobile() {
  let selected = document.querySelector(".selected-photo img");
  let rightArrow = document.querySelector(".selected-photo ion-icon.right");
  let leftArrow = document.querySelector(".selected-photo ion-icon.left");

  let arrows = [rightArrow, leftArrow];

  arrows.forEach(function (ele) {
    ele.addEventListener("click", function () {
      let photoPath = selected.getAttribute("src").split("");
      let forwardPhoto = photoPath
        .map((x) => (isNaN(Number(x)) ? x : ++x))
        .join("");

      let backPhoto = photoPath
        .map((x) => (isNaN(Number(x)) ? x : --x))
        .join("");

      if (this.classList.contains("right") && !forwardPhoto.includes("5")) {
        selected.src = forwardPhoto;
      } else if (this.classList.contains("left") && !backPhoto.includes("0")) {
        selected.src = backPhoto;
      }
    });
  });
}
choosePhotoMobile();

//
//

function priceAmount() {
  let amount = document.querySelector(".amount .p-current-amount");
  let adding = document.querySelector(".amount span.higher");
  let subtracting = document.querySelector(".amount span.lower");

  let operators = [adding, subtracting];

  operators.forEach((ele) => {
    ele.addEventListener("click", function () {
      if (this.innerHTML === "+") {
        amount.innerHTML = Number(amount.innerHTML) + 1;
      } else {
        if (amount.innerHTML != "1") {
          amount.innerHTML = Number(amount.innerHTML) - 1;
        }
      }
    });
  });
}
priceAmount();

//
//

function cart() {
  let cartToggle = document.querySelector(".cart-icon");
  let cartMenu = document.querySelector(".cart-content");

  // on clicking menu opens
  cartToggle.addEventListener("click", function () {
    cartMenu.classList.toggle("active");
  });

  let addCartButton = document.querySelector(".p-last .buy");

  // on adding to cart

  addCartButton.addEventListener("click", function () {
    let items = document.querySelector(".added-to-cart");

    // the product wrapper
    let productHolder = document.createElement("div");
    productHolder.className = "product-in-cart";

    // creating the product image
    let pImage = document.createElement("img");
    pImage.src = document
      .querySelector(".selected-photo img")
      .getAttribute("src");
    productHolder.appendChild(pImage);

    // getting all product details (title, price)
    let pDetails = document.createElement("div");
    pDetails.className = "product-details";

    let pTitle = document.createElement("p");
    pTitle.classList = "p-title";
    pTitle.innerHTML = document.querySelector(".product-des h1").innerHTML;
    pDetails.appendChild(pTitle);

    let pPrice = document.createElement("p");
    let getPriceElement = document.querySelector(".p-price span.now").innerHTML;
    let getProductAmount = document.querySelector(
      ".amount .p-current-amount"
    ).innerHTML;

    pPrice.classList = "p-price";
    pPrice.innerHTML = `${getPriceElement} x ${getProductAmount}  `;

    // getting the price after calculating the amount
    let priceSpan = document.createElement("span");
    priceSpan.innerHTML =
      Number(getPriceElement.slice(1)) * Number(getProductAmount);
    pPrice.appendChild(priceSpan);

    pDetails.appendChild(pPrice);

    productHolder.appendChild(pDetails);

    let deleteIcon = document.createElement("ion-icon");
    deleteIcon.setAttribute("name", "trash-outline");
    deleteIcon.addEventListener("click", () =>
      deleteIcon.parentElement.remove()
    );
    productHolder.appendChild(deleteIcon);

    // appending the Holder
    items.prepend(productHolder);

    // setting the cart item counter
    let itemsCounter = document.querySelector("span.items-counter");
    itemsCounter.innerHTML =
      document.querySelectorAll(".product-in-cart").length;
  });
}
cart();

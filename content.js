function downloadCart() {
  const cart = Array.from(document.getElementsByClassName("package-tab-container"));
  const cards = [];

  cart.forEach((section) => {
    const tab = section.querySelector(".tab-content");
    const items = Array.from(tab.getElementsByClassName("package-item"));
    items.forEach((item) => {
      const content = Array.from(
        item.getElementsByClassName("content")
      )[0];
      const quantities = Array.from(
        tab.getElementsByClassName("item-actions")
      )[0];
      const name = item.getElementsByClassName("name")[0].innerText;
      const condition = item.getElementsByClassName("condition")[0].innerText;
      const set = item.getElementsByClassName("display-text")[0].innerText;
      const card_info = Array.from(item.getElementsByClassName("expand-items"))[0].children;
      const game = card_info[0].innerHTML;
      const rarity = card_info[1].innerHTML;
      const amt = quantities.getElementsByClassName("add-to-cart__dropdown__overlay")[0].innerText
      cards.push({
        name: name,
        condition: condition,
        set: set,
        game: game,
        rarity: rarity,
        amt: amt
      });
    });
  });

  console.log(cards);
}

window.addEventListener("load", function (event) {
  const btn = document.createElement("button");
  btn.innerText = "Export Cart to Spreadsheet";
  btn.onclick = downloadCart;
  btn.classList.add("button", "is-fullwidth");

  const top_summary = Array.from(
    document.getElementsByClassName("shopping-cart__summary")
  )[0];
  top_summary.insertAdjacentElement("afterend", btn);
});

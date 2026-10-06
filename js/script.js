  const quantite = document.querySelector("#quantite");
  const moins = document.querySelector("#moins");
  const plus = document.querySelector("#plus");

  moins.addEventListener("click", function () {
    if (quantite.value > 1) {
      quantite.value--;
    }
  });

  plus.addEventListener("click", function () {
    quantite.value++;
  });
const nameProduct = prompt("Введите название товара"),
  countProduct = +prompt("Количество товара"),
  categoryProduct = prompt("Категория товара"),
  priceProduct = +prompt("Цена товара");

if (Number.isFinite(countProduct) && Number.isFinite(priceProduct)) {
  console.log(
    typeof nameProduct,
    typeof countProduct,
    typeof categoryProduct,
    typeof priceProduct
  );
  console.log(priceProduct * countProduct);
  console.log(
    `На складе ${countProduct} единицы товара "${categoryProduct}" на сумму 
	${priceProduct * countProduct} деревянных`
  );
} else {
  console.log("Вы ввели некорректные данные");
}

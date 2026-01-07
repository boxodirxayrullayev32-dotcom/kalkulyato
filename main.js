
const num1 = +prompt("1-raqamni kiriting");
if (isNaN(num1)) {
  alert("Iltimos, son kiriting");
} else {

 
  const operation = +prompt(
    "Amalni tanlang:\n1) + \n2) - \n3) * \n4) /"
  );


  const num2 = +prompt("2-raqamni kiriting");
  if (isNaN(num2)) {
    alert("Iltimos, son kiriting");
  } else {

    let result;
    let operationSymbol;

    
    if (operation === 1) {
      result = num1 + num2;
      operationSymbol = "+";
    } else if (operation === 2) {
      result = num1 - num2;
      operationSymbol = "-";
    } else if (operation === 3) {
      result = num1 * num2;
      operationSymbol = "*";
    } else if (operation === 4) {
      if (num2 === 0) {
        alert("0 ga bo‘lish mumkin emas");
      } else {
        result = num1 / num2;
        operationSymbol = "/";
      }
    } else {
      alert("Notog‘ri amal tanlandi");
    }

    
    if (result !== undefined) {
      const box = document.createElement("div");
      box.className =
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
        "bg-blue-400 w-[320px] h-20 flex items-center justify-center " +
        "font-bold text-lg rounded-lg shadow-lg border-2 border-black";

      box.textContent = `${num1} ${operationSymbol} ${num2} = ${result}`;
      document.body.appendChild(box);

      
    }
  }
}



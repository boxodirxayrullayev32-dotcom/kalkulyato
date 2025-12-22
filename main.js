// // let index = 0;
// // console.log(index++);
// // console.log(index++); Bittaga oshirib ketadi 2 ta plus
// // console.log(index--);
// // console.log(index--);Minusga ogirib beradi

// // console.log(++index);Qoshib ketadi
// //   for(let boxodir = 10; boxodir >= 0; boxodir--){
// //     console.log(boxodir);

// //   }

// // const numbers = [1 , 67 , 43 , 42 , 88 , 33 , 2];

// // const names = ["Mirsaid" , "odil" , "Mansur" , 22 , 77 , "bot" , 69];
// // // console.log( typeof names.length);


// // for(let index = 0; index < names.length; index++){
// //     // console.log(names[index]);
// //     if( Number(names[index])){
// //         console.log(names[index]);   
// //     }else if( String(names[index])){
// //         console.log(names[index]);

// //     }

// // }

// // const numbers = [12,54,69,79,23,59];
// // let oddNumber = [];
// // let evenNumber = [];

// // for(let i = 0; i < numbers .length;i++){
// //     if(numbers[i] % 2 === 0){
// //         evenNumber.push(numbers[i])
// //     }else{
//     //         oddNumber.push(numbers[i])
// //     }
// // }
// // console.log(
// //     `
// //     Juft somlar: ${oddNumber}
// //     Toq sonlar: ${evenNumber}
// //     `
// // );

// // const userPasword = +prompt("Parolni kiriting")
// // const userlogin = +prompt("login kiritng")

// // const oquvchilar = [
// //     {
// //         ismi:"Behruz",
// //         login:111,
// //         parol:111,
// //     },
// //     {
// //         ismi:"Oybek",
// //         login:222,
// //         parol:222,
// //     },
// //     {
// //         ismi:"Mirsaid",
// //         login:444,
// //         parol:444,
// //     },
// //     {
// //         ismi:"Merlan",
// //         login:555,
// //         parol:555,
// //     },
// //        {
// //         ismi:"Odil",
// //         login:666,
// //         parol:666,
// //     },
// //         {
// //         ismi:"Mansur",
// //         login:777,
// //         parol:777,
// //     },
// //         {
// //         ismi:"Azamat",
// //         login:888,
// //         parol:888,
// //     },
// //         {
// //         ismi:"Xojiakbar",
// //         login:999,
// //         parol:999,
// //     },
// //     {
// //         ismi:"Qobiljon",
// //         login:6996,
// //         parol:6996,
// //     },
// //         {
// //         ismi:"Davron",
// //         login:1000,
// //         parol:1000,
// //     },
// //         {
// //         ismi:"Boxodir",
// //         login:1616,
// //         parol:1616,
// //     },
// // ]

// // let topildi = false;

// // for(let index = 0; index < oquvchilar.length; index++){
// //     if(
// //         userPasword == oquvchilar[index].parol &&
// //         userlogin == oquvchilar[index].login
// //     ){
// //         console.log(oquvchilar[index].ismi);
// //         topildi = true;
// //         break;
// //     }
// // }

// // if(userPasword == 0 && userlogin == 0){
// //     console.log("Iltimos parol yoki login kiriting"); 
// // } else if(!topildi){
// //     console.log("Login yoki parol notogri");
// // }

// // let userPasword = +prompt("Parolni kiriting");
// // let userlogin = +prompt("Login kiriting");


// // oquvchilar.forach(oquvchi => {
// //     // console.log(oquvchi.ism);
    
// //     if (userPasword === "" && userlogin === "") {
// //     alert("Iltimos, parol va login kiriting");

// //     userPasword = prompt("Parolni kiriting");
// //     userlogin = prompt("Login kiriting");
// // }
    
// // })


// // if (userPasword === "" && userlogin === "") {
// //     alert("Iltimos, parol va login kiriting");

// //     userPasword = prompt("Parolni kiriting");
// //     userlogin = prompt("Login kiriting");
// // }


// // userPasword = +userPasword;
// // userlogin = +userlogin;

// // const oquvchilar = [
// // {
// //         ismi:"Behruz",
// //         login:111,
// //         parol:111,
// //     },
// //     {
// //         ismi:"Oybek",
// //         login:222,
// //         parol:222,
// //     },
// //     {
// //         ismi:"Mirsaid",
// //         login:444,
// //         parol:444,
// //     },
// //     {
// //         ismi:"Merlan",
// //         login:555,
// //         parol:555,
// //     },
// //        {
// //         ismi:"Odil",
// //         login:666,
// //         parol:666,
// //     },
// //         {
// //         ismi:"Mansur",
// //         login:777,
// //         parol:777,
// //     },
// //         {
// //         ismi:"Azamat",
// //         login:888,
// //         parol:888,
// //     },
// //         {
// //         ismi:"Xojiakbar",
// //         login:999,
// //         parol:999,
// //     },
// //     {
// //         ismi:"Qobiljon",
// //         login:6996,
// //         parol:6996,
// //     },
// //         {
// //         ismi:"Davron",
// //         login:1000,
// //         parol:1000,
// //     },
// //         {
// //         ismi:"Boxodir",
// //         login:9899,
// //         parol:9899,
// //     },
// //         {
// //         ismi:"Sunnatbek",
// //         login:2160,
// //         parol:2160,
// //     },
// // ];

// // let topildi = false;

// // for (let i = 0; i < oquvchilar.length; i++) {
// //     if (
// //         userPasword === oquvchilar[i].parol &&
// //         userlogin === oquvchilar[i].login
// //     ) {
// //         alert(" Iye Xush kelibsiz ",oquvchilar[i].ismi);
// //         console.log(oquvchilar[i].ismi);
// //         topildi = true;
// //         break;
// //     }
// // }
// // if (!topildi) {
// //     alert("Login yoki parol noto‘g‘ri");
// // }

// // const cars = ["BWM" , "AUDI" , "MAZDA" , "LEXUS"];


// // const a = [];
// // cars.forEach(moshinalar => {
    
// //     // console.log(moshinalar.split(" "));
// //     a.push(moshinalar);
// // })
// // console.log(a);
// const pupil = [
//     {
//         // id: 1,
//         login: 123,
//         parol: 111,
//         ism: "Odil"
//     },
//     {
//         // id: 2,
//         login: 333,
//         parol: 222,
//         ism: "Mirsaid"
//     },
//     {
//         // id: 3,
//         login: 777,
//         parol: 888,
//         ism: "Bahodir"
//     }
// ]

// const userLogin = +prompt("Loginni kiriting");
// const userParol = +prompt("Parolni kiriting");


// pupil.forEach(oquvchi => {
// // console.log(oquvchi.login);
// if(oquvchi.login === userLogin && oquvchi.parol === userParol){
//    return alert(`Xush kelibsiz ${oquvchi.ism}`);
// }else{
//    return alert("Login yoki parol xato");
// }

// })

// let  ism = prompt("Soz kiriting");
// // console.log(ism);

// const newTeg = document.createElement("h1");


// newTeg.textContent = ism;
// console.log(newTeg);

// document.body.append(newTeg)


// const userName = prompt("ismingizni kiriting");
// const newTeg = document.createElement("strong");

// newTeg.className = "text-red-5"






// meniki
// const num1 = +prompt("1-raqamni kiriting");
// alert("Iltimos operator tanlang");
// const operator = +prompt("1) + \n2) - \n3) * \n4) /");
// const num2 = +prompt("2-raqamni kiriting");

// let result;

// if (operator === 1) { 
//   result = num1 + num2;
  
// } else if (operator === 2) {
//   result = num1 - num2;

// } else if (operator === 3) {
//   result = num1 * num2;

// } else if (operator === 4) {

//   if (num2 === 0) {
//     alert("Nolga bolib bolmaydi!");
//   } else {
//     result = num1 / num2;
//   }

// } else {
//   alert("Notogri amal tanlandi!");
// }

// if (result !== undefined) {
//   alert("Natija: " + result);
// }

// const resultDiv = document.createElement("div");
// resultDiv.style.fontSize = "24px";
// resultDiv.style.fontWeight = "bold";
// resultDiv.style.color = color;
// resultDiv.style.marginTop = "20px";
// resultDiv.textContent = "Natija: " + result;
// document.body.appendChild(resultDiv);




// const num1 = +prompt("1-raqamni kiriting");
// alert("Iltimos operator tanlang");
// const operator = +prompt("1) + \n2) - \n3) * \n4) /");
// const num2 = +prompt("2-raqamni kiriting");

// let result;
// let operatorSymbol = "";

// if (operator === 1) { 
//   result = num1 + num2;
//   operatorSymbol = "+";
// } else if (operator === 2) {
//   result = num1 - num2;
//   operatorSymbol = "-";
// } else if (operator === 3) {
//   result = num1 * num2;
//   operatorSymbol = "*";
// } else if (operator === 4) {
//   operatorSymbol = "/";
//   if (num2 === 0) {
//     result = "Nolga bo'lib bo'lmaydi!";
//   } else {
//     result = num1 / num2;
//   }
// } else {
//   result = "Notog'ri amal tanlandi!";
// }







// const natijaDiv = document.createElement('div');

// document.body.appendChild(natijaDiv);


// const num1 = +prompt("1-raqamni kiriting");
// const operator = +prompt("1) + \n2) - \n3) * \n4) /");
// const num2 = +prompt("2-raqamni kiriting");

// let result;
// let opSymbol = "";


// if (operator === 1) { 
//   result = num1 + num2; opSymbol = "+";
// } else if (operator === 2) {
//   result = num1 - num2; opSymbol = "-";
// } else if (operator === 3) {
//   result = num1 * num2; opSymbol = "*";
// } else if (operator === 4) {
//   if (num2 === 0) {
//     natijaDiv.innerHTML = `<span style="color:red;"></span>`;
//   } else {
//     result = num1 / num2; opSymbol = "/";
//   }
// } else {
//   natijaDiv.innerHTML = `<span style="color:red;">Notog‘ri amal tanlandi!</span>`;
// }


// if (result !== undefined) {
//   natijaDiv.innerHTML = `
//     <span style="color:blue;">${num1}</span> 
//     <span style="color:green;">${opSymbol}</span> 
//     <span style="color:blue;">${num2}</span> 
//     = 
//     <span style="color:purple;">${result}</span>
//   `;
// }





const natijaDiv = document.createElement('div');
document.body.appendChild(natijaDiv);

const num1 = +prompt("1-raqamni kiriting");
const num2 = +prompt("2-raqamni kiriting");
const operator = +prompt("1) + \n2) - \n3) * \n4) /");


if (isNaN(num1) || isNaN(num2)) {
  natijaDiv.innerHTML = `<span style="color:red;">Bu son emas chumo! Son kirit.</span>`;
} else {
  const n1 = +num1;
  const n2 = +num2;
  let result;
  let opSymbol = "";

  if (operator === 1) { 
    result = n1 + n2; opSymbol = "+";
  } else if (operator === 2) {
    result = n1 - n2; opSymbol = "-";
  } else if (operator === 3) {
    result = n1 * n2; opSymbol = "*";
  } else if (operator === 4) {
    if (n2 === 0) {
      natijaDiv.innerHTML = `<span style="color:red;">0 ga bo‘lish mumkin emas!</span>`;
    } else {
      result = n1 / n2; opSymbol = "/";
    }
  } else {
    natijaDiv.innerHTML = `<span style="color:red;">Notog‘ri amal tanlandi!</span>`;
  }

  if (result !== undefined) {
    natijaDiv.innerHTML = `
      <span style="color:blue;">${n1}</span> 
      <span style="color:green;">${opSymbol}</span> 
      <span style="color:blue;">${n2}</span> 
      = 
      <span style="color:purple;">${result}</span>
    `;
  }
}




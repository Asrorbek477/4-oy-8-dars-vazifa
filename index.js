// !!! 1. Massiv ichidan berilgan qiymatni qidiradigan agar mavjud bo'lsa uning indeksining kvadratini aks holda mavjud emas degan yozuvni qaytaradigan funksiya yozing (index0f).
// function findIndexSquare(arr, value) {
//     const index = arr.indexOf(value);
//     return index !== -1 ? index ** 2 : -1;
//    }
   
//    const massiv = [10, 20, 30, 40, 50];
//    const qiymat = 60;
   
//    console.log(findIndexSquare(massiv, qiymat)); 

// !!! 2. 3 ta massivni birlashtiradigan, birinchi massivni oxiriga, 2-sini boshiga va 1-sini ortasiga qoyib beradigan funksiya yozing (concat). 
// function mergeArrays(arr1, arr2, arr3) {
//     return arr2.concat(arr3, arr1);
//    }
   
//    const massiv1 = [1, 2, 3];
//    const massiv2 = [4, 5, 6];
//    const massiv3 = [7, 8, 9];
   
//    console.log(mergeArrays(massiv1, massiv2, massiv3)); 
   
// !!! 3. Sonlardan tashkil topgan massivning ichidan shartga mos dastlabki elementning kvadratini qaytaradigan funksiya yozing (find).
// function findFirstSquare(arr, condition) {
//     for (let i = 0; i < arr.length; i++) {
//     if (condition(arr[i])) {
//     return arr[i] ** 2;
//     }
//     }
//     return null; 
//    }
   
  
//    const massiv = [1, 2, 3, 4, 5];
//    const shart = x => x % 2 == 0;
   
//    console.log(findFirstSquare(massiv, shart)); 


// !!! 4. Sonlardan tashkil topgan massiv elementlari orasidan toqlarini sonini topuvchi funksiya yozing(forEach). 
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(element) {
//  if (element % 2 !== 0) {
//  console.log(element);
//  }
// });

 
//  !!! 5. Sozlardan tashkil topgan massivning oxirgi harflaridan iborat yangi massiv hosil qiladigan funksiya yozing (forEach).
// let massiv = ["salom", "dunyo", "mehmon"];

// let res = [];

// massiv.forEach(function(soz) {
//  let oxirgiHarf = soz.charAt(soz.length - 1);
//  res.push(oxirgiHarf);
// });

// console.log(res);

// !!! 6. Sonlardan tashkil topgan massiv elementlari orasidan tublarining yigindisini topuvchi funksiya yozing (for...of).
function tubYigindiTopuvchi(massiv) {
    let yigindi = 0;
    
    for (let element of massiv) {
    let tub = true;
    
    if (element <= 1) {
    tub = false;
    }
    
    for (let i = 2; i <= Math.sqrt(element); i++) {
    if (element % i === 0) {
    tub = false;
    break;
    }
    }
    
    if (tub) {
    yigindi += element;
    }
    }
    
    return yigindi;
   }
   
  
   let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   let yigindi = tubYigindiTopuvchi(sonlar);
   console.log(yigindi); 
   




   
   
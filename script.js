// Çalışma N=1---------------->Funksiya yazacaqsınız və bu funksiya parametr olaraq number qəbul edir.
//  Əgər number cütdürsə, həmin number-i 2-yə bölürsünüz, təkdirsə 3-ə vurub üzərinə 1 gəlirsiniz. 
// Bu prosesi həmin number 1 olana qədər təkrarlanır ( 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)
function processNumber1(eded) {
    while (eded !== 1) {
      if (eded % 2 === 0) {
        eded /= 2;
      } else {
        eded = eded * 3 + 1;
      }
    }
    return 1;
  }
  const result1 = processNumber1(3);
  console.log(result1); 
// Çalışma N=2---------------->Array-dəki ən böyük və ən kiçik ədədi tapın və onların fərqini console-a çıxarın.
let history = [6, 28, 7, 1, 26];
let maxHistory = history[0];
let minHistory = history[0];
for (let i = 1; i < history.length; i++) {
    if (history[i] > maxHistory) {
        maxNumber = history[i];
    }
    if (history[i] < minHistory) {
        minHistory = history[i];
    }
}
let difference = maxHistory - minHistory;
console.log("en boyuk eded: " + maxHistory);
console.log("en kichik eded: " + minHistory);
console.log("Ferq: " + difference);
// Çalışma N=3---------------->Funksiya yazacaqsiniz və parametr olaraq array və number qəbul edəcək. 
// Həmin number-in array-də olub-olmadığını yoxlayacaqsınız.
function checkNumberInArray(array, numberA) {
    let foundNumber = array.find(function(element) {
        return element === numberA;
    });
    return foundNumber !== undefined;
}
let numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = checkNumberInArray(numbersA, 10);
if(result===true ){
console.log("eded array-a daxildir ");
}
else{
    console.log("eded array-a daxil deyil ");
}
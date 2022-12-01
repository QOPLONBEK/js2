/////////////////////////// 2 ta stringdan iborat array berilgan a va b, 
/// agar ularning elementi bir xil bo'lsa yoki oxirgi elementi bir xil bo'lsa true qiymatini qaytaradigan, Bir xil bo'lmasa false qaytaradigan funksiya yozing
                                                    
                                                                ///////// 1-example /////////

// function sonlar(son1, son2){
//     if((son1 < son2 && son1 > 10) || (son1 < 10 && son1 > son2)){
//         return son1
//     }
//     else if(son1 !== son2){
//         return 0
//     }
//     else{
//         return son2
//     }
// }
// console.log(sonlar('13', '15'));

                                                                ///////// 2-example /////////

function strP(string){
    var str1 =  string[0].length;
    var str2 =  string[1].length;
    if(string[0][0] == string[1][0] || string[0][str1-1] == string[1][str2-1]){
        return true
    }
    else{
        return false
    }
}


console.log(strP(['hello', 'h']));
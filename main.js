//? 1
// let str = "Men 100 yoshga 3000 da kiraman"
// let pattern = /\b\d+\b/g
// let res = str.match(pattern);
// console.log(res.join(" "));



//? 2
// let str = "Salom123 DUNYo!";
// let pattern = /[A-Za-z]/g;
// let res = str.match(pattern).join("");
// console.log(res)



//? 3
// let str = "salom dunyo";
// let res = str[0].toUpperCase + str.slice(1)
// console.log(res)

//? 4
// let str = "Bu yerda 5 ta bo'sh joy bor.";
// let pattern = /\s+/g;
// let res = str.match(pattern);
// console.log(res.length)


//? 5
// let str = "test@domain.com";
// let pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// console.log(str.match(pattern));
// console.log(pattern.test(str))


//? 6
// let str = "Web fjdkjfkldjfljl DEVELOPER";
// let pattern = /[A-Z]/g;
// console.log(str.match(pattern).join(""))


//? O'rta daraja 1
// function formatPhoneNumber(phoneNumber) {
//     const regex = /^(\d{3})(\d{2})(\d{3})(\d{4})$/;
//     const match = phoneNumber.match(regex);
    
//     if (match) {
//         return `${match[1]}(${match[2]})-${match[3]}-${match[4]}`;
//     } else {
//         return "Invalid phone number length!";
//     }
// }
// const inputNumber = "998901234567";
// console.log(formatPhoneNumber(inputNumber));


//? 2
// function separateNumsAndLetters(str) {
//     const nums = str.replace(/[a-zA-Z]/g, "");
//     const letters = str.replace(/[1-9]/g, "");

//     return `${letters} ${nums}`;
// }
// console.log(separateNumsAndLetters("ajdljfkld979789jjkj8787"))


//? 3
// function removeDuplicateCharacters(str) {
//     let strArr = str.split("");
//     let res = [...new Set(strArr)];
//     return res.join("");
// }
// console.log(removeDuplicateCharacters("aaabbbcccaa"))


//? 4
// function validation(username) {
//     let pattern = /^\w{4,10}$/;
//     return pattern.test(username);
// }
// console.log(validation("user8978")); 
// console.log(validation("us"));   


//? 5
// function checkDataFormat(data) {
//     let pattern = /^(?:\d{2}-\d{2}-\d{4})|(\d{4}-\d{2}-\d{2})$/
//     return pattern.test(data);
// }
// console.log(checkDataFormat("2020-02-02"))


//? 6
// function replaceSpace(str){
//     return str.replace(" ", "-")
// }
// console.log(replaceSpace("kljdkl jkljkl kljk"))


//? 7
// function getWords(str){
//     return str.replace(/[^a-zA-Z\s]/g, "").trim(); 
// }
// console.log(getWords("kljl lkjl989 j889kjljl"))

//? 8
// function getParentheses(str){
//     return str.match(/\([^)]*\)/g) || [];
// }
// console.log(getParentheses("kfljdljdfl  (it should get this) kjljl"))

//? 9 
// function getNumsAndSymbols(str){
//     let nums = str.replace(/\D+/g, "");
//     let symbols = str.replace(/[a-zA-Z0-9\s]+/g, ""); // Updated regex to include spaces
//     return `${nums} ${symbols}`;
// }
// console.log(getNumsAndSymbols("kjldjl23@ jklfdjld@$"))

//? 10
// function checkIPAdress(ipAdress) {
//     let pattern = /^\d{3}\.\d{3}\.\d{1}\.\d{1}$/g
//     return pattern.test(ipAdress);
// }
// console.log(checkIPAdress("192.168.1.0"));

//? 11
// function checkURLFormat(url){
//     let pattern = /^https?:\/\/www\.\w+\.\w{2,}$/;
//     return pattern.test(url);
// }
// console.log(checkURLFormat("https://www.google.com"));

//? qiyin 1
// function insertWordsToNums(str){
//     let splittedstr = str.split("");
//     let res = splittedstr.join("raqam: ");
//     return res;
// }
// console.log(insertWordsToNums("978789789"))


//? 2
// function checkCreditCard(cardNum){
//     let pattern = /(\d{4})(-?(\d{4})){3}/g;
//     return pattern.test(cardNum);
// }
// console.log(checkCreditCard("9999-9999-9999-9999"))


//? 3
// function removeSymbols(str){
//     let pattern = /[^a-zA-Z0-9\s]+/g; 
//     return str.replace(pattern, "");
// }
// console.log(removeSymbols("a1!b2@nk   jdjhkd jkjhkj c3#"));

//? 4
// function removeHTMLTags(str) {
//     let pattern = /<[^>]*>/g; 
//     return str.replace(pattern, "").trim();
// }


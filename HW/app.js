// let [Surname,name]=['Тараев','Колая']
// alert(Surname);
// alert(name);
//
//
//
// let [,name,age]=['Тараев','Коля','33 лет'];
// alert(name);
// alert(age)
////
// let [surname,name,age,country,loveAnime]=['Ymanaly','Ibragim','18 old','Kyrgyzstan','Naruto'];
// alert(surname);
// alert(name);
// alert(age);
// alert(country);
// alert(loveAnime)
//



// let options={
//     color:'red',
//     width: 230,
//     height:190
//
//
//
//
// }
// let {color,width,height}=options;
// alert(color);
// alert(width);
// alert(height);


// let man={
//     weight:55,
//     IceColor:'black',
//     height:177,
// };
// let {weight,IceColor,height}=man;
// alert(weight);
// alert(IceColor);
// alert(height);













///задание 1
const myArray = ['apple','pear','cherry','pineapple','kiwi'];
const elem1 = myArray[0];
const elem2 = myArray[1];
const elem3 = myArray[2];
const arr = myArray.slice(3);

console.log(elem1,elem2,elem3,arr)

///задание 2
const Array = ['apple','pear','orange','banana','grapes'];
Array.reverse();
 const element1 = Array[0];
 const element2 = Array[1];
const arr2 = Array.slice(2)

console.log(arr2,element1,element2);

///задание 3
function nameList() {
    const name = prompt("name");
    if (name.trim() === ""){
        alert("привет" + " " + "аноним")
    }else{
        alert("привет" + " " + name)
    }

}

nameList()




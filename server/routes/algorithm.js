var ate = ['1', '2', '3', '4', '5'];
var  vowels = ['a', 'e', 'i', 'o', 'u'];
var consonants = ['t', 'g', 'g', 'n', 'p', 's', 'k', 'z', 'd'];
var char = ['!', '.', '$', '|', '*', '@'];



var swap2 = (arr)=>{
    var store = null;
    for (var i=0; i<arr.length; i+=2){
        if (arr[i]!= arr[arr.length-1]){
            store = arr[i];
            arr[i]= arr[i+1];
            arr[i+1]= store;
        }
    }
    return arr;
    
}
var swap3 = (arr)=>{
    var store = null;
    for (var i=0; i<arr.length; i+=3){
        if (arr[i]!= arr[arr.length-2]&& arr[i]!=arr[arr.length-1]){
            store = arr[i];
            arr[i]= arr[i+2];
            arr[i+2]= store;
        }
    }
    return arr;
}
var fl =(arr)=>{
    var store = null;
    store = arr[0];
    arr[0]= arr[1];
    arr[1]= store;
    store = arr[arr.length-1];
    arr[arr.length-1] = arr[arr.length-2];
    arr[arr.length-2] = store;
    return arr;
}

var shuffle = (arr)=>{
    swap2(arr);
    swap3(arr);
    swap2(arr);
    swap3(arr);
    fl(arr);
    swap2(arr);
};

// var randomizeAdd =(arr)=>{
//     arr.push(vowels[0], vowels[1]);
//     arr.push(consonants[0], consonants[1]);
//     // console.log(arr);
// }

var completeShuffle = (array)=>{
    shuffle(array)
    // randomizeAdd(array);
    shuffle(array)
}



completeShuffle(ate);
// console.log(ate);
module.exports = completeShuffle;


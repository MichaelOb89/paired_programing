function map(array, callback){
    const newArr = []
    for(let i=0; i<array.length; i++){
        newArr.push(callback(array[i]))
    }
    return newArr
}

// 2618. Check if Object Instance of Class
// 5 Number = true
// '5' Number = false
// new Date() Date = true

function checkInstanceOf(value, targetClass){
    if(typeof targetClass !== "function"){
        return false;
    }

    // handling the primitive values
    if(value !== null && typeof value !== 'object' && typeof value !== 'function'){
        return Object.getPrototypeOf(Object(value)) === targetClass.prototype;
    }

    while(value !== null){
        if(Object.getPrototypeOf(value) === targetClass.prototype){
            return true;
        }
        value = Object.getPrototypeOf(value);
    }

    return false;
}

console.log(checkInstanceOf(5, Number))
console.log(checkInstanceOf('5', Number))
console.log(checkInstanceOf(new Date(), Date))

// Best optimize

var checkIfInstanceOf = function(obj, classFunction) {
    while(obj != null){
        if(obj.constructor === classFunction){
            return true;
        }
        obj = Object.getPrototypeOf(obj);
    }
    return false;
};

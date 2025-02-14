// find duplicate numbers
const a = [4, 3, 2, 4, 1, 2, 3, 1];
const duplicatearr = [];
for(let i=0; i<a.length; i++){
    for(let j=i+1; j<a.length; j++){
        if(a[i]===a[j]){
            duplicatearr.push(a[i]);
        }
    }
}

console.log(duplicatearr);


// find duplicate numbers
const a = [4, 3, 2, 4, 1, 2, 3, 1];
const duplicate = new Set();
const seen = new Set();

for(const num of a){
    if(seen.has(num)){
        duplicate.add(num)
    }else{
        seen.add(num)
    }
}

console.log([...duplicate]);


// find duplicate numbers

const a = [4, 3, 2, 4, 1, 2, 3, 1];
const count = {};
const duplicates = [];

for (const num of a) {
    count[num] = (count[num] || 0) + 1;
}

for (const key in count) {
    if (count[key] > 1) {
        duplicates.push(Number(key));
    }
}

console.log(duplicates);

const data = require('./food.json');
console.log(data)
function vegetableitems(){
    return data.filter((food) => food.category === 'Vegetable');
}
function fruititems(){
    return data.filter((food) => food.category=='Fruit');
}console.log(fruititems())
function proteinitems(){
    return data.filter((food) => food.category=='Protein');
}console.log(proteinitems())
function Nutsitems(){
    return data.filter((food) => food.category=='Nuts');
}console.log(Nutsitems())
function grainitems(){
    return data.filter((food) => food.category=='Grains');
}console.log(grainitems())
function Dairyitems(){
    return data.filter((food) => food.category=='Dairy');
}console.log(Dairyitems())
function calorie(){
    return data.filter((food) => food.calorie > 100);
}console.log(calorie())
function lowcalorie(){
    return data.filter((food) => food.calorie < 100);
}console.log(lowcalorie())
function protein(){
    return data.sort((a,b)=>b.protein-a.protein );
}console.log(protein())
function cab(){
    return data.sort((a,b)=>a.cab-b.cab );
}console.log(cab())
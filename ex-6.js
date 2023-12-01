const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let carBrandCheck;
  let i = carCollection.indexOf(carBrand)+1
  if(!carCollection.includes(carBrand)){
    carCollection.push(carBrand)
    carBrandCheck=`new car collection is : ${carCollection.join(",")}`
  }else{
    carBrandCheck=`${carBrand} has alreay existed in the ${i} position of car collection`;
  }
  return carBrandCheck
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
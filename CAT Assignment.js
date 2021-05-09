class mkulima{
    constructor(product,vendor,farm){
        this.product=[];
        this.farm=[];
        this.vendor=[];
    }
}
class addFarm extends MKulima{
    constructor(farmId,farmerName,phoneNumber,address,farmName){
        super(farmId,phoneNumber,address,farmerName)
        console.log(this.farm.push(farmId,farmerName,phoneNumber,address,farmName))
    }
};
let farm1=new addFarm(2838490,"joy","71234789",3789,"solio");
console.log(farm1)
let farm2=new addFarm(283812,"arim","071234789",3799,"jiki")
console.log(farm2)

class removeFarm extends Mkulima{
    constructor(farmId){
        super(farmId)
        farm.unshift(farmId)
    }
}
let farm3=new addFarm (2338490,"shina","071234789","3788")
console.log(farm3)
let farm={
    farmid:37485,
    farmName:"maureen",
    phonenumber:"071234789",
    address:38427,
    farmname:"mbugua",
    set Farm(updateFarm){
        return this.farm=updateFarm
    }
};
console.log(farm)
let farm={
    farmid=37485,
    farmname="joy",
    phonenumber="071234789",
    address=38427,
    farmname="hasim",
    get getfarm(){
        return this.farmid
    }
};
console.log(farm.getfarm)
class addProduct extends Mkulima{
    constructor(productid,name,price){
    super(productid,name,price)
    console.log(this.push(productid,name,price))
    }
};
let product6=new addProduct(38457,"beans",200)
console.log(product6)
letproduct9=new addProduct(98372,"mangoes",90)
class revomeproduct extends Mkulima{

}
let product={
    farmId=3728,
    name="john",
    price=770,
    set product(updateproduct){
        return this.product=updateproduct
    }
};
 console.log(poduct)
 let produuct={
     productid=3730,
     name="john",
     price=230,
     get getproduct(){
         return this.productId
     }
 };
 console.log(product.getproduct)
    function productList(){
        var vegetables="kales"
        return (vegetables);
    }
    let items=["apple:40,toamto:90,cabbage:90,juice:80"]
    console.log(items);
    let result=(productList(items));
    console.log(result)
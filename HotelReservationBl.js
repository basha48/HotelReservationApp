let hotelList =  require('./Hotels.json');

 const listOfHotels = function (){
 let selectedHotel = require('readline-sync');
 hotelList.hotels.forEach(element => {
    console.log(element.name);
 });
 let selectedName =  selectedHotel.question("select any hotel :");
 hotelList.hotels.forEach(element => {
     if(element.name === selectedName){
         console.log(element);
         let choice =    selectedHotel.question("are you intrested to book this Hotel ! yes/no  :");
         if(choice === "yes"){
             console.log("thanks for Booking Hotel");
             return;
         }
         else if(choice === "no"){
             console.log("thank you");
             return;
         }
     }
     else{
        
          return;
     }
 });
 }

 module.exports = {listOfHotels}

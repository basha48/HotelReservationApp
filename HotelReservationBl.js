let hotelList =  require('./Hotels.json');

 const listOfHotels = function (){
 let selectedHotel = require('readline-sync');
 hotelList.hotels.forEach(Hotel => {
    console.log(Hotel.name);
 });
 let selectedName =  selectedHotel.question("select any hotel :");
 hotelList.hotels.forEach(Hotel => {
     if(Hotel.name === selectedName){
         console.log(Hotel);
         let choice =    selectedHotel.question("are you intrested to book this Hotel ! yes/no  :");
         if(choice === "yes"){
             console.log("thanks for Booking Hotel :" ,Hotel.name);
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

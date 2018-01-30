 var katzDeli = [];
 
 function takeANumber(katzDeliLine, customer){
    katzDeli.push(customer);
    katzDeliLine = katzDeli;
    var line = katzDeliLine.length;
  
    return `Welcome, ${customer}. You are number ${line+1} in line.`;
  
 }
 
 
 function nowServing(){
   if(katzDeli.length <= 0){
     return 'There is nobody waiting to be served!';
   } else{
   var serving = katzDeli[0];
   katzDeli.shift();
   return `Currently serving ${serving}`;
   }
 }
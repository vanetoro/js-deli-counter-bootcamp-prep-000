 var katzDeli = [];
 
 function takeANumber(katzDeliLine, customer){
    katzDeliLine.push(customer);
    // katzDeli.push(customer);
    var line = katzDeliLine.length;
  
    return `Welcome, ${customer}. You are number ${line} in line.`;
  
 }
 
 
 function nowServing(){
    if(katzDeli.length > 0){
      var serving = katzDeli.shift();
      return `Currently serving ${serving}`;
   } else{
      return 'There is nobody waiting to be served!';
   }
 }
 
 
 function currentLine(katzDeliLine){
   var inLine = 'The line is currently: ';
   if(katzDeli<0) {
  return 'The line is currently empty.';
   } else{
   for(var i = 0; i<katzDeli.length; i++){
     inLine+= `${i+1}. ${katzDeli[i]}, `;
   }
   return inLine;
   }
 }
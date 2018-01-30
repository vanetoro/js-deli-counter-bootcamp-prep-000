 var katzDeli = [];
 
 function takeANumber(katzDeliLine, customer){
    katzDeliLine.push(customer);
    katzDeli.push(customer);
    var line = katzDeliLine.length;
  
    return `Welcome, ${customer}. You are number ${line} in line.`;
  
 }
 
 
 function nowServing(){
   if(katzDeli.length < 0){
     return 'There is nobody waiting to be served!';
   } else{
   var serving = katzDeli[0];
   katzDeli.shift();
   return `Currently serving ${serving}`;
   }
 }
 
 
 function currentLine(katzDeliLine){
   var inLine = 'The line is currently: ';
   if(katzDeli<0){return 'The line is currently empty.'}
   for(var i = 0; i<katzDeli.length; i++){
     inLine+= `${i+1}. ${katzDeli[i]},`
     return inLine;
     
   }
 }
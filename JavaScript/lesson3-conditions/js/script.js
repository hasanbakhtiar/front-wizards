// if = eger 
// else = deyilse
// else if  = deyilse eger 

const time = 23;

if (time >=5 && time < 12) {
    console.log('good morning');
    
}else if(time >=12 && time <= 17){
    console.log('good afternoon');
    
}else if(time >=18 && time <= 22){
    console.log('good evening');
    
}else if(time >=23  && time <= 24){
    console.log('good night');
    
}else{
    console.log('wrong time');
    
}

const numeros = {
    'Zero': 0,
    '00': 0,
    '01': 1,
    'Um': 1,
    'Dois': 2,
    'Três': 3,
    'Quatro': 4,
    'Cinco': 5,
    'Seis': 6,
    'Sete': 7,
    'Oito': 8,
    'Nove': 9,
    'Dez': 10
 }
 
function corrigeNumeros(c) {
    for(const numero in numeros){
       if(c === numero){
          c = numeros[numero];   
       }         
    }  
    return c;
}
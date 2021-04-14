module.exports={
    calcular(n1,n2,op){

   if(op=== "+"){
       return n1+n2
   }else if(op==="-"){
       return n1-n2
   }else if (op === "/"){
       return n1/n2
   }else if(op==="*"){
       return n1*n2
   }else{
       return "Operação inesperada"
   }
}
};


function sum (T1,T2){
    var somme =0
    for (let i = 0 ;i<T1.length ;i++) {

    for (let j = 0; j < T2.length; j++) {
        
        if (T1[i]=T2[j]) {
            somme = somme + T1[i]
    
        }
        
    }
        
    }

return somme *2
}



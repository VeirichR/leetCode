var kWeakestRows = function(mat, k) {
    let result = []
    cont = 0
    mat.forEach(function (array) {
        let contOnes = 0;
        for(let elemento in array){
            if(array[elemento] == 1){
                contOnes++;
            }
        }
        result.push({index: cont, value: contOnes})
        cont++
    })
    result.sort(function (a, b) {
        return (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0);
    });
    resultado = []
    for(let i=0; i < k; i++){
        resultado.push(result[i].index)
    }

    return resultado
};

mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]];
k = 2;

 console.log(kWeakestRows(mat, k))
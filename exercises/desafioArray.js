/**
 * escereva uma função que receba 3 parametros
 * sua missão é fazer com que este array possua até no máximo x repetições, onde x = maxRepetition
 * porem para alterar os valores do array você só pode realizar divisões inteiras por Y, onde Y = divisor 
 * a resposta deve ser a menor quantidade de divisões realizadas para que os numeros se repitam apenas X vezes, veja o exemplo a seguir:
 * 
 * Digamos que 
 *  arr = [64,30,25,33];
 *  maxRepetition = 2;
 *  divisor = 2
 * 
 * então a saída esperada deve ser 3, pois podemos manipular o array da seguinte forma: 
 *  1 - [64/2, 30, 25, 33/2] = [32, 30, 25, 16] ; Quantidade de divisões realizadas: 2
 *  2 - [32/2, 30, 25, 16] = [16, 30, 25, 16] ; Quantidade de divisões realizadas : 1;
 *  Resultado: [16, 30, 25, 16] 
 *      Quantidade de elementos repetidos no array: 2 === maxRepetition OK;
 *      Total de divisões realizadas: 3
 *      Resposta 3
 * */


 /** 
 * @param {number[]} arr - array de inteiros
 * @param {number} maxRepetition - inteiro 
 * @param {number} divisor - inteiro
 * 
 * */ 

 function findLessDivisionsNeeded(arr, maxRepetition, divisor){
    let arrNumbers = [];

    arr.map(num => {
        let divisions = 0;
        do{
            const index = arrNumbers.findIndex(item => item.num === num);
            if(index >= 0){
                arrNumbers[index].qtyFound += 1;
                arrNumbers[index].divisions += divisions;
            }else{
                arrNumbers.push({
                    num,
                    qtyFound: 1,
                    divisions
                });
            }
            
            num = Math.floor(num/divisor);
            divisions++;

        }while(num > 0 && divisor > 1);
    })

    const minDivisions = arrNumbers
        .filter(item => item.qtyFound === maxRepetition)
        .sort((a, b) => a.divisions - b.divisions);
    
    
    const result = minDivisions.length > 0 ? minDivisions[0].divisions : null;

    console.log(JSON.stringify(minDivisions[0], null, 2));
    console.log("RESULT: "+ result);
    return result;
 }

 findLessDivisionsNeeded([64,30,25,33], 2, 2);

 // keep this function call here 
// console.log(findLessDivisionsNeeded(readline(0), readline(1), readline(2)));

/**
 * 
 * @param {number} [position] - Optional, position of argument required, starts at zero
 */
function readline(position = -1){
    if(position >= 0){
        const param = process.argv[position+2];
        return convertParam(param);
    }
    
    return process.argv.slice(2).join("");
    
}

/**
 * 
 * @param {string} param 
 */
function convertParam(param){
    if(param[0] === '{'){
        return JSON.parse(param);
    }else if(param[0] === '['){
        let arr = param.substring(1, param.length-2);
        return arr.split(",").map(item => parseInt(item) || item);
    }else {
        return parseInt(param) || param;
    }
}
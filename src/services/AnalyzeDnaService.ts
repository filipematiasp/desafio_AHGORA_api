interface IAnalisy {
    count: number,
    arr: Array<string>
}

export class AnalyzeDna {
    execute(dna: Array<string>): IAnalisy{
        let searchResult: IAnalisy = {
            count: 0,
            arr: []
        }

        for (let i = 0; i < dna.length; i++){
            for (let j = 0; j < dna.length; j++){
                //Busca na horizontal

                //Teste de limite horizontal
                if((j+3) <= dna.length - 1){

                    //primeira comparação
                    if(dna[i][j] === dna[i][j+1]){
                        //segunda comparação
                        if(dna[i][j] === dna[i][j+2]){
                            //terceira comparação
                            if(dna[i][j] === dna[i][j+3]){
                                searchResult.count++;
                                searchResult.arr.push(`${dna[i][j]}(${i},${j})`,`${dna[i][j+1]}(${i},${j+1})`,`${dna[i][j+2]}(${i},${j+2})`,`${dna[i][j+3]}(${i},${j+3})`)
                                // console.log('achou!!!', dna[i][j],i,j,'|', dna[i][j+1],i,j+1,'|', dna[i][j+2],i,j+2,'|', dna[i][j+3],i,j+3);
                            }//fim terceira compração
                        }//fim segunda compração
                    }//fim primeira compração

                }//fim limite horizontal

                //busca Vertical

                //teste de limite vertical
                if((i+3) <= dna.length - 1){

                    //primeira comparação
                    if(dna[i][j] === dna[i+1][j]){
                        //segunda comparação
                        if(dna[i][j] === dna[i+2][j]){
                            //terceira comparação
                            if(dna[i][j] === dna[i+3][j]){
                                searchResult.count++;
                                searchResult.arr.push(`${dna[i][j]}(${i},${j})`,`${dna[i+1][j]}(${i+1},${j})`,`${dna[i+2][j]}(${i+2},${j})`,`${dna[i+3][j]}(${i+3},${j})`)
                            }//fim terceira compração
                        }//fim segunda compração
                    }//fim primeira compração


                }//fim limite vertical

                //Busca em diagonal(direita / esquerda)

                //teste de limite diagonal direita
                if( ((i+3) <= dna.length-1) && (j+3) <= dna.length-1 ){

                    //primeira comparação
                    if(dna[i][j] === dna[i+1][j+1]){
                        //segunda comparação
                        if(dna[i][j] === dna[i+2][j+2]){
                            //terceira comparação
                            if(dna[i][j] === dna[i+3][j+3]){
                                searchResult.count++;
                                searchResult.arr.push(`${dna[i][j]}(${i},${j})`,`${dna[i+1][j+1]}(${i+1},${j+1})`,`${dna[i+2][j+1]}(${i+2},${j+1})`,`${dna[i+3][j+1]}(${i+3},${j+1})`)
                            }//fim terceira comparação
                        }//fim segunda comparação
                    }//fim primeira comparação

                }//fim liminte diagonal direita

                //teste de limite diagonal esquerda
                if((i+3) <= dna.length-1 && j >= 3){

                    //primeira comparação
                    if(dna[i][j] === dna[i+1][j-1]){
                        //segunda comparação
                        if(dna[i][j] === dna[i+2][j-2]){
                            //terceira comparação
                            if(dna[i][j] === dna[i+3][j-3]){
                                searchResult.count++;
                                searchResult.arr.push(`${dna[i][j]}(${i},${j})`,`${dna[i+1][j-1]}(${i+1},${j-1})`,`${dna[i+2][j-2]}(${i+2},${j-2})`,`${dna[i+3][j-3]}(${i+3},${j-3})`)
                                // console.log('achou!!!', dna[i][j],i,j,'|', dna[i+1][j-1],i+1,j-1,'|', dna[i+2][j-2],i+2,j-2,'|', dna[i+3][j-3],i+3,j-3);
                            }//fim terceira comparação
                        }//fim segunda comparação
                    }//fim primeira comparação

                }//fim liminte diagonal esquerda
           }
        }
        return searchResult;
    }

}
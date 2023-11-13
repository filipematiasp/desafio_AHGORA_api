import { dataSource } from "../typeorm/database/data-source";
import { Sequence } from "../typeorm/entities/sequencies";

interface IAnalisy {
    count: number,
    arr: Array<string>,
    specie: string
}

export class AnalyzeDnaBd {
    async execute(dna: Array<string>): Promise <IAnalisy | Error | Sequence>{

        const analizeRepository = dataSource.getRepository(Sequence)

        let registre:Sequence = await analizeRepository.findOne({
            where: {
                sequence: dna.toString()
            },
        });

       if(registre){
        console.log(registre);

        return registre
       }

        let searchResult: IAnalisy = {
            count: 0,
            arr: [],
            specie: ''
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

        let specie: string;

        searchResult.count > 0 ? specie = 'SIGMANO' : specie = 'HUMAN'

        const sequenceDna = analizeRepository.create({
            sequence: dna.toString(),
            specie: specie
        });

        await analizeRepository.save(sequenceDna);
        return searchResult;
    }

}


const diceButton = document.getElementById('botao');
diceButton.addEventListener('click', () =>{
   const section = document.getElementsByTagName('section')[0];
   section.innerHTML = '';
   const grafico = document.getElementsByClassName('grafico')[0];
   grafico.innerHTML = '';
    
})



diceButton.addEventListener('click', (x) => {

oneKRoll();
   
})

function show (content){

 const section = document.getElementsByTagName('section')[0];
 const divElement = document.createElement('div');
 divElement.style.margin = '11px';
 const node = document.createTextNode(content);
 divElement.appendChild(node);
 section.appendChild(divElement);
 divElement.classList.add('results')

}

function graficopx (larguraDaBarra){
    const grafico = document.getElementsByClassName('grafico')[0];
    const barra = document.createElement('div');
    
    barra.style.backgroundColor = 'blue';
    barra.style.height = '15px';
    barra.style.width = `${larguraDaBarra}px`;
    barra.style.margin = '20px'
    grafico.appendChild(barra);
    
}



const dice1 = () => {
    const result = ['1', '2', '3', '4', '5', '6' ];
    return result[Math.floor(Math.random() * 6)];
}

const dice2 = () => {
    const result = ['1', '2', '3', '4', '5', '6' ];
    return result[Math.floor(Math.random() * 6)];
}

const diceSum = () => {
    let firstdice = dice1();
    let secDice = dice2();
    let sumResult = +firstdice + +secDice;
    return sumResult;
}
diceSum();

const oneKRoll = () => {
    let count = ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0', '0'];
   let index = [];
   let grafico = [];
    
    for( let o = 0; o <= count.length; o++){
        
        for( let i = 0; i < 1000; i++){
            
            let sum = diceSum();
            if(sum == [o]){ 
            count[sum] = +count[sum] + 1;
            grafico[o] = count[sum];
            index[o] = [o] + ':' + count[sum];
            
            }
            
        }
        if(index[o] !== undefined){ 
            show(index[o]);
            graficopx(grafico[o]);
        }
       
    }
   
  
}




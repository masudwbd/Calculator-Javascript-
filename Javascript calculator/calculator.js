let show_result = document.getElementById('result')

let inputs = Array.from(document.getElementsByClassName('input'));

inputs.map( input=> {
    input.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'AC':
                show_result.innerText = '';
                break;
            case '=':
                try{
                    show_result.innerText = eval(show_result.innerText);
                }catch{
                    show_result.innerText = "!Error"
                }
                break;
            default:
                show_result.innerText += e.target.innerText;
        }
    })
})
const her = document.getElementById('btn-her');
const him = document.getElementById('btn-him');

let isNameSwitched = false;

function switchNames(){
    if(!isNameSwitched){
        isNameSwitched = true;
        her.textContent = 'Miguel';
        him.textContent = 'e Inês';
            
    } else{
        isNameSwitched = false;
        her.textContent = 'Inês';
        him.textContent = 'e Miguel';
    }
};

her.addEventListener('click', () => {
    console.log('funca');
    switchNames();
});

him.addEventListener('click', () => {
    console.log('funca');
    switchNames();
});

setTimeout(() => {
    window.open('index.html', '_self');
}, 3000);


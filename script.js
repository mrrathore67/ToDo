const input = document.querySelector('.input');
const add = document.querySelector('.add');
const dlt = document.querySelector('.dlt');
const tasks = document.querySelector('.tasks');


add.addEventListener('click', () => {
    let inputValue = input.value.trim();
    console.log(inputValue);
    
    if(inputValue){
        const taskElement = document.createElement('p');
        taskElement.className = 'pending'

        const removeButton = document.createElement('button');
        removeButton.className = 'remove';
        removeButton.textContent = 'x';

        removeButton.addEventListener('click', () => {
            taskElement.remove();
        })

       
        taskElement.innerText = inputValue ;
        taskElement.appendChild(removeButton);

        tasks.appendChild(taskElement)

        input.value = '';
    }
});

dlt.addEventListener('click', () => {
    tasks.innerHTML = '';
})






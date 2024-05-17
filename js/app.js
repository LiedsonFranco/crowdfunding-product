let inputs = document.querySelectorAll('.input_radio')
let last_hidden_section 
let total_backed = 89.914

inputs.forEach(element => {
    element.addEventListener('change', () => {
        if(last_hidden_section){
            last_hidden_section.classList.add('hidden')
        }
        last_hidden_section = document.getElementById(element.dataset.target)
        last_hidden_section.classList.remove('hidden')
    })
});

function close_modal(){
    document.querySelectorAll('.modal').forEach(element => {
        element.classList.add('hidden')
    })
}

function show_modal(id){
    document.getElementById(id).classList.remove('hidden')
}
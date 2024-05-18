let inputs = document.querySelectorAll('.input_radio')
let last_hidden_section 
let total_backed = 89.914
let total_backed_tag = document.getElementById('total_backed')

inputs.forEach(element => {
    element.addEventListener('change', () => {
        if(last_hidden_section){
            last_hidden_section.classList.add('hidden')
        }
        last_hidden_section = document.getElementById(element.dataset.target)
        last_hidden_section.classList.remove('hidden')
    })
});

function close_modal(id,button){
    document.getElementById(id).classList.add('hidden')
    if(id == 'form_modal'){
        total_backed +=  parseFloat(document.getElementById(button.dataset.get).value)
        total_backed_tag.innerText = total_backed
    }
}
function show_modal(id){
    document.getElementById(id).classList.remove('hidden')
}
function add_to_backed(){
    
}
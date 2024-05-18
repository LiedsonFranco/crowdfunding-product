let porcente = 0
let total_backed = 0
let total_backers = 0
let is_menu_open = false
let objective_money = 100000
let inputs = document.querySelectorAll('.input_radio')
let porcente_tag = document.getElementById('progress-bar')
let total_backed_tag = document.getElementById('total_backed')
let total_backers_tag = document.getElementById('total_backers')
let projects = {'Bamboo Stand': [101, document.querySelectorAll('#bamboo_stand')],'Black Edition Stand':[64, document.querySelectorAll('#black_edition_stand')]}
let last_hidden_section 

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
        let input_tag = document.getElementById(button.dataset.get)
        projects[button.dataset.project][0] -= 1 
        projects[button.dataset.project][1].forEach(element =>  {
            element.innerHTML = projects[button.dataset.project][0]
        })
        total_backed +=  parseFloat(input_tag.value)
        total_backed_tag.innerText = total_backed

        porcente = parseInt((total_backed * 100) / objective_money)
        porcente_tag.style.width = `${porcente}%`

        total_backers += 1
        total_backers_tag.innerHTML = total_backers
       
    }
}
function show_modal(id){
    document.getElementById(id).classList.remove('hidden')
}

function show_menu(){
    if(is_menu_open){
        is_menu_open = false
        document.getElementById('menu').classList.add('hidden')
        document.querySelector('menu').classList.remove('cover_shadow')

        document.getElementById('button_img').src = 'images/icon-hamburger.svg'
    }
    else{
        is_menu_open = true
        document.getElementById('menu').classList.remove('hidden')
        document.getElementById('menu').classList.add('cover_shadow')

        document.getElementById('button_img').src = 'images/icon-close-menu.svg'
    }
}
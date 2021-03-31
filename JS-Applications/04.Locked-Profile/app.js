async function lockedProfile() {

    let url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const res = await fetch(url);
    const data = await res.json();
    const div = document.querySelector('.profile');
    div.remove();

    const main = document.getElementById('main');
    Object.values(data).forEach(profile =>{

       let person = e('div',{className:'profile'},'',[
            e('img',{src:"./iconProfile2.png",className:'userIcon'}),
            e('label',{},'Lock'),
            e('input',{type:'radio',name:'user1Locked',value:'lock',cheked:'true'}),
            e('label',{},'Unlock'),
            e('input',{type:'radio',name:'user1Locked',value:'unlock'}),
            e('br'),
            e('hr'),
            e('label',{},'Username'),
            e('input',{type:'text',name:`user1Username`,value:'',disabled:'true',readonly:'true'},`${profile.username}`),
            e('div',{id:'user1HiddenFields'},'',[
                e('hr'),
                e('label',{},`Email:`),
                e('input',{type:'email',name:`user1Email`,value:'',disabled:'true',readonly:'true'},`${profile.email}`),
                e('label',{},`Age:`),
                e('input',{type:'email',name:`user1Age`,value:'',disabled:'true',readonly:'true'},`${profile.age}`)
            ]),
            e('button',{},'Show more')
        ])

        main.appendChild(person)
        const btn = document.querySelectorAll('button');
        main.addEventListener('click',show);
       
        
    })
       
    function show(e){
        const lock = e.target.parentNode.querySelector('input[type=radio]:checked').value =='lock'
        
        if(e.target.tagName == 'BUTTON'){

            if(!lock && e.target.textContent == 'Show more'){
                let hide = e.target.previousElementSibling;
                hide.style.display = 'block';
                e.target.textContent = 'Hide it';
            }else if(!lock && e.target.textContent == 'Hide it'){
                e.target.textContent = 'Show more';
               
                let hide = e.target.previousElementSibling;
                 hide.style.display = 'none';
            }else{
                return;
            }
        }
    }
    
}

function e(type, classList, text, children){
    let el = document.createElement(type);
 
   if(classList){
       for(let classL in classList){
        el[classL] = classList[classL]
       }
       
   }
 
    if(text){
        el.textContent = text;
        el.value = text
    }
 
    if(children){
        children.forEach((c) => el.appendChild(c));
    }
 
    return el;
}
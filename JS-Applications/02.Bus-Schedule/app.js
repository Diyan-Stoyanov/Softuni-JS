function solve() {

    let url = ` http://localhost:3030/jsonstore/bus/schedule/depot`;
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const div = document.querySelector('#info span');
   let name;

    function depart() {
        fetch(url)
        .then(res => res.json())
        .then(data=>{
             name = data.name;
            let next = data.next;
            div.textContent = `Next stop ${name}`
            url = ` http://localhost:3030/jsonstore/bus/schedule/${next}`
        })

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
      
        div.textContent = `Arriving at ${name}`
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
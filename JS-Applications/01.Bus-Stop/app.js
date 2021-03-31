function getInfo() {

    const id = document.getElementById('stopId').value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${id}`;

    const ul = document.getElementById('buses');

    fetch(url)
        .then(res => res.json())
        .then(data => {


            ul.innerHTML = '';
            
            Object.entries(data.buses).forEach(([bus, time]) => {
                


                const div = document.getElementById('stopName');
                div.textContent = data.name
                const li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${time}`
                ul.appendChild(li);

            })
        })
        .catch(err => {
            const div = document.getElementById('stopName');
            div.textContent = 'Error'
        })

}
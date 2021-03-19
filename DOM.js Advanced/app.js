function solve() {
    const task = document.getElementById('task');
    const date = document.getElementById('date');
    const textArea = document.getElementById('description');
    const btn = document.getElementById('add');
    const [section, open, progress, complete] = document.querySelectorAll('section');
    const [labelTask, labelText, labelDate] = document.querySelectorAll('label');

    btn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        if (!task.value || !date.value || !textArea.value) {
            return;
        }
        const div = open.lastElementChild;
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task.value
        const p = document.createElement('p');
        p.textContent = `${labelText.textContent}: ${textArea.value}`
        const p2 = document.createElement('p');
        p2.textContent = `${labelDate.textContent}: ${date.value}`
        const divBtn = document.createElement('div');
        divBtn.setAttribute('class', 'flex');
        const startBtn = document.createElement('button');
        startBtn.textContent = 'Start'
        startBtn.setAttribute('class', 'green');
        startBtn.addEventListener('click', funcStart);

        task.value = '';
        date.value = '';
        textArea.value = '';


        function funcStart(e) {


            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete'
            delBtn.setAttribute('class', 'red');
            delBtn.addEventListener('click', () => {
                article.remove();
            })


            const finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.setAttribute('class', 'orange')
            finishBtn.addEventListener('click', () => {
                const divComplete = complete.lastElementChild;

                divComplete.appendChild(article);
                delBtn.remove();
                finishBtn.remove();

            })

            divBtn.removeChild(startBtn);
            divBtn.removeChild(deleteBtn);
            divBtn.appendChild(delBtn);
            divBtn.appendChild(finishBtn);

            const divProgress = progress.lastElementChild;
            divProgress.appendChild(article);

        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete'
        deleteBtn.setAttribute('class', 'red');
        deleteBtn.addEventListener('click', () => {
            article.remove();
        })

        divBtn.appendChild(startBtn);
        divBtn.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(divBtn);
        div.appendChild(article);

    }
}
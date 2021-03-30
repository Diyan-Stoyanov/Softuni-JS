function loadCommits() {
    
    
        const username = document.getElementById('username').value;
        const repo = document.getElementById('repo').value;
        const url = `https://api.github.com/repos/${username}/${repo}/commits`

        let com = document.getElementById('commits');
       
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            let commits = data.map(c => `<li>${c.commit.author.name}: ${c.commit.message}</li>`).join('');
            com.innerHTML = commits
            const ul = document.getElementById('repos');
        
        })
        .catch(err =>{
            com.innerHTML = `<li>${err.status} (${err.statusText})</li>`
        });

    
    
}
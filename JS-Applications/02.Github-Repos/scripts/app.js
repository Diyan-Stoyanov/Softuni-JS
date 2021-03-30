function loadRepos() {
	const username = document.getElementById('username').value;

	const url =  `https://api.github.com/users/${username}/repos`

	fetch(url).then(res=> res.json()).then(data => {
		const ul = document.getElementById('repos');
		ul.innerHTML = ''
		data.forEach(r =>{
			const li = document.createElement('li');
			li.textContent = r.full_name;
			ul.appendChild(li)
		})
	})

}


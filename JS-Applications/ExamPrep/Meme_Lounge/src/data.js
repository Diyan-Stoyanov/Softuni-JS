export async function getAllMemes() {

    const url = `http://localhost:3030/data/memes?sortBy=_createdOn%20desc`;
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export async function createLogin(obj) {
    const url = `http://localhost:3030/users/login`;
    try {
        const response = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }
        const data = await response.json();

        return data;
    } catch (err) {
        alert(err.message);
        throw err;
    }


}

export async function createRegister(obj) {
    const url = `http://localhost:3030/users/register`;
    try {
        const response = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }
        const data = await response.json();

        return data;
    } catch (err) {
        alert(err.message);
        throw err;
    }


}

export async function createMeme(meme, token) {


    try {
        const response = await fetch('http://localhost:3030/data/memes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(meme)
        })
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }
        const data = await response.json();

        return data;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export async function getOneMeme(id){

    const url = `http://localhost:3030/data/memes/${id}`;
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }

        const data = await response.json();
        return data
    } catch (err) {
        alert(err.message);
        throw err;
    }

}

export async function del(id,token){

    const url = `http://localhost:3030/data/memes/${id}`;
    try {
        const response = await fetch(url, {
            method: 'delete',
            headers: {'X-Authorization': token}
        })
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }
        const data = await response.json();

        return data;
    } catch (err) {
        alert(err.message);
        throw err;
    }

}

export async function edit(id,token,meme){

    
    try {
        const response = await fetch(`http://localhost:3030/data/memes/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(meme)
        })
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }
        const data = await response.json();

        return data;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export async function myMeme(userId){
    const url = `http://localhost:3030/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }

        const data = await response.json();
        return data
    } catch (err) {
        alert(err.message);
        throw err;
    }
}





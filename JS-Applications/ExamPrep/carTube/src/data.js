export async function getAllCars() {

    const url = `http://localhost:3030/data/cars?sortBy=_createdOn%20desc`;
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

export async function createCar(car, token) {


    try {
        const response = await fetch('http://localhost:3030/data/cars', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(car)
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

export async function detailsCar(id){

    const url = `http://localhost:3030/data/cars/${id}`;
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

    const url = `http://localhost:3030/data/cars/${id}`;
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

export async function edit(id,token,cars){

    
    try {
        const response = await fetch(`http://localhost:3030/data/cars/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(cars)
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

export async function myCars(userId){
    const url = `http://localhost:3030/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
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






//add user to local storage
const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('isAuth', 'true');
}

//remove User from localStorage

const removeUserFomLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.setItem('isAuth', 'false');
}


//get the user from local storage
const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : {};
};

const getStatusFromLocalStorage = () => {
    const isAuth = localStorage.getItem('isAuth');
    return isAuth && isAuth === 'true' ? true : false;
}

//exports
export {addUserToLocalStorage, removeUserFomLocalStorage, getUserFromLocalStorage, getStatusFromLocalStorage};
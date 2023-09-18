let loginInstance =null;

class UserLogin {

    //get the user
    static getInstance() {
        if(loginInstance === null) {
            loginInstance = new UserLogin();
        }
        return loginInstance;
    }

    


}

module.exports = UserLogin;
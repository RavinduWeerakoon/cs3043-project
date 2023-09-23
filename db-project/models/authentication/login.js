let loginInstance =null;

const call_db = async (pool, query, arg) => {

    console.log(query);
    

    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err);
            } // not connected!
            
            // Use the connection
            connection.query(query, arg, function (error, results, fields) {
                // When done with the connection, release it.
                connection.release();
                // Handle error after the release.
                if (error) {
                    reject(error);
                }
                resolve(results) ;
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    })

}

const getUser  = async (pool,email) => {
    let query = "SELECT * FROM user WHERE email = ?"
   

    return call_db( pool, query, [email]);

}

const getCustomer  = async (pool,id) => {
    let query = "SELECT * FROM customer WHERE user_ID = ?"
    return call_db( pool, query, [id]);

}



class UserLogin {

    //get the user
    static getInstance() {
        if(loginInstance === null) {
            loginInstance = new UserLogin();
        }
        return loginInstance;
    }

    async getUserInfo(pool,res,req,...cusDetails){
    
        
        const user = await getUser(pool, cusDetails[0].email);

        console.log(user);

        return user;
        
    }

    


}

module.exports = UserLogin;
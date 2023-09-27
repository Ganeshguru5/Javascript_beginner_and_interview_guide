class user{
    constructor(name, email, password){
        this.cl_name=name;
        this.cl_email=email;
        this.cl_password=password;
    }
}

console.log(new user("guru", "ganeshgutu8682@gamial.com", "iahron"))

class premiumUser extends user{
    constructor(premium,name, email, password){
        super(name, email, password)
            this.cl_premium=premium;
    }
}
console.log(new premiumUser(true, "guru", "ganeshgutu8682@gamil", "iahron"))
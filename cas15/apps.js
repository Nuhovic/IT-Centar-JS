let nesto = 'test';


const obj = {
    name: 'Dirka',
    lastName: 'Nuhovic',
    god: 2006,
    mail: `kadirnuhovic4@gmail.com`,
    pass:'pass123',
    isLogin: false,
    
    
    get getName() {
        return this.name;
    },

    set setName(setNewName) {
        this.name = setNewName;
    },

    get getAge() {
        const year = new Date().getFullYear();
        return year - this.god;
    },

    get getMail() {
        return this.mail
    },

    set setMail(setNewMail) {
        this.mail = setNewMail
    }
};

console.log(obj.getName);


obj.setName = 'nije vise Dirka';

obj.setMail = `kadirnuhovic8@gmail.com`;

console.log(obj.getName);

console.log(obj.getAge);

console.log(obj.mail);

console.log(obj.god);
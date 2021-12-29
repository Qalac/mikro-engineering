class Contact {

    constructor(number, name, email) {
        this.number = number;
        this.name = name;
        this.email = email;
        this.dateCreated = new Date().toLocaleString();
    }

    getNumber() {
        return this.number.toString();
    }

    setInfo() {
        const value = {Name: this.name, Email: this.email, DateCreated: this.dateCreated};
        return value;
    }
}


export {Contact};

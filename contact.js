class Contact {

    constructor(name, email, number) {
        this.name = name;
        this.email = email;
        this.number = number;
        this.dateCreated = new Date().toLocaleString();
    }

    getNumber() {
        return this.number.toString();
    }

    getInfo() {
        const value = {Name: this.name, Email: this.email, DateCreated: this.dateCreated};
        return value;
    }
}


module.exports = {Contact: Contact};

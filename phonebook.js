class PhoneBook extends Map {

    addContact(number, info) {
        if (this.has(number) == false) {
            return this.set(number, info);
        }
        else {
            console.log("This number already exist");
        }
    }
}

const phoneBook = new PhoneBook();

export {phoneBook};
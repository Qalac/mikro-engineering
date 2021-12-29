class PhoneBook extends Map {

    addContact(number, info) {
        if (this.has(number) == false) {
            return this.set(number, info);
        }
        else {
            return "This number already exist";
        }
    }

    getDetails(number) {
        if (this.has(number) == true) {
            return this.get(number);
        }
        else {
            return "This number doesn't exist";
        }
    }

    getAllNumbers() {
        return this.keys();
    }
}

const phoneBook = new PhoneBook();

module.exports = {phoneBook: phoneBook};
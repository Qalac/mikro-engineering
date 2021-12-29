var {phoneBook} = require("../phonebook");
var {Contact} = require("../contact");


// Dummy data that'll be used to test different use-cases

var first_contact = {
    name: "Anthony",
    email: "anthony@email.com",
    number: "08180506561"
}

var second_contact = {
    name: "Michael",
    email: "michael@email.com",
    number: "08180506562"
}

var third_contact = {
    name: "John",
    email: "john@email.com",
    number: "08180506562"
}


// Creating new contacts/contact-objects to be added to the phoneBook

var contact_1 = new Contact(first_contact.name, first_contact.email, first_contact.number);
var contact_2 = new Contact(second_contact.name, second_contact.email, second_contact.number);
var contact_3 = new Contact(third_contact.name, third_contact.email, third_contact.number);


// Adding 3 different contacts to the phoneBook

phoneBook.addContact(contact_1.getNumber(), contact_1.getInfo());
phoneBook.addContact(contact_2.getNumber(), contact_2.getInfo());
var duplicate_num_entry = phoneBook.addContact(contact_3.getNumber(), contact_3.getInfo());




// *****************FIRST TEST**********************

describe("Ability to store unique phone number", () => {

    test("Phonebook size should be less than the number of contacts saved(3). ", () => {
        expect(phoneBook.size).toBeLessThan(3)
    });

    test("Phonebook size should be equal to number of contacts with unique phone numbers(2)", () => {
        expect(phoneBook.size).toEqual(2)
    });

    test("Throwing the required exception message when a number already exists", () => {
        expect(duplicate_num_entry).toMatch("This number already exist")
    });
});



// *****************SECOND TEST**********************

describe("Get unique phone details using phone number", () => {

    test("Details gotten from phonebook using a phone number should be the same as the details gotten from a contact object", () => {
        const phonebook_details = phoneBook.getDetails(contact_1.getNumber());
        const contact_details = contact_1.getInfo();
    
        expect(phonebook_details).toEqual(contact_details);
    });

    test("Returning the required error message when a phone number doesn't exist", () => {
        const phonebook_details = phoneBook.getDetails("09023223298");
    
        expect(phonebook_details).toMatch("This number doesn't exist");
    });
});




// *****************THIRD TEST**********************

describe("Get list of phone numbers", () => {

    test("Phone numbers gotten from phonebook should contain list of unique phone numbers", () => {
        const unique_phone_nums = new Set("08180506561", "08180506562");
        const all_nums = phoneBook.getAllNumbers();

        for (let index=0; index < unique_phone_nums.length; index++) {
            expect(all_nums).toContain(unique_phone_nums[index]);
        }
    });  
});

class Email {
    constructor(email) {
        this.email = email;
    }

    get isValid() {
        const invalidCharacters = ['*', '#', '$', '%', '^'];
        const [login, domain] = this.email.split('@');
        
        if (invalidCharacters.some(char => login.includes(char))) {
            return false;
        }
        
        if (domain.split('.').pop().length > 3) {
            return false;
        }
        
        return true;
    }

    set setEmail(newEmail) {
        this.email = newEmail.join('.');
    }
}

class Contact extends Email {
    constructor(email, phone) {
        super(email);
        this.phone = phone;
    }

    get phoneType() {
        const phoneLength = this.phone.replace('+', '').length;
        const hasPlus = this.phone.includes('+');
        
        if (hasPlus && phoneLength === 12) {
            return "Мобильный";
        } else if (hasPlus && phoneLength === 18) {
            return "Городской";
        } else {
            return "Неизвестный";
        }
    }
}


const contact1 = new Contact("example@mail.com", "+123456789012");
const contact2 = new Contact("another@example.com", "+123456789012345678");
const contact3 = new Contact("test@example.com", "123456789012345678");

console.log(contact1.phoneType); // Выведет "Мобильный"
console.log(contact2.phoneType); // Выведет "Городской"
console.log(contact3.phoneType); // Выведет "Неизвестный"

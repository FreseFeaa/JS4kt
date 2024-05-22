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



const email1 = new Email('example@mail.com');
console.log(email1.isValid); // true

email1.setEmail = ['newEmail', 'gmail', 'com'];
console.log(email1.email); // 'newEmail@gmail.com'

const email2 = new Email('john_doe#example.xyz');
console.log(email2.isValid); // false

const email3 = new Email('cat^^@mail.com');
console.log(email3.isValid); // false

const email4 = new Email('cat@gmail');
console.log(email4.isValid); // false

const email5 = new Email('cat@gmail.ssss');
console.log(email5.isValid); // false



email2.setEmail = ['cat', 'gmail', 'com'];
console.log(email2.email); // 'jane_smith@example.com'

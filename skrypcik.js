const prod1 = {
    name: 'łapka na muchy',
    price: 1.05,
    weight: 0.15
};

const prod2 = {
    name: 'prodiż',
    price: 340,
    weight: 3.54
};

const currentUser = {
    name: 'Jan',
    surname: 'Prodiżowy',
    email: 'jan@prodiz.pl',
    www: 'janprodiz.pl',
    userType: 'admin',
    show: function () {
        console.log('Imię: ' + this.name);
        console.log('Nazwisko: ' + this.surname);
        console.log('E-mail: ' + this.email);
        console.log('Strona www: ' + this.www);
        console.log('Typ użytkownika: ' + this.userType);
    }
};

const book = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    pageCount: '234',
    publisher: 'Media Cośtam',
    showDetails: function () {
        for (i in this) {
            if (typeof this[i] !== 'function') {
                console.log('Key: ' + i + ' | ' + 'Value: ' + this[i]);
            }
        }
    }
};

book.showDetails();
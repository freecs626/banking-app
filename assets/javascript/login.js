const ACCOUNTS = [{
        username: 'admin',
        password: 'password',
        accessLevel: 'admin',
        accountNumber: null,
        balance: null,
    },
    {
        username: 'leian',
        password: 'password',
        accessLevel: 'client',
        accountNumber: '123456789',
        balance: 999,
    }
];

const USERNAMES = ['admin', 'leian'];

function login() {
    let usernameInput = document.getElementById('username-input').value;
    let passwordInput = document.getElementById('password-input').value;

    if (USERNAMES.includes(usernameInput)) {
        let user = ACCOUNTS.find(account => account.username === usernameInput);

        if (user.password === passwordInput) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = "./adminDashboard.html";
        } else {
            alert('Invalid password, please try again.');
        }
    } else {
        alert('Invalid username, please try again.');
    }
}
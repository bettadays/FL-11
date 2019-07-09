
let emailPrompt = 'Your e-mail';
let canceled = 'Canceled';
let emailTooShort = 'I don\'t know any emails having name length less than 6 symbols';
let stranger = 'I don’t know you';

let pwPrompt = 'Your password';
let pwWrong = 'Wrong password';
let pwNewOffer = 'Do you want to change your password?';
let pwCurrentPrompt = 'Your current password';
let pwNewRequest = 'Enter your new password';
let pwNewConfirmationRequest = 'Reenter your new password';
let pwChangeFailed = 'You have failed the change.';
let pwTooShort = 'It’s too short password. Sorry.';
let pwNewWrong = 'You wrote the wrong password';
let pwChangeSuccess = 'You have successfully changed your password.';

let user = {
    email: 'user@gmail.com',
    password: 'UserPass'
};
let admin = {
    email: 'admin@gmail.com',
    password: 'AdminPass'
};

let emailMinLength = 6;
let newPwMinLength = 5;
let password;
let passwordSecondCheck;
let pwNew;
let pwNewConfirmation;
let userCheck;
let adminCheck;


let email = prompt(emailPrompt);

if (email === null) {
    alert(canceled);
} else if (email.length < emailMinLength) {
    alert(emailTooShort);
} else {

    switch (email) {
        case user.email:
        case admin.email:
            password = prompt(pwPrompt);
            userCheck = email === user.email && password === user.password;
            adminCheck = email === admin.email && password === admin.password;


            if (password === null) {
                alert(canceled);
                break;
            } else if (userCheck || adminCheck) {
                pwNewOffer = confirm(pwNewOffer);

                if (!pwNewOffer) {
                    alert(pwChangeFailed);
                    break;
                } else {
                    passwordSecondCheck = prompt(pwCurrentPrompt);

                    if (passwordSecondCheck === null) {
                        alert(canceled);
                        break;

                    } else if (passwordSecondCheck === password) {
                        pwNew = prompt(pwNewRequest)

                        if (pwNew.length < newPwMinLength) {
                            alert(pwTooShort);
                            break;
                        } else {
                            pwNewConfirmation = prompt(pwNewConfirmationRequest);

                            if (pwNewConfirmation === pwNew) {
                                alert(pwChangeSuccess);
                                break;
                            } else {
                                alert(pwNewWrong);
                                break;
                            }
                        }

                    } else {
                        alert(pwWrong);
                        break;
                    }
                }

            } else {
                alert(pwWrong);
                break;
            }
        default:
            alert(stranger);
            break;
    }
}




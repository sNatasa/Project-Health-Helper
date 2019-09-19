function Account() {

    this.displayAccountInfo = () => {

        let rootForm = $('#root-form');

        let backButton = $('<button> Go back to Home page </button>').attr('id', 'back-button');
        $('#root-form').append(backButton);
        backButton.on('click', () => {
            window.location = "../index.html";
        })
        rootForm.append(backButton);
        // back button

        let loginPage = $('<div>').addClass('login-page');
        let form = $('<div>').addClass('form');
        let registerForm = $('<form>').addClass('register-form');
        let registerName = $(`<input>`).attr("placeholder", "name").addClass('form-input');
        let registerEmail = $(`<input>`).attr("placeholder", "e-mail").addClass('form-input');
        let registerPassword = $(`<input>`).attr("type", "password").attr("placeholder", "password").addClass('form-input');
        let registerBtn = $('<button>').html("Create").addClass('button');
        let message = $('<p> Already registered? <a href="#"> log in </a> </p>').addClass('message');

        let loginForm = $('<form>').addClass('login-form');
        let username = $(`<input>`).attr("placeholder", "user name").addClass('form-input');
        let passwordL = $(`<input>`).attr("placeholder", "password").attr("type", "password").addClass('form-input');
        let loginBtn = $('<button>').html("Log in").addClass('button');
        let messageL = $('<p> Not registered?<a href="#"> Create an account </a> </p>').addClass('message');

        $('#root-form').append(loginPage);
        $('#root-form').append(form);
        $('.form').append(registerForm);
        $('.form').append(loginForm);
        $('.register-form').append(registerName);
        $('.register-form').append(registerEmail);
        $('.register-form').append(registerPassword);
        $('.register-form').append(registerBtn);
        $('.register-form').append(message);
        // console.log($('.message'))

        $('.login-form').append(username);
        $('.login-form').append(passwordL);
        $('.login-form').append(loginBtn);
        $('.login-form').append(messageL);



        $('.message a').on('click', () => {
            $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        })

        //Events
        function validation() {
            if (registerPassword.length > 8) {
                alert('password seems to be way too short.')
                return false;
            } /// it just doesn't work I dunno why
        }
        registerBtn.on("click", () => {
            registerUser()
            if (validation()) {
                registerUser()
            }
        })

        loginBtn.on("click", () => {
            loginUser()
        })


        function registerUser() {
            let name = registerName.val();
            let password = registerPassword.val();
            let email = registerEmail.val();

            let userObject = {
                firstName: name,
                password: password,
                email: email
            };

            let users = JSON.parse(localStorage.getItem('users'));
            // console.log(users);

            if (users === null) {
                let array = [];
                array.push(userObject);
                registerName.val("");
                registerPassword.val("");
                registerEmail.val("");
                localStorage.setItem('users', JSON.stringify(array));

            } else {
                for (let i = 0; i < users.length; i++) {
                    if (users[i].firstName === userObject.firstName) {
                        registerName.val("");
                        registerPassword.val("");
                        registerEmail.val("");
                        alert('account created!');
                        return;
                    }
                }
                users.push(userObject);
                registerName.val("");
                registerPassword.val("");
                registerEmail.val("");
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
        function loginUser() {
            let loginUserName = username.val();
            let loginPassword = passwordL.val();
            let users = JSON.parse(localStorage.getItem('users'));
            for (let i = 0; i < users.length; i++) {
                if (users[i].firstName == loginUserName && users[i].password == loginPassword) {
                    alert(`Welcome ${users[i], loginUserName} ! `);
                    break;
                }

            }
        };



    }

}

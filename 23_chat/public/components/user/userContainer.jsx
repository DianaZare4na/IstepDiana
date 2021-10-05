
class UserContainer extends React.Component {

    constructor(props) {
        super(props); // Вызов конструктора предка

        let newUser = {
            name: "",
            email: "",
            password: "",
            password_confirm: ""
        };
        // Состояние компонента
        this.state = {
            error: null, // Состояние ошибки
            isEdit: false,
            isReg: false,
            isLogin: false,
            isLoaded: false, // Состояние загрузки
            user: newUser // Данные о пользователе
        }
    }


    create(){
        fetch("/api/users",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.user)
            }
        )
            .then(response => response.json())
            .then (item => {
                this.setState({
                    isReg:false,
                    user: null
                });
            })
            .catch(err => {
                this.setState({error: err});
            });
    }

    read(){}

    update(){}

    delete(){}

    doOpenRegForm(){
        let newUser = {
            name: "",
            email: "",
            password: "",
            password_confirm: ""
        };
        this.setState({
            isReg: true,
            user: newUser
        });
    }

    tryReg() {
        // Проверить форму
        console.log("/api/user/testbyemail/" + this.state.user.email);
        fetch("/api/user/testbyemail/" + this.state.user.email)
            .then(response => response.text())
            .then (isHaving => {
                // console.log(isHaving);
                    if(isHaving == "true") {
                        console.log(" такой уже есть ");
                    } else {
                        console.log(" в базе такого нет - перехожу к записи в базу ");
                        this.create();
                    }
                })
            .catch(err => {
                this.setState({error: err});
            });

    }


    doOpenLoginForm(){}

    tryLogin() {
        fetch("/api/user/findbyemailpswd/" + this.state.user.email + "/" + this.state.user.password)
            .then(response => response.json())
            .then (users => {
                console.log(users);
                if(users.length != 1 ){
                    console.log(" Что то не так в базе");
                    // Поведение, если нет пользователя
                } else {
                    this.setState({
                        isLogin: true,
                        user: users[0]
                    })
                }
            })
            .catch(err => {
                this.setState({error: err});
            });
    }

    doOpenEditForm(){
    }

    doUpdate() {}

    doLogout() {}

    doDelete() {}

    onChange(el){
        // тут формируется оперативная реакция системы на ввод пользователя
        const user = this.state.user;
        user[el.target.name]= el.target.value;
        this.setState({user: user});
    }

    renderRegisterForm(){
        return(
            <div>
                <form className="form-horizontal">
                    <fieldset>
                        <div id="legend">
                            <legend className="">Register</legend>
                        </div>
                        <div className="control-group">
                            <label className="control-label" htmlFor="name">Username</label>
                            <div className="controls">
                                <input onChange={this.onChange.bind(this)} type="text" id="name" name="name" placeholder=""  className="input-xlarge" />
                                    <p className="help-block">Username can contain any letters or numbers, without
                                        spaces</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label" htmlFor="email">E-mail</label>
                            <div className="controls">
                                <input onChange={this.onChange.bind(this)}  type="text" id="email" name="email" placeholder="" className="input-xlarge" />
                                    <p className="help-block">Please provide your E-mail</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label" htmlFor="password">Password</label>
                            <div className="controls">
                                <input onChange={this.onChange.bind(this)}  type="password" id="password" name="password" placeholder=""
                                       className="input-xlarge" />
                                    <p className="help-block">Password should be at least 4 characters</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label" htmlFor="password_confirm">Password (Confirm)</label>
                            <div className="controls">
                                <input onChange={this.onChange.bind(this)}  type="password" id="password_confirm" name="password_confirm" placeholder=""
                                       className="input-xlarge" />
                                    <p className="help-block">Please confirm password</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <div className="controls">
                                <button className="btn btn-success" type="button" onClick={this.tryReg.bind(this)}>Register</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

    renderEditForm(){
        return(
            <div> Редактирование </div>
        )
    }

    renderLoginForm(){
        return(
            <div>
                <div>
                    <form className="form-horizontal">
                        <fieldset>
                            <div id="legend">
                                <legend className="">Login</legend>
                            </div>


                            <div className="control-group">
                                <label className="control-label" htmlFor="email">E-mail</label>
                                <div className="controls">
                                    <input onChange={this.onChange.bind(this)}  type="text" id="email" name="email" placeholder="" className="input-xlarge" />
                                    <p className="help-block">Please provide your E-mail</p>
                                </div>
                            </div>

                            <div className="control-group">
                                <label className="control-label" htmlFor="password">Password</label>
                                <div className="controls">
                                    <input onChange={this.onChange.bind(this)}  type="password" id="password" name="password" placeholder=""
                                           className="input-xlarge" />
                                    <p className="help-block">Password should be at least 4 characters</p>
                                </div>
                            </div>

                            <div className="control-group">
                                <div className="controls">
                                    <button className="btn btn-success" type="button" onClick={this.tryLogin.bind(this)}>Login</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>

                <span onClick={this.doOpenRegForm.bind(this)}> Регистрация </span>
            </div>
        )
    }

    renderWelcome(){
        return(
            <div> Добро пожаловать </div>
        )
    }

    render(){
        if(this.state.error) return this.renderError();
        if(this.state.isReg) return this.renderRegisterForm();
        if(this.state.isEdit) return this.renderEditForm();
        if(this.state.isLogin) return this.renderWelcome();
        return this.renderLoginForm();
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }

    // Отображение компонента в состоянии ошибки
    renderError(){
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }

}
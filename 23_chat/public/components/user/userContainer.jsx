
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


   delete(){
		// fetch("/api/users", {
		// 	method: 'DELETE',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 	id: this.state._id
		// 	})
		// })
		// 	.catch((ex) => {
		// 	console.log("Error: " + ex.message);
		// 	console.log("Response: " + ex.response);
		// });
	}

	doCloseForm() {
		this.setState({isEdit: false, user: this.oldUser});
}

doSaveForm(){
		if(this.props.create) {
			this.props.create(this.state.user);
			this.setState({isEdit:false, user: null});
		} else {
			this.props.update(this.state.user);
			this.setState({isEdit:false});
		}
}

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


   doOpenLoginForm(){
		let newUser = {
			email: "",
			password: "",
		};
		this.setState({
			isLogin: true,
			isReg: false,
			user: newUser
		});
	}

   tryLogin() {
		console.log("/api/user/findbyemailpswd/" + this.state.user.email + "/" + this.state.user.password);
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
		this.olduser = this.state.user;
		if (!this.state.user) {
			this.state.user = new Object();
			this.state.user.name = "";
			// this.state.item.img = "";
			// this.state.item.gallery = [];
		}
		this.setState({isEdit: true});
   }
	doCloseForm() {
		this.setState({isEdit: false, user: this.olduser});
	}

	doSaveForm(){
		if(this.props.create) {
			this.props.create(this.state.user);
			this.setState({isEdit:false, user: null});
		} else {
			this.props.update(this.state.user);
			this.setState({isEdit:false});
		}
	}

   doUpdate(user) {
		this.setState({
			isLoaded: false,
			user
		});
		fetch("/api/users",
			{
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(user)
			}
		)
			.then(response => { })
			.then(item => { this.setState({ isLoaded: true }); })
			.catch(err => {
				console.log(err);
			});

		
	}

   doLogout() {
		let newUser = {
			email: "",
			password: "",
		};
		this.setState({
			isLogin: true,
			isReg: false,
			user: newUser
		});
		let contact = document.getElementById("cardid");
			contact.style.display = "none";
	}

   doDelete() {
		fetch("/api/users", {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: JSON.parse(localStorage.getItem('user'))._id
			})
		})
			.catch((ex) => {
				console.log("Error: " + ex.message);
				console.log("Response: " + ex.response);
			});
		this.setState({
			isLogin: true,
			isReg: false,
		})
		
	
	}

   onChange(el){
        // тут формируется оперативная реакция системы на ввод пользователя
      const user = this.state.user;
      user[el.target.name]= el.target.value;
      this.setState({user: user});
   }

   renderRegisterForm(){
      return(
            <div id="regform">
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
		
			<form>
				<input type="hidden" className="form-control" id="_id" name="_id"/>
				<div className="mb-3">
						<label className="form-label">Имя</label>
						<input value={this.state.user.name} type="text" className="form-control" id="name" name="name" onChange={this.onChange.bind(this)}/>
				</div>
				<div className="mb-3">
						<label className="form-label">Email</label>
						<input value={this.state.user.email} type="number" className="form-control" id="price" name="price" onChange={this.onChange.bind(this)}/>
				</div>
				<button type="button" className="btn btn-secondary" onClick={this.doCloseForm.bind(this)}> Close </button>
				<button type="button" className="btn btn-success" onClick={this.doSaveForm.bind(this)}> Save</button>
			</form>
		)
	}

   renderLoginForm(){
      return(
            <div>
               <div id="logHide">
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
			<div className="card" id="cardid" key={this.state.user._id}  >
				<img className="card-img-top" alt=""/>
				<div className="card-body">
					<h5 className="card-title">{this.state.user.name} </h5>
				</div>
				<button className="btn" onClick={this.doDelete.bind(this)}>Удалить</button>
				<button className="btn" onClick={this.doOpenEditForm.bind(this)}>Редактировать</button>
				<button className="btn" onClick={this.doLogout.bind(this)}>Выход</button>
			</div>
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
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class Contactpage extends Component {
					render() {
						return (
							<div className="main-section-first-contact-container">
								<h3> Contact Us </h3>
								<FormContainer />
							</div>
						);
					}
				}
				const TextArea = (props) => (  
					<div className="form-group">
						<label className="form-label">{props.title}</label>
						<textarea
							className="form-textarea"
							name={props.name}
							rows={props.rows}
							cols = {props.cols}
							value={props.value}
							onChange={props.handleChange}
							placeholder={props.placeholder} />
					</div>
				);
				const Button = (props) => {
					console.log(props.style);
					return(
						 <button 
								style= {props.style} 
								className = {props.type=='primary'? 'btn btn-primary' : 'btn btn-secondary'}
								onClick= {props.action} > 
								{props.title} 
						 </button>)
				}
				const Input = (props) => {
					 console.log(props.value);
					 return (  
							<div className="form-group">
								<label for={props.name} className="form-label">{props.title}</label>
								<input
									className="form-control"
									id={props.name}
									name={props.name}
									type={props.inputType}
									value={props.value}
									onChange={props.handleChange}
									placeholder={props.placeholder} 
									{...props} />
							</div>
					)
				}
				class FormContainer extends Component {  
					constructor(props) {
						super(props);
						this.state = {
							newUser: {
							name: '',
							email: '',
							comment: ''
							},
						}
						this.handleTextArea = this.handleTextArea.bind(this);
						this.handleEmail = this.handleEmail.bind(this);
						this.handleFullName = this.handleFullName.bind(this);
						this.handleFormSubmit = this.handleFormSubmit.bind(this);
						this.handleClearForm = this.handleClearForm.bind(this);
						this.handleInput = this.handleInput.bind(this);
					}
				handleFullName(e) {
					let value = e.target.value;
					this.setState( prevState => ({ 
						newUser : {...prevState.newUser, name: value}
					}), () => console.log(this.state.newUser))
				}

				handleEmail(e) {
					let value = e.target.value;
					this.setState( prevState => ({ 
						newUser : {...prevState.newUser, email: value}
					}), () => console.log(this.state.newUser))
				}

				handleInput(e) {
					let value = e.target.value;
					let name = e.target.name;
					this.setState( prevState => ({ 
						newUser : {...prevState.newUser, [name]: value}
					}), () => console.log(this.state.newUser))
				}

				handleTextArea(e) {
					console.log("Inside handleTextArea");
					let value = e.target.value;
					this.setState(prevState => ({
						newUser: {...prevState.newUser, comment: value}
					}), ()=>console.log(this.state.newUser))
				}

				handleFormSubmit(e) {
					e.preventDefault();
					let userData = this.state.newUser;
					fetch('https://formula-test-api.herokuapp.com/contact',{
						method: "POST",
						body: JSON.stringify(userData),
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
					}).then(response => {
						response.json().then(data =>{
							console.log("Successful" + data);
						})
					})
				}   

				handleClearForm(e) {
					e.preventDefault();
					this.setState({ 
						newUser: {
							name: '',
							email: '',
							comment: ''
						},
					})
				}

				render() {
					return (
						<form className="container-fluid" onSubmit={this.handleFormSubmit}>
							<Input inputType={'text'}
										 title= {'Full Name'} 
										 name= {'name'}
										 value={this.state.newUser.name} 
										 placeholder = {'Enter your name'}
										 handleChange = {this.handleInput}
							/>

							<Input inputType={'email'} 
										 name={'email'}
										 title= {'Email'} 
										 value={this.state.newUser.email} 
										 placeholder = {'Enter your email'}
										 handleChange={this.handleEmail} 
							/> 

							<TextArea
										 title={'Comment'}
										 rows={10}
										 value={this.state.newUser.comment}
										 name={'comment'}
										 handleChange={this.handleTextArea}
										 placeholder={'Comment'} 
							/>

							<Button 
										 action = {this.handleFormSubmit}
										 type = {'primary'} 
										 title = {'Submit'} 
										 style={buttonStyle}
							/> 
						
							 <Button 
										 action = {this.handleClearForm}
										 type = {'secondary'}
										 title = {'Clear'}
										 style={buttonStyle}
							/> 
						</form>
					 );
				}
			}
			const buttonStyle = {
				margin : '10px 10px 10px 10px'
			}

		
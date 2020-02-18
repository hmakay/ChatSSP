import React, { Component } from 'react';
import { VERIFY_USER } from '../Events'

export default class LoginForm extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nickname:"",
			error:"",
			cpf:"",
	  };
	}

	componentDidMount(){
		let namesObj = {
			1:"Bonates",
			2:"Gama",
			3:"jonilson",
			4:"Carol",
			5:"Luiz",
			6:"Ronaldo",
			7:"Monica",
			8:"Leone",
			9:"Rafael",
			10:"Maria"
		}
		
		let index  = Math.floor(Math.random() * 10 + 1) 

		this.setState({nickname:	namesObj[index] , cpf:index})
	}
  

	setUser = ({user, isUser})=>{
		
		if(isUser){ 
			//console.log(user)
			this.setError("Usuário logado em outra sessão")
		}else{
			this.setError("")
			this.props.setUser(user)
		}
	}

	

	handleSubmit = (e)=>{
		e.preventDefault()
		const { socket } = this.props
		const { nickname,cpf } = this.state
		
		socket.emit(VERIFY_USER, {nickname,cpf},this.setUser)
	}

	handleChange = (e)=>{	
		this.setState({nickname:e.target.value})
	}

	setError = (error)=>{
		this.setState({error})
	}

	render() {
	
		const { nickname,cpf, error } = this.state

		//console.log(this.state)
			
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit} className="login-form" >

					<label htmlFor="nickname">
						<h2>Digite seu Nome</h2>
					</label>
					<input
						ref={(input)=>{ this.textInput = input }} 
						type="text"
						id="nickname"
						value={nickname}
						cpf={cpf}
						onChange={this.handleChange}
						placeholder={'Nome Sobrenome Setor'}
						/>
						<div className="error">{error ? error:null}</div>

				</form>
			</div>
		);
	}
}

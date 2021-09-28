import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
            this.state = {
                id : '',
                password : '',
                isLoggedin : null
            };}
            //아이디 입력창 관리
            idChange = (e) =>{
                this.setState({
                   id : e.target.value,
                });
            }
            //비번 입력창 관리
            passwordChange = (e) =>{
                this.setState({
                   
                   password : e.target.value
                });
            }
        
            //클릭시 서버로 데이터 전송 이 부분 해야함
            LoginClick = (e) => {
                e.preventDefault();
        
                
                
        
                alert('로그인 성공');
            }
        
            LoginKeyPress = (e) =>{
                if(e.key === 'Enter') {
                    this.LoginClick();
                }
            }
           
            render(){
                const { id,password}= this.state;
                const { passwordChange,idChange,LoginClick} = this;
                return(
                    <div className = "Login">
                        <div>
                        <header className = "Login-header">
                            <h2>로그인</h2>
                            <span>아이디</span>
                        <input type = "text" placeholder = "아이디" value={id} onChange= {idChange} />
                        <span>비밀번호</span>
                        <input type = "password" placeholder="비밀번호" value={password} onChange={passwordChange} onKeyPress={this.LoginKeyPress} />
                        
                       
                        
                        <button onClick={LoginClick}>로그인</button>
                       {/* <button onClick={()=> window.location.href = "/Signup"}>회원가입</button>*/}
                       

                       {/* <Signup></Signup> */}
                        {/* <Router> */}
                    
                        <Link to= "/Signup">회원가입</Link>
                       
                        {/* <Route path="/Signup">
                            <Signup></Signup>
     
                        </Route> */}
                        
                       {/* </Router> */}
                        
                        </header>  
                        </div>
                    </div>
        );
    }
}
export default Login;
import React,{Component} from "react";

class Signup extends Component{
     
    render(){
        return(
            <div className = "Signup">
                <header className = "Signup-header">
                   <h2>회원가입</h2>
                <span>아이디</span>
                <input type = "text" placeholder = "아이디" />
                <span>비밀번호</span>
                <input type = "password" placeholder="비밀번호"/>
                <span>비밀번호 확인</span>
                <input type = "testpassword"  placeholder = "비밀번호 확인" />
                </header> 

                <button className = "login-btn" onClick = {()=>window.location.href = "/Login"}>로그인</button>
                <button className = "signup-btn" onClick ={() => window.location.href ="/Login"}>회원가입</button>
             
               {/*} <Router>
                
                    <Link to = "/Login">로그인</Link>
                    <Route path = "/Login" component={Login}/>
                  
        </Router>*/}
                

            </div>
        );
    }

}

export default Signup;
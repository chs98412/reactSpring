import React, { Component } from "react";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import DatePicker from "react-datepicker";
//import { Card } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";
//import Select from "react-select";
// import { InputGroup, FormControl} from 'react-bootstrap';
import Showpets from '../components/Showpets';

class Mypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        pet:[],
          file : '',
          previewURL : '',
          options:[{ value: "여자", label: "여자" },
              { value: "남자", label: "남자" },],
              contents:[
                {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
              ]
        }
      }
    // getPets(){
    //     var i = 0;
    //   while(i< this.state.pets.length){
    //     var data = this.state.pets[i];
        
    //     <div><Card style={{ width: '18rem' }}>
    //       <Card.Img variant="top" src="holder.js/100px180" />
    //     <Card.Body>
    //       <Card.Title className="mb-2 text-muted" >Card Title</Card.Title>
    //       <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    //       <Card.Text className="mb-2 text-muted">
    //         Some quick example text to build on the card title and make up the bulk of
    //         the card's content.
    //       </Card.Text>
          
    //     </Card.Body>
    //   </Card>
    //   </div>
    //     i = i + 1;
    //   }
    // }
    handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file : file,
            previewURL : reader.result
          })
        }
        reader.readAsDataURL(file);
      }
      render(){
        var petlist = null
        let profile_preview = null;
        if(this.state.file !== ''){
          profile_preview = <img width="200px" alt='hi' className='profile_preview' src={this.state.previewURL}></img>
        }
        return (
            <div className="mypage">
                <header>

                <h1>mypage</h1>

                <form action="/create_process" method="post"
                onSubmit={function(e){
                    e.preventDefault();
                    alert(e.target.type.value+
                        e.target.name.value+
                        e.target.gender.value+
                        e.target.birth.value+
                        e.target.weight.value+
                        e.target.profile_img.value)
                    this.props.onSubmit(
                        e.target.type.value,
                        e.target.name.value,
                        e.target.gender.value,
                        e.target.birth.value,
                        e.target.weight.value,
                        e.target.profile_img.value
                        );

                        // var _pets = Array.from(this.state.pet);
                        // _pets.push({type:e.target.type.value
                        //     ,name:e.target.name.value,
                        //     gender:e.target.gender.value
                        //     ,birth:e.target.birth.value,
                        //     weight:e.target.weight.value,
                        //     img:e.target.profile_img.value})
                            var _pets= this.state.pet.concat(
                                {type:e.target.type.value
                                    ,name:e.target.name.value,
                                    gender:e.target.gender.value
                                    ,birth:e.target.birth.value,
                                    weight:e.target.weight.value,
                                    img:e.target.profile_img.value}
                              )
                              console.log("mypage pet:",_pets) 
                        this.setState({
                          pet:_pets
                        });
                        petlist = <Showpets name={e.target.name.value} type={e.target.type.value}></Showpets>
                      
                }.bind(this)}>
               
                <p>종류<input type="text" name="type" placeholder="반려동물의 종류를 입력하세요!"></input></p>
                <p>이름<input type="text" name="name" placeholder="반려동물의 이름을 입력하세요!"></input></p>
                <p>성별<select name="gender"><option>여자</option><option>남자</option></select></p>
                <p>생년월일<input type="date" name="birth"></input></p>
                <p>몸무게<input type="text" name="weight" placeholder="몸무게를 입력하세요!"></input>kg</p>
                <div>사진
                    <input type='file' 
                        accept='image/jpg,impge/png,image/jpeg,image/gif' 
                        name='profile_img' 
                        onChange={this.handleFileOnChange}>
                    </input>
                    {profile_preview}
                </div>
   
                {/* <button>삭제</button>
                <button>수정</button> */}
                <p><input type="submit"></input></p>
                {petlist}
                <Showpets name="에쁘" type="강아지"></Showpets>
                </form>
                
            </header>
        </div>
        );
    }
}
export default Mypage;
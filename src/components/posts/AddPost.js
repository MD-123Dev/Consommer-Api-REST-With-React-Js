import React, { Component } from 'react'
import {addPosts} from '../../store/actions/postsActions'
import { connect } from 'react-redux'


class AddEditPost extends Component {
  state = {
           ShowToggle:null,
           x:false,
           title:'',
           body:'',
           display:false
       
    };

     toggleButton = (e) =>{
             e.preventDefault();
            
             this.setState({
                 x:!this.state.x,
                ShowToggle :this.state.x,
                display:true
                 
                });

              

    };
        
      
        submit = e => {
       
       e.preventDefault();

        const {title, body} = this.state; 

       const newPost = {
          
           title,
           body
           
       };
       
       this.props.addPosts(newPost);

     

       this.setState({
           title:'',
           body:''
          
       });
      

     
   }

   onChangeInput =  e => this.setState({ [e.target.name]: e.target.value});

    render() {
         const {  title , body } = this.props;
         const { ShowToggle ,display} = this.state;//**not this.states but props */

        return (
            <div>
                  
                 {(ShowToggle) ? (
                      <form onSubmit={this.submit}>
                        <div className="form-group">
                        <label for="Nom Produits"></label>
                        <input htmlType="text" name="title" id="" className="form-control" placeholder="title" defaultValue={title}  onChange={this.onChangeInput} />
                        
                        </div>

                        <div className="form-group">
                        <label for="">Prix </label>
                        <input htmlType="text" name="body" id="" className="form-control" placeholder="body" defaultValue={body} onChange={this.onChangeInput} />
                        
                        </div>

                        {(display) ? (
                         <button htmlType="submit" className="btn btn-primary " >Save</button>
                        ):<button htmlType="submit" className="btn btn-primary ">Edit</button>}
                       
                        
                    

                      </form>
                   ):null}

                    <div>
                       <span><i className="fa fa-plus float-right"  onClick={this.toggleButton}></i></span>
                  </div>
                
            </div>
            
        )
    }
}
 
export default connect(null,{ addPosts})(AddEditPost);
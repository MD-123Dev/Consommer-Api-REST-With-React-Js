import React, { Component } from 'react'
import {getPost,updatePost} from '../../store/actions/postsActions'
import { connect } from 'react-redux'


class EditPost extends Component {
  state = {
         
           title: '',
           body: '',
         
       
    };

    componentDidMount() {
        const { id } =  this.props.match.params;
       this.props.getPost(id);
       

       
    }

   componentWillReceiveProps(nextProps) {

        const { title , body} = nextProps.post;

        this.setState({
            title:title,
            body:body,
        })
    }
     
       
 submit = e => {
       
       e.preventDefault();

        const {title, body} = this.state; 
        const {id} = this.props.match.params;

       const updtPost = {
           id,
           title,
           body
           
       };
       
       this.props.updatePost(updtPost);


       this.setState({
           title:'',
           body:''
          
       });
      
       this.props.history.push('/');//**redirect*/

     
   }
   onChangeInput =  e => this.setState({ [e.target.name]: e.target.value});

    render() {
         const {  title , body } = this.state;//**sates not props or not working dont data display */
       

        return (
            <div>
                  
               
                      <form onSubmit={this.submit}>
                        <div className="form-group">
                        <label for="Nom Produits">Title : </label>
                        <input htmlType="text" name="title" id="" className="form-control"  defaultValue={title}  onChange={this.onChangeInput} />
                     
                        </div>

                        <div className="form-group">
                        <label for="">Body </label>
                        <input htmlType="text" name="body" id="" className="form-control"  defaultValue={body} onChange={this.onChangeInput} />
                        
                        </div>

                       
                       
                        <button htmlType="submit" className="btn btn-primary ">Update</button>
                       
                        
                    

                      </form>
                 

                   
                
            </div>
            
        )
    }
}
 const mapStateToProps = (state) => {
            return {
                 post: state.post.post
            }
        }
export default connect(mapStateToProps,{ getPost,updatePost})(EditPost);
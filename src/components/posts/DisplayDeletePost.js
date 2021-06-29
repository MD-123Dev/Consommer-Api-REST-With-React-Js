import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getPosts} from '../../store/actions/postsActions'
import {deletePosts} from '../../store/actions/postsActions'
import './dipslay.css'
import AddPost from './AddPost'
import { Link } from 'react-router-dom'



class DisplayDeletePost extends Component {
  
    state = {
           ShowToggle:null,
           x:false,
           title:'',
           body:'',
           display:false
       
    };

     componentDidMount(){
        this.props.getPosts();//**called actions for get data  */
     }

  
 
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
   

     onDeleteClick = id =>{
       //**  delete with id */
        this.props.deletePosts(id);
    };

   

    
    

     


    render() {
        const { posts , title , body } = this.props;
         
        return (
            
            <div>
             
              <AddPost />
             
                <div className="form-group">
                  <label for=""></label>
                  <input htmltype="search" name="" id="" class="form-control" placeholder="Search" aria-describedby="helpId" />
                </div>
                <div>

                

                </div>
                  <div>
               
               <table className="table">
                   <thead>
                       <tr>
                          
                           <th>Title post </th>
                           <th>Body  </th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       { 
                         posts.map(post => (
                             
                         <tr>
                          
                           <td>{ post.title }</td>
                           <td>{ post.body }</td>
                           <td >
                              
                              <Link to={`/edit/${post.id}`}><span><i className="fa fa-pencil"></i></span></Link>
                              <span><i className="fa fa-trash" onClick={this.onDeleteClick.bind(this,post.id)}></i></span>
                             
                            </td>
                       </tr>
                       ))    
                    }
                   </tbody>
               </table>
                
            </div>
        
            </div>
        )
    }
}
 const mapStateToProps = (state) => {
            return {
                 posts: state.post.posts,
            }
 }
export default connect(mapStateToProps,{deletePosts,getPosts})(DisplayDeletePost) ;
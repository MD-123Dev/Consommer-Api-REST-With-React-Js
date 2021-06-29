import axios from 'axios';

//**lists Posts */
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('http://jsonplaceholder.typicode.com/posts/?_limit=8');

         dispatch ({
            type:'GET_POSTS',
            payload: res.data

        });
    }
    catch(error){
        alert(error);
    }
   

    
   
}

export const getPost = (id) => async dispatch => {

    try{
       const res = await axios.get('http://jsonplaceholder.typicode.com/posts/'+id);

    
        dispatch ({
            type:'GET_POST',
            payload: res.data

        });
    }
    catch(error){
       alert(error);
    }
    
}

export const addPosts = (post) => async dispatch => {
    try{
       const res = await axios.post('http://jsonplaceholder.typicode.com/posts',post);
        dispatch({
            type:'ADD_POSTS',
            payload: res.data
        })
    }
    catch(error){
      alert(error);
    }
    
}

export const deletePosts = (id) => async dispatch =>  {
    try{
       
          const res = await axios.delete('https://jsonplaceholder.typicode.com/posts/${id}');
         
        dispatch({
            type:'DELETE_POST',
            payload: id
        })
    }
    catch(error){
      alert(error);
    }
   
}

export const updatePost = (post) => async dispatch => {

    try{
       
         const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);

    
        dispatch ({
            type:'UPDATE_POST',
            payload: res.data

        });
    }
    catch(error){
       alert(error)
    }
   
}



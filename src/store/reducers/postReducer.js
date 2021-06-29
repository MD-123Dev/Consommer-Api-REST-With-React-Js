
const  initialState = {

    posts:[],
    x:true,
    post:{},
    ShowToggle:null,
};

export default (state = initialState, action) => {
     switch(action.type){
         case 'GET_POSTS':
             return {
                 ...state.posts, 
                 posts: action.payload
             }
         case 'ADD_POSTS':
             return {
                 ...state.posts,
                 posts: [action.payload, ...state.posts] 
             }
         case 'DELETE_POST':
             return {
                 ...state,
                 posts: state.posts.filter(post => post.id !== action.payload)
             }
              case 'GET_POST':
             return {
                 ...state, 
                 post: action.payload
             }
                case 'UPDATE_POST':
             return {
                 ...state, 
                 posts: state.posts.map(post => post.id === action.payload.id ? (post = action.payload) : post)
             }
           
         default: {
             return state;
         }
     }
}



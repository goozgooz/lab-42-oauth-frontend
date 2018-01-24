export default(state=false, {type,paload}) => {
    switch(type){
        case "LOGIN":
            return true;
            
        case "LOGOUT":
            return false;
        
        default:
            return state;
    }
}
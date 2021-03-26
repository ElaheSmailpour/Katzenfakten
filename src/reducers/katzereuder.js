

const initialState={
    fakt:"Ich weiss nicht über katzen!",
    grund:"",
    fehler:false
}

const katzereuder=(state=initialState,action)=>{
    switch(action.type){
        case "FAKT_GELIFERT":
            return({...state,fakt:action.payload,fehler:false,grund:"gibt es nicht!"})
      case "FEHLER":
          return({...state,fakt:"",grund:action.payload,fehler:true})
            default:
           return state;

    }
}

export default katzereuder
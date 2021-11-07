
const reminders = (state, action)=>{
    let reminder = null;
    switch(action.type){
        case "ADD_REMINDER":
            reminder = [...state]
            console.log('in reducer', reminder)
            return reminder;
        default: return state;        
    }
}

export default reminders;
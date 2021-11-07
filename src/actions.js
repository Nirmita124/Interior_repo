

export const addReminder=(text)=>{
    const action= {
        type: "ADD_REMINDER",
        payload: text
      };
      console.log('action stored', action);
      return action;
    }
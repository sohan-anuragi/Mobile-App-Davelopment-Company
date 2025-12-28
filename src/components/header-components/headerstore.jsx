import { createContext, useReducer } from "react";

export const headerDataProvider = createContext();

const toggle2Reducer = (state,action) =>{
      let Name = state 
      if(action.type === 'HOVER-ENTER'){
        Name = action.payload.value
        return Name
      }
      else if(action.type === 'HOVER-LEAVE'){
        Name = ''
        return Name
      }
      return state
}

export default function DropBoxDataProvider({children}){

    const [toggle2 , dispatchToggle2] =  useReducer(toggle2Reducer,"")

    const hoverEnter = (heading) => {
          dispatchToggle2(
            {
                type:'HOVER-ENTER',
                payload:{
                    value:heading
                }
            }
          )
    }

    const hoverLeave = () => {
          dispatchToggle2(
            {
                type:'HOVER-LEAVE',
            }
          )
    }


     return <headerDataProvider.Provider value={{hoverEnter,hoverLeave,toggle2}}>
     {children}
     </headerDataProvider.Provider>

}


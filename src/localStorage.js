export const loadState = () =>{
  try{
    const serializedState=localStorage.getItem('state')
    if(serializedState===null){
      return undefined
    }
    return JSON.parse(serializedState)
  }catch(err){
    return undefined
    console.log('Error occured while loadState'+err);
  }
}

export const saveState = (state) =>{
  try{
    const serializedState=JSON.stringify(state)
    localStorage.setItem('state',serializedState)
  }catch(err){
    console.log('Error occured while saveState'+err);
  }
}

// The code is correct and all. It is commented out because it is included in both Navbar.js
// export const removeState = () =>{
//   try{
//     localStorage.removeItem("state")
//   }catch(err){
//     console.log("Error occured while removeState"+err);
//   }
// }
//

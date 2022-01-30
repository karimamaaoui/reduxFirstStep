// Action
const increment =(num)=>{
    return {
      type:"Inc",
      payload:num ? num:1,
    }
  }

  const decrement =(num)=>{
    return {
      type:"Dec",
      payload:num ? num:1,
    }
  }

  const login =()=>{
    return {
      type : "LOGIN"
    }
    
  }

  const logout =()=>{
    return {
      type : "LOGOUT"
    }
    
  }


  export  {increment,decrement,login,logout}
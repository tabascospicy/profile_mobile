import React,{useState} from "react";
import "./App.scss";
import StateProvider from "./context";
import ProfileMobile from "./ProfileMobile/Content";

function App() {
  const [selected,setSelected] = useState(false);
  const [key,setKey] = useState(0);
   const toggleSelected =(value) =>{
    setSelected(value)
   }
   const toggleKey =(value) =>{
     setKey(value);
   }
    return (
        <StateProvider.Provider value={{selected,key,toggleSelected,toggleKey}}>
            <ProfileMobile />
        </StateProvider.Provider>
    );
}

export default App;

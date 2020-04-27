import React,{useState} from "react";
import "./index.scss";
import Avatar from "./avatar/avatar";
import Option from "./Option/option";

function ProfileMobile() {
    const [selected,setSelected] = useState(false);
    return (
        <div className="content flex-center">
            <Avatar />
            <div className={"white-container"}></div>
            <div className="main">
                <div className="infocard"></div>
                <div className="box">
                    <div className="loginState"></div>
                    <Option keey={1} selected={selected} setSelected={setSelected}/>
                    <Option keey={2} selected={selected} setSelected={setSelected}/>
                    <Option keey={3} selected={selected} setSelected={setSelected}/>
                    <Option keey={4} selected={selected} setSelected={setSelected} />
                </div>
            </div>
        </div>
    );
}

export default ProfileMobile;

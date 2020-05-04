import React,{useState} from "react";
import "./index.scss";
import Avatar from "./avatar/avatar";
import Option from "./Option/option";
import InfoCard from "./infoCard/infoCard";
import List from "./List/List";
function ProfileMobile(props) {
    const [selected,setSelected] = useState(false);
    return (
        <div className="content flex-center">
            <Avatar />
            <div className={"white-container"}></div>
            <div className="main">
                <InfoCard/>
                <div className="box">
                    <div className="loginState"></div>
                    <Option keey={1} selected={selected} setSelected={setSelected}><List Title="Transactions History"/></Option>
                    <Option keey={2} selected={selected} setSelected={setSelected}><List Title="Reports"/></Option>
                    <Option keey={3} selected={selected} setSelected={setSelected}><List Title="Credits"/></Option>
                    <Option keey={4} selected={selected} setSelected={setSelected} ><List Title="Contact"/></Option>
                </div>
            </div>
        </div>
    );
}

export default ProfileMobile;

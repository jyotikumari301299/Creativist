import classes from "./Header.module.css";
import tree from "../../assets/tree.png";
import { useState } from "react";
import Donation from "../Donation/DonateForm";
const Header = () => {
const[donate, setDonate] = useState(false);
const donationHandler = () => {
    setDonate(true);
}
    return <div className="header">
            <div className={classes.first_section}>
                <div className={classes.logo}>
                    <img  src={tree} alt="donation"/>
                </div>
                <div className={classes.text} onClick={donationHandler}>
                <h3>Donate tree's </h3>
                <br></br>
                <p>By Clicking here.</p>
                </div>
            </div>
            {donate?<Donation />:""}
    </div>;
}


export default Header;
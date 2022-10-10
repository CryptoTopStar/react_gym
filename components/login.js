const Login = (props) =>{
    return(
        <div className="flex flex-col login">
            <p className="login_title">BECOME A MEMBER</p>
            <p className="login_content" >When you sign up, you also purchase and subscribe to the plan you choose</p>
            <div className="flex flex-row">
                <input className="firstname"  placeholder="First Name"/>
                <input className="lastname" placeholder="Last Name"/>
            </div>
            <input className="email" type="email" placeholder="Email"/>
            <input className="phone" type="text" placeholder="Phone number"/>
            <div className="flex flex-row items-center justify-between div_birth">
                <input type="text" className="outline-none calender" placeholder=" 29 - April - 2001"/>  
                <img src='./calender.svg'/>
            </div>
            <div  className="flex flex-row items-center justify-between password">
                <input type="text" className="outline-none calender" placeholder="Password"/>  
                <img src='./eye.svg'/>
            </div>
            <ul className="flex flex-col password_ul" >
                <li className="flex flex-row items-center" >
                    <img src='./dot.svg' />
                    <p >Uppercase letters</p>
                </li>
                <li className="flex flex-row items-center" >
                    <img src='./check.svg' />
                    <p >Lower letters</p>
                </li>
                <li className="flex flex-row items-center" >
                    <img src='./check.svg' />
                    <p >Numbers</p>
                </li>
            </ul>
            <input type="password" className="password_confirmation"  placeholder="Repeat Password"/>
            <div  className="flex flex-row robot_div">
                <div className="flex flex-row items-center">
                <div className="checkbox" ></div>
                <p >I am not a robot.</p>
                </div>
                <img src='./capcha.svg' />
            </div>
            <button className="sign_button">
                SIGN UP FOR 35$
            </button>
            <button onClick={props.modalOpen} className="select_button" >
                SELECT OTHER PLAN
            </button>
            <button  className="signup_button" >
                I have an Account
            </button>
        </div>
    )
    }
export default Login
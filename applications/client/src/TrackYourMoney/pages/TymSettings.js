import { React, useState } from 'react'
import SideBarComponent from '../components/SideBarComponent';
import { RouteBlocker } from '../helper_files/RouteBlocker';


const EmailOptions = ({
    checked,
    label,
    id,
    disabled,
    ariaInvalid,
    ariaLabelledby,
    onChange,
}) => {
    return (
        <div className='checkboxes'>
            <label htmlFor={id} className="ToggleSwitch ToggleSwitch_label">
                <span className="ToggleSwitch_switch">
                    <input
                        type="checkbox"
                        checked={checked}
                        id={id}
                        className="ToggleSwitch_checkbox"
                        disabled={disabled}
                        onChange={onChange}
                        aria-invalid={ariaInvalid}
                        aria-labelledby={ariaLabelledby}
                    />
                    <span className="ToggleSwitch_slider" />
                </span>
                <span> </span>
                {label}

            </label>
        </div>
    );
};



function TymSettings() {

    const [option1, setOption1] = useState(localStorage.getItem('one') === 'true');
    const [option2, setOption2] = useState(localStorage.getItem('two') === 'true');
    const [option3, setOption3] = useState(localStorage.getItem('three') === 'true');
    const [option4, setOption4] = useState(localStorage.getItem('four') === 'true');

    RouteBlocker();

    return (
        <div className="main-container-home">
            <section className='title'>
                <div><SideBarComponent /></div>
                <h2>Settings</h2>
            </section>

            <section className="settings-type">
                <div className="notification">
                    <h2>Notifications </h2>
                </div>
            </section>

            <section className="settings-menu">

                <EmailOptions checked={option1}
                    id='one'
                    label='Budget Reminders via email'
                    onChange={
                        (e) => {
                            localStorage.setItem('one', `${e.target.checked}`);
                            setOption1(e.target.checked);
                        }
                    } />
                <EmailOptions checked={option2}
                    id='two'
                    label='Savings tips via email'
                    onChange={
                        (e) => {
                            localStorage.setItem('two', `${e.target.checked}`);
                            setOption2(e.target.checked);
                        }
                    } />

                <EmailOptions checked={option3}
                    id='two'
                    label='Goal setting ideas via email'
                    onChange={
                        (e) => {
                            localStorage.setItem('three', `${e.target.checked}`);
                            setOption3(e.target.checked);
                        }
                    } />
                <EmailOptions checked={option4}
                    id='two'
                    label='Account updates via email'
                    onChange={
                        (e) => {
                            localStorage.setItem('four', `${e.target.checked}`);
                            setOption4(e.target.checked);
                        }
                    } />

            </section >

            <section className="save-btn" >
                <button className="profile-btn" >Save</button>
            </section>

        </div >
    )
}

export default TymSettings
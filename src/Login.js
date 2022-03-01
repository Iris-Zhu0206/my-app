
import React from 'react';
import './App.css';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckboxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonIcon from '@material-ui/icons/Person';

const Login=()=> {
    return(
        <div>
            <div classNmae="icon">
                <div className="icon_class">
                    <PersonIcon fontSize ="large"/>
                </div>
                <div className="text">Log in</div>
            </div>

            

            <div className="row m-2">
            <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullWidth/>
            <TextField id="password" className="p-2" type="text" variant="outlined" label="Enter Password" fullWidth/>
            <FormControlLabel
                    control={
                    <Checkbox
                        icon={<CheckboxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small"/>}
                        name="checkedI"
                    />
                    }
                    label ="Remember me"
                />
            <Button variant='contained' color="primary">Log in</Button>
            </div>
            <Divider variant="middle"/>
            <p className="text-center">
                <Link to="signup" className="text-black-50">
                    <h5>Create Account</h5>
                </Link>
            </p>
        </div>
    )
}

export default Login
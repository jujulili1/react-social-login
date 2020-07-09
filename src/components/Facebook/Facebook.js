import React, { useState } from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";
import { getFacebook } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button'


export default function Facebook() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const handleResponse = (data) => {
        dispatch(getFacebook(data, history));
    };

    const handleError = (error) => {
        console.log(errors);

        setErrors({ error });
    };

    return (
        <FacebookProvider appId="2657675157887373">
            <Login
                scope="email"
                onCompleted={handleResponse}
                onError={handleError}
            >
                {({ loading, handleClick, error, data }) => (
                    <Button variant="contained" color="primary" onClick={handleClick}>
                        {loading ? (
                            <span>Loading...</span>
                        ) : (
                            "Facebook Login"
                        )}
                    </Button>
                )}
            </Login>
        </FacebookProvider>
    );
}
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { getGoogle } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Google() {
    const history = useHistory();
    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        dispatch(getGoogle(response, history));
    };

    return (
        <GoogleLogin
            clientId="107919664903-r30qq95qbv77vct7uvlufradia3fi3ql.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
    );
}
import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { switchTheme } from "../redux/reducers/theme";

function ChangeThemeButton() {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(switchTheme())}>Change Theme</Button>
    );
}
  
export default ChangeThemeButton;
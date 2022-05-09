import React from 'react';
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// import Email from "@material-ui/icons/Email";

import classNames from "classnames";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import styles from "../assets/jss/styling-kit/components/customInputStyle";
// import { InputAdornment } from '@material-ui/core';
// @material-ui/icons
// core components

// const stylesLabel = {
//   label: {
//     cursor: "pointer",
//     paddingLeft: "0",
//     color: "rgba(0, 0, 0, 0.26)",
//     fontSize: "14px",
//     lineHeight: "0.728571429",
//     fontWeight: "400",
//     display: "inline-flex"
//   },
// };

const useStyles = makeStyles(styles);

export default function DateTimePicker(props){
  // const { dateFormat, timeFormat } = props;
  const {
    dateFormat,
    timeFormat,
    formControlProps,
    labelText,
    id,
    // labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    fullWidth,
    halfFullWidth,
    quarterFullWidth
  } = props;
  const classes = useStyles();
  // const labelClasses = classNames({
  //   [" " + classes.labelRootError]: error,
  //   [" " + classes.labelRootSuccess]: success && !error,
  // });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
    [classes.fullWidth]: fullWidth,
    [classes.halfFullWidth]: halfFullWidth,
    [classes.quarterFullWidth]: quarterFullWidth,

  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <div>
      {/* <InputLabel className={classes.label}>
        Datetime Picker
      </InputLabel> */}
      <br />
      <FormControl {...formControlProps} className={formControlClasses} fullWidth>
        
        <Datetime
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        
        type="date"
        formControlProps={{
          fullWidth: true,
        }}
        id={id}
        {...inputProps}
          dateFormat={dateFormat}
          timeFormat={timeFormat}
          
          inputProps={{ placeholder: labelText }}
        />
      </FormControl>
    </div>
  );
}
import React from "react";
import purple from '@material-ui/core/colors/purple';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { deepPurple } from "@material-ui/core/colors";
const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: "none"
    }
});
function OutlinedButtonsSecondary(props) {
    const { classes } = props;
    return (
        <Button variant="outlined" color="secondary" className={classes.button + " " + props.className} onClick={props.onClick}>
            {props.text}
        </Button>
    );
}
function OutlinedButtonsDisabled(props) {
    const { classes } = props;
    return (

        <Button variant="outlined" disabled className={classes.button + " " + props.className} onClick={props.onClick}>
            {props.text}
        </Button>

    );
}
function OutlinedButtonsLink(props) {
    const { classes } = props;
    return (

        <Button
            variant="outlined"
            href={props.onClick}
            target="_blank"
            className={classes.button + " " + props.className}
            color="inherit"
        >
            {props.text}
        </Button >

    );
}
function OutlinedButtonsUpload(props) {
    const { classes } = props;
    return (
        <div>
            <input
                accept="image/*"
                className={classes.input}
                id="outlined-button-file"
                multiple
                type="file"
            />
            <label htmlFor="outlined-button-file">
                <Button variant="outlined" component="span" className={classes.button + " " + props.className} onClick={props.onClick}>
                    {props.text}
                </Button>
            </label>
        </div>
    );
}
function OutlinedButtonsInherit(props) {
    const { classes } = props;
    return (

        <Button variant="outlined" color="inherit" className={classes.button + " " + props.className} onClick={props.onClick}>
            {props.text}
        </Button>

    );
}
function OutlinedButtonsPrimary(props) {
    const { classes } = props;
    return (

        <Button variant="outlined" color="primary" className={classes.button + " " + props.className} onClick={props.onClick}>
            {props.text}
        </Button >

    );
}
// OutlinedButtons.propTypes = {
//     classes: PropTypes.object.isRequired
// };

export let OutlinedSecondary = withStyles(styles)(OutlinedButtonsSecondary);
export let OutlinedDisabled = withStyles(styles)(OutlinedButtonsDisabled);
export let OutlinedLink = withStyles(styles)(OutlinedButtonsLink);
export let OutlinedUpload = withStyles(styles)(OutlinedButtonsUpload);
export let OutlinedInherit = withStyles(styles)(OutlinedButtonsInherit);
export let OutlinedPrimary = withStyles(styles)(OutlinedButtonsPrimary);



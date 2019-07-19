import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {CardHeader} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        height: "28%",
        margin: "6%",
        marginRight: "20%"
    },
    media: {
        maxWidth: "100%",
        maxHeight: "100%"
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <img className={classes.media}
                 alt={"random"}
                 src={props.image}
            />
            <CardHeader title={props.header}/>
        </Card>
    );
}
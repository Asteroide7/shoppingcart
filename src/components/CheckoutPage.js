import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {Tipography} from '@mui/material/';
import CheckoutCard from './CheckoutCard';
import Total from './Total';
import { useStateValue } from '../StateProvider';
// import Product from './Product';

const useStyles = styled ((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    }
}));

// CheckoutPage renderiza los productos en stock
const CheckoutPage = () => {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();


    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        {/* A CheckoutCard enviamos los productos que elige el usuario para realizar la compra */}
                        <CheckoutCard key={item.id} product={item} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing = {3}>
                <Grid item xs ={12}>
                    <Tipography align="center" gutterBottom variant="h4">
                        Shopping Cart
                    </Tipography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Tipography align="center" gutterBottom variant="h4">
                        <Total/>
                    </Tipography>
                </Grid>
            </Grid>
        </div>
    );
}
export default CheckoutPage;
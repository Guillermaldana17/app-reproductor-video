import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeComponents from '../Components/HomeComponents';
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux';
import { getItems } from '../Services/Actions/MovieActions'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Home = ({movieReducer:{objectMovie}}) => {
    const classes = useStyles();
    return( 
    <div className={classes.root}>
    <Container>
        <Grid container spacing={3}>
            <HomeComponents GetItems={getItems} ListMovie={objectMovie}/>
        </Grid> 
    </Container>  
    </div>     
    )
}
const mapStateToProps = state => ({
    movieReducer: state.movieReducer,

});
export default connect(mapStateToProps, {
    getItems,
})(Home)

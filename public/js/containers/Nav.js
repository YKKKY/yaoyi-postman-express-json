import {connect} from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = (state) => {
    return {
        viewFlag: state.app.viewFlag
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeView: (text) => {
            dispatch({type: 'CHANGE_VIEW',text});
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
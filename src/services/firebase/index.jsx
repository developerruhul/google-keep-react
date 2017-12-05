import React from 'react';
import { connect } from "react-redux";

class IDBFire extends React.Component {
    render() { return null }

    componentWillReceiveProps() {
        console.log(this.props.notes);
    }
}



const stateToProps = ({ action, category, notes }) => ({ action, category, notes });
export default connect(stateToProps)(IDBFire);

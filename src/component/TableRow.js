import React, { Component } from 'react';
import { API_CALL_GET_BUG_LIST, BUG_LIST_RECEIVED } from "../constants";
import { connect } from 'react-redux';

import StatusTag from './StatusTag';
import UserTag from './UserTag';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.props.getBugList();
    }

    render() {
        return (
            this.props.bugList && this.props.bugList.map((item, index) => (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td><StatusTag status={item.state} /></td>
                    <td>{item.number}</td>
                    <td>{item.comments}</td>
                    <td>{item.updated_at}</td>
                    <td><UserTag user={item.user} /></td>
                </tr>
            )) || (<tr><td className="text-center" colSpan="6"> <strong>Fetching Data ... </strong></td></tr>)
        )
    }
}

const mapStateToProps = state => {
    return {
        bugList: state.bugList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBugList: () =>
            dispatch({
                type: API_CALL_GET_BUG_LIST
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
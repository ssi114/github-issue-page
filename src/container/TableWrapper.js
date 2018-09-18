import React, { Component } from 'react';
import TableRow from '../component/TableRow';

class TableWrapper extends Component {
    render() {
        return (
            <table className="grid-container">
                <thead>
                    <tr>
                        <th >Title</th>
                        <th width="150">Status</th>
                        <th width="150">Number/#</th>
                        <th width="150">Number of Comments</th>
                        <th width="150">Last updated time</th>
                        <th width="200">Created By</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow />
                </tbody>
            </table>
        )
    }
}

export default TableWrapper;
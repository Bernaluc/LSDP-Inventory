import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ViewManuals() {
    return (
        <div>
            <h1>View All Manuals</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>WT01 Manual</td>
                        <td>https://WT01-manual.test.com</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}


export default ViewManuals;
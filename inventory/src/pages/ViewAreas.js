import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ViewAreas() {
    return (
        <div>
            <h1>View All Areas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Equipment</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PUM4350</td>
                        <td>WT01</td>
                        <td>Polished Water Silo 1 Discharge Pump</td>
                    </tr>
                </tbody>
            </Table>
            <Button href='/add-component' variant='secondary' size='lg'>
                Add New Component
            </Button>

        </div>
    )
}


export default ViewAreas;
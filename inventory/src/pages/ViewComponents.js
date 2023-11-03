import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ViewComponents() {
    return (
        <div className="view-page">
            <h1>Components</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Component ID</th>
                        <th>Component Description</th>
                        <th>Part ID</th>
                        <th>Component Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PUM4350</td>
                        <td>Water Silo 1 Discharge Pump 1</td>
                        <td>LKH45</td>
                        <td>(Component Notes)</td>
                        <td>
                            <Button>
                                Edit
                            </Button>
                        </td>
                        <td>
                            <Button>
                                Delete
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>PUM4355</td>
                        <td>Water Silo 1 Discharge Pump 2</td>
                        <td>LKH45</td>
                        <td>(Component Notes)</td>
                        <td>
                            <Button>
                                Edit
                            </Button>
                        </td>
                        <td>
                            <Button>
                                Delete
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>PUM4355</td>
                        <td>Water Silo 1 Discharge Pump 1</td>
                        <td>LKH45</td>
                        <td>(Component Notes)</td>
                        <td>
                            <Button>
                                Edit
                            </Button>
                        </td>
                        <td>
                            <Button>
                                Delete
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button href='/add-component' variant='secondary' size='lg'>
                Add New Component
            </Button>
        </div>
    )
}

export default ViewComponents;
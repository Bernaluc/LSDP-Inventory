import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ViewWorkers() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Worker Name</th>
                    <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Curbina</td>
                    <td>Carlos Bernal Urbina</td>
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
                    <td>Jramos</td>
                    <td>James Ramos</td>
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
                    <td>Sbejarano</td>
                    <td>Sophia Bejarano</td>
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
            <Button href='/add-worker' variant='secondary' size='lg'>
                Add New Worker
            </Button>
        </div>
    )
}

export default ViewWorkers;
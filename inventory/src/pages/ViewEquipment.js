import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ViewEquipment(){
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Equipment Name</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>WT01</td>
                        <td>Polished Water Silo 1</td>
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
            <Button href='/add-equipment' variant='secondary' size='lg'>
                Add New Equipment
            </Button>
        </div>
    )
    }

export default ViewEquipment;
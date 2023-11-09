import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ViewWorkers() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Manufacturer Name</th>
                    <th>Manufacturer Email</th>
                    <th>Manufacturer Phone</th>
                    <th>Manufacturer Notes</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>ABC Pipes</td>
                    <td>abc@pipes.com</td>
                    <td>+1 (555) 123-4567</td>
                    <td>Specializes in consumer pipes.</td>
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
                    <td>XYZ Screws</td>
                    <td>info@xyzscrews.com</td>
                    <td>+1 (555) 987-6543</td>
                    <td>Known for high-quality screws.</td>
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
                    <td>Tech Innovators Ltd.</td>
                    <td>contact@techinnovators.com</td>
                    <td>+1 (555) 789-0123</td>
                    <td>Focuses on cutting-edge technology products and innovations.</td>
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
                Add New Manufacturer
            </Button>
        </div>
    )
}

export default ViewManufacturers;
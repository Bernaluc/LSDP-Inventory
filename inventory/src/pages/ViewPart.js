import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ViewParts() {
    return (
        <div className="view-page">
            <h1>Parts</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Part Name</th>
                        <th>Part Manufacturer</th>
                        <th>Part Manuals</th>
                        <th>Part Notes</th>
                        <th>Storeroom Number</th>
                        <th>Last Modified</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>LKH45</td>
                        <td>Alfa Laval</td>
                        <td>https://www.alfalaval.com/globalassets/documents/products/fluid-handling/pumps/centrifugal-pumps/lkh/lkh-centrifugal-pump-instruction-manual.pdf</td>
                        <td>Centripetal Pump</td>
                        <td>64584</td>
                        <td>01/02/23</td>
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
                        <td>PT100</td>
                        <td>Texas Instruments</td>
                        <td>https://www.ti.com/europe/downloads/2-%203-%204-Wire%20RTD%20Measurement.pdf</td>
                        <td>PT100 RTD Sanitary Temperature Transmitter</td>
                        <td>5489341</td>
                        <td>11/02/23</td>
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
                        <td>P42</td>
                        <td>Anderson-Negele</td>
                        <td>https://www.anderson-negele.com/us/p/pressure-sensors/p42-pressure-sensor/</td>
                        <td>40 bar / 580 psi Pressure Transmitter</td>
                        <td>1254</td>
                        <td>10/20/23</td>
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
            <Button href='/add-part' variant='secondary' size='lg'>
                Add New Part
            </Button>
        </div>
    )
}

export default ViewParts;
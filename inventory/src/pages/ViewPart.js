import React from "react";

function ViewParts() {
    return (
        <div>
            <table>
                <tr>
                    <th>Part Manufacturer</th>
                    <th>Part Manuals</th>
                    <th>Part Notes</th>
                    <th>Storeroom Number</th>
                    <th>Last Modified</th>
                </tr>
                <tr>
                    <td>(Manufacturer)</td>
                    <td>(Manual)</td>
                    <td>(Notes)</td>
                    <td>(Storeroom Number)</td>
                    <td>(Last Modified)</td>
                </tr>
            </table>
            <button>
                Add New
            </button>
        </div>
    )
}

export default ViewParts;
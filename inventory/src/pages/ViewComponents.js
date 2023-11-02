import React from "react";

function ViewComponents() {
    return (
        <div>
            <table>
                <tr>
                    <th>Component ID</th>
                    <th>Component Description</th>
                    <th>Part ID</th>
                    <th>Last Modified</th>
                    <th>Component Notes</th>
                </tr>
                <tr>
                    <td>(Component ID)</td>
                    <td>(Component Description)</td>
                    <td>(Part ID)</td>
                    <td>(Last Modified)</td>
                    <td>(Component Notes)</td>
                </tr>
            </table>
            <button>
                Add New
            </button>
        </div>
    )
}

export default ViewComponents;
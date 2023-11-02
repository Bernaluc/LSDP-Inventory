import React from "react";

function ViewWorkers() {
    return (
        <div>
            <table>
                <tr>
                    <th>Worker ID</th>
                    <th>Notes</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Modified pump...</td>
                </tr>
            </table>
            <button>
                Add New
            </button>
        </div>
    )
}

export default ViewWorkers;
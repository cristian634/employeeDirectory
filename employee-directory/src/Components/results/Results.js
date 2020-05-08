import React from "react"


function Results(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <div>
                    <li key={result.id} className="list-group-item">
                        first Name: {result.firstname}
                    </li>
                    <li key={result.id} className="list-group-item">
                        Last Name: {result.lastname}
                    </li>
                    <li key={result.id} className="list-group-item">
                        Salary: ${result.salary}
                    </li>
                    <li key={result.id} className="list-group-item">
                        Position: {result.position}
                    </li>
                    <br />
                </div>

            ))}
        </ul>
    );
}

export default Results;
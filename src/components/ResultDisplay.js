import React from 'react';

function ResultDisplay({ result }) {
    return (
        <div className="result">
            <h2>Payroll Result</h2>
            <p><strong>Gross Salary:</strong> {result.grossSalary} €</p>
            <p><strong>Deductions:</strong> {result.deductions} €</p>
            <p><strong>Net Salary:</strong> {result.netSalary} €</p>
        </div>
    );
}

export default ResultDisplay;
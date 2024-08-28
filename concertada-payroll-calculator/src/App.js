import React, { useState } from 'react';
import PayrollForm from './components/PayrollForm';
import ResultDisplay from './components/ResultDisplay';

function App() {
    const [result, setResult] = useState(null);

    const handleCalculation = (data) => {
        fetch('/calculate-salary', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className="container">
            <h1>Concertada Payroll Calculator</h1>
            <PayrollForm onCalculate={handleCalculation} />
            {result && <ResultDisplay result={result} />}
        </div>
    );
}

export default App;
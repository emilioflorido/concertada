const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const salaryTables = {
    primary: 1767.28,
    secondary: 2075.33,
    bachillerato: 2075.33,
    fp: 2075.33,
    trienio: 53.31,
    complementoAutonomico: 654.26
};

app.post('/calculate-salary', (req, res) => {
    const { primaryHours, secondaryHours, bachilleratoHours, fpHours, trienios, irpf } = req.body;

    let grossSalary = (
        primaryHours * (salaryTables.primary / 25) +
        secondaryHours * (salaryTables.secondary / 25) +
        bachilleratoHours * (salaryTables.bachillerato / 25) +
        fpHours * (salaryTables.fp / 25) +
        trienios * salaryTables.trienio
    );

    grossSalary += salaryTables.complementoAutonomico;

    const deductions = grossSalary * (irpf / 100);

    const netSalary = grossSalary - deductions;

    res.json({
        grossSalary: grossSalary.toFixed(2),
        deductions: deductions.toFixed(2),
        netSalary: netSalary.toFixed(2),
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
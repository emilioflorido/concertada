import React, { useState } from 'react';

function PayrollForm({ onCalculate }) {
    const [formData, setFormData] = useState({
        primaryHours: 0,
        secondaryHours: 0,
        bachilleratoHours: 0,
        fpHours: 0,
        trienios: 0,
        irpf: 0,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="primaryHours">Primary Hours</label>
            <input type="number" name="primaryHours" value={formData.primaryHours} onChange={handleChange} />

            <label htmlFor="secondaryHours">Secondary Hours</label>
            <input type="number" name="secondaryHours" value={formData.secondaryHours} onChange={handleChange} />

            <label htmlFor="bachilleratoHours">Bachillerato Hours</label>
            <input type="number" name="bachilleratoHours" value={formData.bachilleratoHours} onChange={handleChange} />

            <label htmlFor="fpHours">FP Hours</label>
            <input type="number" name="fpHours" value={formData.fpHours} onChange={handleChange} />

            <label htmlFor="trienios">Trienios</label>
            <input type="number" name="trienios" value={formData.trienios} onChange={handleChange} />

            <label htmlFor="irpf">IRPF (%)</label>
            <input type="number" name="irpf" value={formData.irpf} onChange={handleChange} />

            <button type="submit">Calculate Payroll</button>
        </form>
    );
}

export default PayrollForm;
// Constants for tax rates, NHIF deductions, and NSSF rates
const TAX_RATES = [
    { lowerLimit: 0, upperLimit: 24000, rate: 10 },
    { lowerLimit: 24001, upperLimit: 32333, rate: 25 },
    { lowerLimit: 32334, upperLimit: 500000, rate: 30 }
];

const NHIF_RATES = [
    { lowerLimit: 0, upperLimit: 5999, deduction: 150 },
    { lowerLimit: 6000, upperLimit: 7999, deduction: 300 },
    { lowerLimit: 8000, upperLimit: 11999, deduction: 400 },
    { lowerLimit: 12000, upperLimit: 14999, deduction: 500 },
    { lowerLimit: 15000, upperLimit: 19999, deduction: 600 },
    { lowerLimit: 20000, upperLimit: 24999, deduction: 750 },
    { lowerLimit: 25000, upperLimit: 29999, deduction: 850 },
    { lowerLimit: 30000, upperLimit: 34999, deduction: 900 }
];

const NSSF_RATE_EMPLOYEE = 6 / 100; // 6% of gross salary for NSSF

// Function to calculate PAYE tax
function calculatePAYE(annualTaxableIncome) {
    let tax = 0;

    for (let i = 0; i < TAX_RATES.length; i++) {
        if (annualTaxableIncome <= 0) {
            break;
        }
        
        let taxableAmount = Math.min(annualTaxableIncome, TAX_RATES[i].upperLimit - TAX_RATES[i].lowerLimit);
        tax = taxableAmount * (TAX_RATES[i].rate / 100);
        
    }

}

// Function to calculate NHIF deductions based on gross salary
function calculateNHIF(grossSalary) {
    for (let i = 0; i < NHIF_RATES.length; i++) {
        if (grossSalary <= NHIF_RATES[i].upperLimit) {
            return NHIF_RATES[i].deduction;
        }
    }
    return 1700; // Maximum deduction if gross salary is very high
}

// Function to calculate NSSF deductions based on gross salary
function calculateNSSF(grossSalary) {
    const nssfDeduction = Math.min(grossSalary * NSSF_RATE_EMPLOYEE, 1800); // NSSF maximum is 1800
    return nssfDeduction;
}
// Function to calculate net salary given basic salary and benefits.
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const annualGrossSalary = grossSalary * 12; //  annual gross= monthly gross salary * 12(no. of months in a year)
    const paye = calculatePAYE(annualGrossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - paye - nhif - nssf;

    return {
        'Gross Salary': grossSalary,
        'PAYE': paye,
        'NHIF': nhif,
        'NSSF': nssf,
        'Net Salary': netSalary
    };
}

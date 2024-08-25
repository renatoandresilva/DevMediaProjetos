import {tables, option} from "./data.js";
import dataIn from 'readline-sync';

// Functions
function showOption(option) {
  console.log('\nEscolha uma das alternativas:\n');
 
  for (const prop in option) {
    console.log(`${prop} - ${option[prop]}`)
  }
  console.log('\n');
}

function calcInceaseSalary(salary1, salary2) {

  const result = ((salary1 - salary2)/salary2) * 100;
  
  return `${result.toFixed(2)}`;
}

//Display options
showOption(option);

const chosenOption = dataIn.question('Digite o número da sua opcção: ');

(chosenOption > 0 && chosenOption < 4) && console.info(`\nOpção ${chosenOption}\n`);

const salaries =  tables.salaries;
const IPCAs =  tables.IPCAs;

switch (chosenOption) {
  case '1':
    for (const salary of salaries) {
      const year = `${'Ano: '.padEnd(30, '.')}${salary.ano}`;
      const salaryValue = `${'Salário mínimo: '.padEnd(30, '.')}R$ ${salary.salario.toFixed(2).replace('.',',')}\n`;

      console.log(year);
      console.log(salaryValue);
    }
    break;
  case '2':
    for (const ipca of IPCAs) {
      const year = `${'Ano: '.padEnd(30, '.')}${ipca.ano}`;
      const ipcaValue = `${'Inflação IPCA: '.padEnd(30, '.')}${ipca.IPCA.toFixed(2).replace('.',',')}%\n`;

      console.log(year);
      console.log(ipcaValue);
    }
    break;
  case '3': 
    const salaryXipca = {};
    
    salaries.forEach((salary, i,salaries) => {
      
      salaryXipca.year = `${'Ano: '.padEnd(30,'.')}${salary.ano}`;
      salaryXipca.salary = `${'Salário mínimo: '.padEnd(30,'.')}R$ ${salary.salario.toFixed(2)}`;
      salaryXipca.salaryIncrease = (i == 0)? `${'Crescimento Salarial: '.padEnd(30, '.')} -` :  `${'Crescimento Salarial: '.padEnd(30, '.')} ${(calcInceaseSalary(salary.salario, salaries[i-1].salario))}%` ; 
      salaryXipca.ipca = `${'Inflação IPCA'.padEnd(30,'.')}${IPCAs[i].IPCA.toFixed(2)}%`;
      
    
      console.log(salaryXipca.year);
      console.log(salaryXipca.salary);
      console.log(salaryXipca.salaryIncrease);
      console.log(salaryXipca.ipca);
    
      console.log('\n')
    });

  break;
  
  break
  default: 
    console.log('Opção Inválida');
    break;
}




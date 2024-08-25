Requisitos:

- O usuário da aplicação deve escolher uma dentre três opções:
    1-Listar o histórico do salário mínimo
    2-Listar o histórico da taxa IPCA (inflação)
    3-Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)
- Ao escolher a opção 1 a aplicação deve acessar e listar o histórico do salário mínimo entre 2010 e 2020. Os dados necessários devem estar no código da aplicação.
- Ao escolher a opção 2 a aplicação deve acessar e listar o histórico da inflação entre 2010 e 2020. Os dados da inflação também devem estar no código da aplicação.
- Ao escolher a opção 3 a aplicação deve listar o histórico de 2010 a 2020 do salário mínimo e da inflação. Além disso, na opção 3 deve ser calculado o percentual de crescimento do salário mínimo.
- O percentual de crescimento é calculado com base na diferença entre o salário do ano e do ano anterior, dessa forma, o percentual de crescimento só deve ser apresentado a partir de 2011.

Cálculo do percentual de crescimento:
  * diferenca = salarioAtual - SalarioAnterior;
  * crescimentoSalarial = (diferenca / salarioAnterior) * 100;

- Exemplo prático considerando que:

salário de 2010 = R$ 510
Salário de 2011 = R$ 545

diferenca = 545 - 510;
crescimentoSalarial = (diferenca / 510) * 100;
crescimentoSalarial = 6.86%;
O valor da inflação (IPCA) já é dado em porcentagem, portanto, não precisa ser calculado

- Os dados devem ser formatados com o seguinte padrão:
    * Valores monetários devem ser precedidos por R$
    * Valores monetários devem ter duas casas decimais, ainda que o valor dos decimais seja 0. Ex.: R$ 599,00
    * Valores percentuais devem ter o símbolo % após os números
    * O separador decimal utilizado deve ser a vírgula (,) e não o ponto (.)

- A aplicação deve exibir o resultado na tela e encerrar o processamento, sendo necessário executá-la novamente para escolher uma nova opção.

Nas Tabelas 1 e 2 você pode conferir as tabelas contendo os dados dos salários mínimos e da inflação entre 2010 e 2020 para que você possa utilizá-los no seu código.

Salário	Ano
R$ 510,00	2010
R$ 545,00	2011
R$ 622,00	2012
R$ 678,00	2013
R$ 724,00	2014
R$ 788,00	2015
R$ 880,00	2016
R$ 937,00	2017
R$ 954,00	2018
R$ 998,00	2019
R$ 1045,00	2020
Tabela 1. Salário Mínimo 2010 - 2020

Inflação (IPCA)	Ano
5,91%	2010
6,50%	2011
5,84%	2012
5,91%	2013
6,41%	2014
10,67% 2015
6,29%	2016
2,95%	2017
3,75%	2018
4,31%	2019
4,52%	2020

Tabela 2. Inflação (IPCA) 2010 - 2020
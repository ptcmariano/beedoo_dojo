import { EntradaBanco } from './EntradaBanco'

describe('Entrada de bancos', () => {
  test('verifica se data é válida', () => {
    const date = "2020-05-05 16:17:10";
    const entradaBanco = new EntradaBanco();

    const response = entradaBanco.register(date);
    expect(response).toEqual(date);

  });


  test('Retornar erro se data for invalido', () => {
    const date = "aa-05-05 aa:17:10";
    const entradaBanco = new EntradaBanco();
    expect(() => {entradaBanco.register(date)}).toThrow()
  });

  test('Retornar false se formato da data for diferente de [YYYY-mm-dd H:i:s]', () => {
    const date = "12-05-05 05:30:33";
    const entradaBanco = new EntradaBanco();
    const result = entradaBanco.checkFormat(date);
    expect(result).toBe(false);
  });

  test('Retorna erro se horário de funcionamento fora do limite 10:00:00 ~ 16:00:00', () => {
    const date = "2021-12-12 05:30:33";
    const entradaBanco = new EntradaBanco();
    expect(() => {entradaBanco.register(date)}).toThrow("Not in working hours")
  })

  test('', () => {
    
  })

})



  

// Cada registro no arquivo de log possui o seguinte formato:
// [YYYY-mm-dd H:i:s] - Abertura da Porta OK
// O gerente do banco precisa saber quantas pessoas entraram no banco
// no horário de expediente, para isso ele solicitou que você 
// faça um programa que verifique se o registro de entrada é válido 
// e se a hora se encontra dentro do intervalo de funcionamento do banco, 
// das 10:00:00 até as 16:00:00.
//  jest.spyOn(entradaBanco, 'register').mockImplementationOnce(() => { throw new Error() })
// refector regex [0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]
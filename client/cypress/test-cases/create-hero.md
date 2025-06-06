# Caso de Teste: Criação de herói

**1. Título:** Criar um novo herói com dados válidos

**2. Pré-condição:**  
Usuário deve estar logado como admin

**3. Passo-a-passo dos testes:**  
- Acessar `/heroes`  
- Logar com email e senha válidos  
- Clicar em **Create New Hero**  
- Preencher os campos:
  - Name: `Cypress Hero`
  - Price: `88`
  - Fans: `47`
  - Saves: `99`
  - Powers: `Flying`
- Clicar em **Submit**

**4. Resultado esperado:**  
O herói aparece na lista com os dados informados.

**5. Cenário de teste:**  
Usuário administrador cadastra um herói com sucesso

**6. Ambiente de teste:**  
Windows 10 – Chrome 137 – Wifi

**7. Status:**  
Passou

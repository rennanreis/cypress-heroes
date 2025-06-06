# Caso de Teste: Exclusão de herói

**1. Título:** Deletar herói recém-criado

**2. Pré-condição:**  
Usuário deve estar logado como admin  
Herói deve ter sido criado previamente no mesmo teste (nome único com timestamp)

**3. Passo-a-passo dos testes:**  
- Acessar `/heroes`  
- Logar com credenciais válidas  
- Criar herói com nome dinâmico (ex: `Cypress Hero 172835`)  
- Confirmar que o herói aparece  
- Clicar no botão de lixeira do card do herói  
- Confirmar exclusão no modal clicando em **Yes**

**4. Resultado esperado:**  
O herói não aparece mais na lista

**5. Cenário de teste:**  
Usuário remove um herói criado anteriormente da lista

**6. Ambiente de teste:**  
Windows 10 – Chrome 137 – Wifi

**7. Status:**  
Passou

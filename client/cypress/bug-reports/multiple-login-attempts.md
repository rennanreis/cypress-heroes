# [BUG] Login permite múltiplas tentativas inválidas consecutivas sem restrição

**Descrição:**  
A aplicação exibe uma mensagem de erro quando o usuário insere credenciais inválidas, mas **não há nenhuma limitação para tentativas consecutivas**. Isso permite que bots ou usuários mal-intencionados testem várias combinações de login sem qualquer bloqueio, atraso ou feedback progressivo.

---

## Passos para reproduzir

1. Vá para `/heroes`
2. Clique em **Login**
3. Preencha com dados inválidos (ex: `invalid@user.com` / `wrongpass`)
4. Clique em **Sign in**
5. Repita o clique várias vezes sem alterar os campos

---

## Comportamento atual

- Mensagem de erro exibida corretamente
- Nenhum bloqueio é aplicado
- O botão continua clicável indefinidamente

---

## Comportamento esperado

- Após X tentativas, bloquear o email temporariamente
- Ou adicionar atraso entre tentativas
- Ou desabilitar o botão até alteração nos campos
- Fornecer feedback sobre tentativa excessiva

---

## Ambiente

Windows 10 – Chrome 137 – Wifi

---

## Status

Confirmado
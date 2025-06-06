# Sugestão de Melhoria: Bloquear login após múltiplas tentativas inválidas

**Contexto:**  
Atualmente, a aplicação permite tentativas infinitas de login com credenciais inválidas. Isso pode ser explorado para ataques de força bruta ou tentativa de acesso indevido.

---

## Melhorias sugeridas

- Adicionar limite de tentativas por IP/email
- Aplicar delay progressivo entre tentativas (ex: 1s, 3s, 5s)
- Bloquear temporariamente o botão após X erros (ex: 3 erros → 1 minuto)
- Exibir mensagem clara: *"Muitas tentativas. Tente novamente mais tarde."*
- Registrar tentativas inválidas para auditoria futura

---

## Benefícios

- Melhora a segurança do sistema
- Reduz riscos de ataque
- Gera uma experiência de uso mais confiável

---

## Prioridade

Alta (segurança)
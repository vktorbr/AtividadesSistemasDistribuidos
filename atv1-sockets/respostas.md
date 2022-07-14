# Perguntas para discussão

## Quais as principais dificuldades?

Envio dos dados entre os demais clientes.

## Quais as principais diferenças entre a implementação da questão 1 e da questão 2?

A necessidade de username para participar do chat.

## Como gerenciar as conexões entre clientes na questão 2?

Como um cliente só pode entar no chat se falar um nome, uma promise é utilizada esperando o username ser informado para só entao ser criado um socket para o cliente poder entrar.

## Como identificar as mensagens e os remetentes para seguir a formatação do exemplo?

Enviar o remetente da mensagem junto com a mensagem para o servidor que irá enviar para os demais clientes

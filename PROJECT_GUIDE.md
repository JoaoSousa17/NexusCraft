# Guia de Conteúdo para Projetos

Este documento define exatamente o que é necessário para publicar um projeto
no site da NexusCraft através do painel de administração (`/admin/projetos`).
Para cada campo são indicadas as dimensões recomendadas, extensão mínima e
máxima de texto, e o que cada conteúdo deve transmitir.

---

## 1. Imagens

Cada projeto tem três fotografias independentes. Todas devem ser em formato
**PNG, JPG ou WebP**, com fundo preferencialmente escuro ou neutro para
manter a coerência com a identidade visual da NexusCraft (preto, cinza,
vermelho).

---

### 1.1 Foto Principal (`main_image`)

| Campo            | Valor                                    |
| ---------------- | ---------------------------------------- |
| **Proporção**    | 16 : 9                                   |
| **Resolução**    | mínimo 1280 × 720 px, ideal 1920 × 1080 |
| **Peso máximo**  | 2 MB                                     |
| **Onde aparece** | Página de listagem de projetos e topo da página do projeto |

**O que mostrar:** o produto em uso — uma captura de ecrã limpa da interface,
um mockup em dispositivo, ou uma composição que transmita o que o projeto faz
de forma imediata. Evitar texto sobreposto, logos ou elementos promocionais.
A imagem deve "falar por si".

---

### 1.2 Foto Logo (`logo_image`)

| Campo            | Valor                          |
| ---------------- | ------------------------------ |
| **Proporção**    | 1 : 1 (quadrado)               |
| **Resolução**    | mínimo 256 × 256 px, ideal 512 × 512 |
| **Fundo**        | Transparente (PNG) ou preto    |
| **Peso máximo**  | 500 KB                         |
| **Onde aparece** | Avatar / ícone do projeto nos cartões e cabeçalho da página |

**O que mostrar:** o logótipo ou ícone do projeto, isolado, sem padding
excessivo. Se o projeto ainda não tem logo, usar as iniciais em tipografia
limpa sobre fundo escuro.

---

### 1.3 Foto Capa (`cover_image`)

| Campo            | Valor                                    |
| ---------------- | ---------------------------------------- |
| **Proporção**    | 21 : 9 ou 16 : 9                         |
| **Resolução**    | mínimo 1440 × 600 px, ideal 1920 × 800  |
| **Peso máximo**  | 3 MB                                     |
| **Onde aparece** | Banner de fundo na página do projeto (com opacidade reduzida como overlay) |

**O que mostrar:** uma imagem de contexto — ambiente de utilização, tecnologia,
abstração visual ou fotografia de mood que evoque o propósito do projeto.
Como aparece com sobreposição escura, pode ser mais dramática e rica em
detalhe do que a foto principal.

---

## 2. Textos

---

### 2.1 Slug

| Campo       | Valor                               |
| ----------- | ----------------------------------- |
| **Formato** | Apenas letras minúsculas, hífenes e números. Sem espaços nem acentos. |
| **Mínimo**  | 3 caracteres                        |
| **Máximo**  | 60 caracteres                       |
| **Exemplo** | `nexus-app`, `craft-tools-v2`       |

O slug forma o URL do projeto: `nexuscraft.pt/projetos/[slug]`. Uma vez
publicado, evitar alterá-lo para não quebrar links externos.

---

### 2.2 Título (`name`)

| Campo      | Valor                          |
| ---------- | ------------------------------ |
| **Mínimo** | 3 caracteres                   |
| **Máximo** | 60 caracteres                  |
| **Estilo** | Título próprio, sem abreviaturas excessivas |
| **Exemplo** | `NexusApp`, `Craft Analytics` |

Apresentado em maiúsculas e tipografia de display no site. Deve ser o nome
oficial e definitivo do produto.

---

### 2.3 Tagline (`tagline`)

| Campo      | Valor                                           |
| ---------- | ----------------------------------------------- |
| **Mínimo** | 20 caracteres                                   |
| **Máximo** | 120 caracteres                                  |
| **Tom**    | Conciso, direto, sem jargão técnico             |
| **Exemplo** | `"A plataforma de analytics para criadores independentes."` |

Uma frase que resume o projeto em linguagem acessível. Aparece nos cartões
da homepage por baixo do título. Deve responder à pergunta: *"O que faz este
produto, em menos de 15 palavras?"*

---

### 2.4 Descrição curta (`description`)

| Campo      | Valor                                              |
| ---------- | -------------------------------------------------- |
| **Mínimo** | 100 caracteres                                     |
| **Máximo** | 400 caracteres                                     |
| **Tom**    | Informativo, neutro, orientado ao utilizador       |

Dois a quatro parágrafos curtos que contextualizam o projeto: o que é, para
quem é e qual o problema que resolve. Aparece na secção "Sobre o projeto" da
página do produto. Sem formatação — texto simples.

---

### 2.5 Descrição longa (`description_long`)

| Campo           | Valor                                              |
| --------------- | -------------------------------------------------- |
| **Mínimo**      | 300 caracteres                                     |
| **Máximo**      | 12 000 caracteres (sem limite prático relevante)   |
| **Formato**     | **Markdown** com suporte a HTML e CSS embutidos    |
| **Renderizado** | Na página do projeto como substituição da descrição curta quando preenchida |

Esta é a versão completa e detalhada do projeto. Pode incluir:

- Contexto e motivação (por que foi criado)
- Funcionalidades detalhadas, com listas ou tabelas em Markdown
- Capturas de ecrã ou vídeos via HTML (`<img>`, `<video>`)
- Secções com estilos personalizados via `<style>` embutido ou atributos
  `style=""` inline
- Changelogs, roadmap, instruções de utilização, FAQ

**Exemplo de estrutura recomendada:**

```markdown
## O que é

Parágrafo de introdução longo e detalhado.

## Funcionalidades

- Feature A — descrição breve
- Feature B — descrição breve
- Feature C — descrição breve

## Para quem é

Parágrafo descrevendo o público-alvo.

## Estado atual

Parágrafo sobre a maturidade e estado de desenvolvimento.

## Próximos passos

- [ ] Item no roadmap
- [ ] Item no roadmap
```

---

### 2.6 Estado / Tag (`status`)

| Valor possível      | Quando usar                                               |
| ------------------- | --------------------------------------------------------- |
| `Em planeamento`    | Ideia validada mas sem código ou protótipo funcional      |
| `Em desenvolvimento`| Código ativo, funcionalidades a ser construídas           |
| `Lançado`           | Produto disponível para utilizadores reais                |

Aparece em destaque (vermelho, fonte mono, maiúsculas) no cartão do projeto
e no topo da página do produto. Manter sempre atualizado.

---

### 2.7 Ordem (`sort_order`)

| Campo      | Valor                                         |
| ---------- | --------------------------------------------- |
| **Tipo**   | Número inteiro (0, 1, 2, 3…)                 |
| **Uso**    | Controla a ordem de apresentação na homepage |

Projetos com `sort_order` menor aparecem primeiro. Para reordenar, basta
editar os números — não é necessário apagar e recriar.

---

## 3. Checklist antes de publicar

Antes de guardar um projeto no painel, confirma:

- [ ] Slug único e sem caracteres especiais
- [ ] Título sem abreviações desnecessárias
- [ ] Tagline com menos de 120 caracteres
- [ ] Foto principal em 16:9, mínimo 1280×720
- [ ] Logo quadrado com fundo transparente ou preto
- [ ] Foto de capa em proporção panorâmica, mínimo 1440×600
- [ ] Descrição longa com pelo menos um parágrafo de contexto
- [ ] Estado atualizado e correto
- [ ] `sort_order` definido em relação aos outros projetos

---

## 4. Notas sobre imagens no painel

Ao carregar uma imagem no painel `/admin/projetos`, o ficheiro é enviado
diretamente para o bucket `project-images` do Supabase Storage e o URL
público é guardado automaticamente. Não é necessário nenhum passo adicional.

Para substituir uma imagem existente, basta carregar um novo ficheiro no
campo correspondente — o URL anterior é automaticamente substituído.
O ficheiro antigo permanece no Storage; pode ser apagado manualmente em
**Supabase Dashboard → Storage → project-images** se necessário.

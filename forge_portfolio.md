# FORGE — Conteúdo para NexusCraft `/admin/projetos`

## Campos de texto

| Campo | Valor |
|---|---|
| **slug** | `forge` |
| **name** | `FORGE` |
| **tagline** | `A plataforma de treino inteligente que regista, analisa e compete contigo em cada sessão.` |
| **status** | `Em desenvolvimento` |
| **sort_order** | `1` |

---

### description (100–400 caracteres, texto simples)

```
FORGE é uma aplicação web de fitness construída para atletas que levam o treino a sério. Regista sessões ao vivo, acompanha métricas corporais, analisa a nutrição, gere hábitos e desafia os teus amigos num ranking semanal. Tudo numa interface neon escura feita para durar.
```
*(263 caracteres)*

---

### description_long (Markdown)

```markdown
## O que é o FORGE

FORGE é uma plataforma web de fitness all-in-one desenhada para quem quer dados reais sobre o seu treino. Construída em React com Supabase como backend, oferece uma experiência fluida desde o planeamento de uma sessão até à análise de progresso semanas depois.

A interface segue uma identidade visual neon escura — preto profundo com acentos em ciano, magenta, lima e âmbar — que torna a leitura de dados intuitiva mesmo em ambiente de ginásio, com a adrenalina no máximo.

## Funcionalidades principais

### Treino
- **Treino ao vivo** — cronómetro de séries, controlo de repouso, registo em tempo real com feedback imediato
- **Registo de treinos** — histórico completo com tonelagem total, séries, avaliação subjetiva e notas
- **Planos de treino** — criação e edição de planos com exercícios e progressões definidas
- **Biblioteca de exercícios** — mais de 300 exercícios catalogados por grupo muscular, equipamento e dificuldade
- **Recordes pessoais (PRs)** — acompanhamento automático de máximos por exercício

### Corpo & Saúde
- **Métricas corporais** — registo de peso, gordura corporal e outras medidas com gráficos de evolução
- **Nutrição** — diário alimentar com cálculo de macros e calorias
- **Plano alimentar** — estruturação de refeições por dia com objetivos calóricos
- **Hábitos** — sistema de hábitos diários (hidratação, sono, despertar cedo, etc.) com streaks
- **Suplementos** — gestão do protocolo de suplementação com lembretes
- **Fotos de progresso** — galeria cronológica de fotos para comparação visual

### Análise & Social
- **Analytics** — dashboard com tendências de volume, frequência, distribuição muscular e pontuação de esforço
- **Aulas de grupo** — registo e acompanhamento de aulas coletivas
- **Amigos & Competição** — ranking semanal entre amigos com pontuação calculada com base em treinos, séries, tonelagem e aulas; medalhas semanais (ouro, prata, bronze)
- **Perfil público** — página de perfil com conquistas desbloqueadas, estatísticas e histórico de medalhas

### Treino IA (novo)
- **Análise de postura em tempo real** via câmara usando **MediaPipe Pose** (Google)
- Avaliação de 4 métricas críticas no agachamento: alinhamento da coluna, largura da base, rotação dos pés e altura da anca
- Correções escritas exibidas em overlay e guardadas em log na base de dados para revisão posterior
- Sistema extensível para adicionar novos exercícios e conjuntos de regras

## Stack técnica

- **Frontend** — React 18, Vite, Tailwind CSS, Framer Motion, shadcn/ui, @tanstack/react-query
- **Backend** — Supabase (PostgreSQL, Auth, Storage, Edge Functions)
- **IA de postura** — @mediapipe/tasks-vision (PoseLandmarker, modo GPU)
- **Visualização** — Recharts para gráficos de evolução e analytics
- **Exportação** — ExcelJS para exportação de dados de treino

## Estado atual

A aplicação está em desenvolvimento ativo. O core de treino, nutrição, métricas corporais, social e o módulo de IA de postura estão funcionais. O foco atual é estabilizar o módulo de análise de postura (expandir para mais exercícios), afinar a fórmula de pontuação social e preparar um ambiente de produção.

## Próximos passos

- [ ] Expandir análise de postura IA a mais exercícios (deadlift, press, etc.)
- [ ] Apresentação visual das correções de postura em tempo real (overlay gráfico)
- [ ] Notificações push para treinos e hábitos
- [ ] Versão mobile (PWA ou React Native)
- [ ] Sistema de coaches — partilha de planos entre utilizadores
```

---

## Imagens necessárias

### main_image — 1920×1080 px, 16:9
Captura de ecrã da página de **Dashboard** ou do **ecrã de Treino ao Vivo** com dados reais.
Mostra o painel principal com cards de estatísticas (treinos, tonelagem, séries), gráficos de evolução e a barra lateral neon — transmite imediatamente que é uma app de fitness séria.

### logo_image — 512×512 px, 1:1, fundo preto ou transparente
Ícone do halter (`Dumbbell` do Lucide) sobre fundo preto `#000`, com glow ciano (#00f0ff).
A palavra **FORGE** em tipografia display (font-mono, tracking-wider) abaixo, também em ciano.
Se não existir ficheiro dedicado: usar um print do logo da barra lateral ampliado.

### cover_image — 1920×800 px, panorâmica
Imagem de contexto: ambiente de ginásio, barras, plates, ou abstração de dados sobrepostos a um atleta.
Como aparece com overlay escuro, pode ser dramática — algo que evoque intensidade e tecnologia.

---

## SQL para inserir diretamente no Supabase (NexusCraft)

Corre isto no **SQL Editor** do dashboard Supabase do NexusCraft, depois de fazeres upload das imagens e substituíres os URLs:

```sql
insert into public.projects (
  slug,
  name,
  tagline,
  description,
  description_long,
  status,
  sort_order,
  main_image,
  logo_image,
  cover_image
) values (
  'forge',
  'FORGE',
  'A plataforma de treino inteligente que regista, analisa e compete contigo em cada sessão.',
  'FORGE é uma aplicação web de fitness construída para atletas que levam o treino a sério. Regista sessões ao vivo, acompanha métricas corporais, analisa a nutrição, gere hábitos e desafia os teus amigos num ranking semanal. Tudo numa interface neon escura feita para durar.',
  '## O que é o FORGE

FORGE é uma plataforma web de fitness all-in-one desenhada para quem quer dados reais sobre o seu treino. Construída em React com Supabase como backend, oferece uma experiência fluida desde o planeamento de uma sessão até à análise de progresso semanas depois.

A interface segue uma identidade visual neon escura — preto profundo com acentos em ciano, magenta, lima e âmbar — que torna a leitura de dados intuitiva mesmo em ambiente de ginásio, com a adrenalina no máximo.

## Funcionalidades principais

### Treino
- **Treino ao vivo** — cronómetro de séries, controlo de repouso, registo em tempo real com feedback imediato
- **Registo de treinos** — histórico completo com tonelagem total, séries, avaliação subjetiva e notas
- **Planos de treino** — criação e edição de planos com exercícios e progressões definidas
- **Biblioteca de exercícios** — mais de 300 exercícios catalogados por grupo muscular, equipamento e dificuldade
- **Recordes pessoais (PRs)** — acompanhamento automático de máximos por exercício

### Corpo & Saúde
- **Métricas corporais** — registo de peso, gordura corporal e outras medidas com gráficos de evolução
- **Nutrição** — diário alimentar com cálculo de macros e calorias
- **Plano alimentar** — estruturação de refeições por dia com objetivos calóricos
- **Hábitos** — sistema de hábitos diários (hidratação, sono, despertar cedo, etc.) com streaks
- **Suplementos** — gestão do protocolo de suplementação com lembretes
- **Fotos de progresso** — galeria cronológica de fotos para comparação visual

### Análise & Social
- **Analytics** — dashboard com tendências de volume, frequência, distribuição muscular e pontuação de esforço
- **Aulas de grupo** — registo e acompanhamento de aulas coletivas
- **Amigos & Competição** — ranking semanal entre amigos com pontuação calculada com base em treinos, séries, tonelagem e aulas; medalhas semanais (ouro, prata, bronze)
- **Perfil público** — página de perfil com conquistas desbloqueadas, estatísticas e histórico de medalhas

### Treino IA (novo)
- **Análise de postura em tempo real** via câmara usando **MediaPipe Pose** (Google)
- Avaliação de 4 métricas críticas no agachamento: alinhamento da coluna, largura da base, rotação dos pés e altura da anca
- Correções escritas exibidas em overlay e guardadas em log na base de dados para revisão posterior
- Sistema extensível para adicionar novos exercícios e conjuntos de regras

## Stack técnica

- **Frontend** — React 18, Vite, Tailwind CSS, Framer Motion, shadcn/ui, @tanstack/react-query
- **Backend** — Supabase (PostgreSQL, Auth, Storage, Edge Functions)
- **IA de postura** — @mediapipe/tasks-vision (PoseLandmarker, modo GPU)
- **Visualização** — Recharts para gráficos de evolução e analytics
- **Exportação** — ExcelJS para exportação de dados de treino

## Estado atual

A aplicação está em desenvolvimento ativo. O core de treino, nutrição, métricas corporais, social e o módulo de IA de postura estão funcionais. O foco atual é estabilizar o módulo de análise de postura (expandir para mais exercícios), afinar a fórmula de pontuação social e preparar um ambiente de produção.

## Próximos passos

- [ ] Expandir análise de postura IA a mais exercícios (deadlift, press, etc.)
- [ ] Apresentação visual das correções de postura em tempo real (overlay gráfico)
- [ ] Notificações push para treinos e hábitos
- [ ] Versão mobile (PWA ou React Native)
- [ ] Sistema de coaches — partilha de planos entre utilizadores',
  'Em desenvolvimento',
  1,
  'SUBSTITUI_PELO_URL_DA_MAIN_IMAGE',
  'SUBSTITUI_PELO_URL_DA_LOGO_IMAGE',
  'SUBSTITUI_PELO_URL_DA_COVER_IMAGE'
);
```

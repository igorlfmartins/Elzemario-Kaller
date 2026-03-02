

## Plano: Atualizar todo o conteúdo da landing page

Substituir textos, ícones e estrutura do `src/pages/Index.tsx` mantendo o layout visual existente:

### Alterações em `src/pages/Index.tsx`

**Badge:** "Consultor de Seguros Empresariais" → "Consultor de Riscos Patrimoniais | Auditoria de Apólices de Incêndio"

**Parágrafo principal:** Substituir o bio curto pelo novo texto longo com pergunta de abertura em destaque, menção à Cláusula de Rateio, VRD, e os 37 anos de experiência.

**Título da seção de serviços:** "Como posso te ajudar" → "O que uma apólice mal calibrada custa à sua empresa", com subtítulo: "Quatro falhas críticas que identifico antes que o perito da seguradora as encontre nos escombros."

**4 Cards:**
1. Auditoria de VRD (ícone `Search`) — texto sobre VRD, Prédio, MMU, MMP
2. Blindagem contra Rateio (ícone `Crown`) — texto sobre Cláusula de Rateio e LMI
3. Engenharia de Risco e Lucros Cessantes (ícone `HandCoins`) — texto sobre MDP, PMP, lead time
4. Gestão de LMI e Defesa Técnica (ícone `Users`) — texto sobre Red Team, exclusões, LMI

**CTA final:** Novo headline "Se um incêndio parasse sua fábrica amanhã, seu balanço sobreviveria?" + parágrafo sobre diagnóstico gratuito + mesmos contatos

### Ícones
Trocar imports do lucide-react: `Search`, `Crown`, `HandCoins` no lugar de `Target`, `Shield`, `FileCheck`. Manter `Users`, `Phone`, `Mail`, `Linkedin`.

### Escopo
- Apenas `src/pages/Index.tsx` será editado
- Layout, cores e estrutura visual permanecem iguais
- Apenas conteúdo textual e ícones mudam


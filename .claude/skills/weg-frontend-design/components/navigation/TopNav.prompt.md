The system's single navigation pattern — always horizontal, per the brand brief ("menu de opções preferencialmente horizontal e não lateral"). Carries the wordmark, section tabs, an optional Fábrica/Linha/Posto location breadcrumb (HMI dashboard only), an alarms bell, and the account avatar.

```jsx
<TopNav
  items={[{key:'dashboard',label:'Painel',icon:'layout-grid'},{key:'analytics',label:'Análises',icon:'chart-line'},{key:'config',label:'Configuração',icon:'settings'}]}
  activeKey="dashboard"
  location={{ factory: 'Fábrica II', line: 'Linha 3', station: 'Posto 2' }}
  userName="Carlos Souza"
/>
```

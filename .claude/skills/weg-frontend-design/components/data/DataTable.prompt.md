```jsx
<DataTable
  columns={[{key:'line',label:'Linha'},{key:'oee',label:'OEE',align:'right',mono:true},{key:'status',label:'Status'}]}
  rows={[{line:'Linha 1', oee:'91,2%', status: <Badge status="success">Em operação</Badge>}]}
/>
```
Numeric columns should set `mono: true` so figures stay tabular-aligned.

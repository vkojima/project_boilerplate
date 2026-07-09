function Analytics() {
  const { TopNav, Tabs, Card, StatTile, Sparkline, DataTable, Badge, Select } = window.WEGFrontendDesignSystem_21dab7;
  const [navKey, setNavKey] = React.useState('analytics');
  const [period, setPeriod] = React.useState('week');

  const rows = [
    { line: 'Linha 1', oee: '91,2%', prod: '5.104 un', trend: [58,61,60,64,66,65,69], status: 'success' },
    { line: 'Linha 2', oee: '84,0%', prod: '4.320 un', trend: [70,68,71,69,72,74,73], status: 'success' },
    { line: 'Linha 3', oee: '—', prod: '0 un', trend: [60,58,55,40,20,5,0], status: 'critical' },
    { line: 'Linha 4', oee: '76,4%', prod: '3.980 un', trend: [65,64,63,62,60,61,62], status: 'warning' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-canvas)' }}>
      <TopNav
        items={[
          { key: 'dashboard', label: 'Painel', icon: 'layout-grid' },
          { key: 'cameras', label: 'Câmeras', icon: 'video' },
          { key: 'analytics', label: 'Análises', icon: 'chart-line' },
          { key: 'config', label: 'Configuração', icon: 'settings' },
        ]}
        activeKey={navKey}
        onSelect={(k) => {
          if (k === 'dashboard') window.location.href = '../hmi-dashboard/index.html';
          else if (k === 'cameras') window.location.href = '../hmi-dashboard/cameras.html';
          else if (k === 'config') window.location.href = '../configuration/index.html';
          else setNavKey(k);
        }}
        userName="Ana Ferreira"
      />

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ font: 'var(--text-title-lg)', color: 'var(--text-primary)' }}>Análises — Fábrica II</div>
          <Select label="" value={period} onChange={(e) => setPeriod(e.target.value)} options={[{ value: 'day', label: 'Hoje' }, { value: 'week', label: 'Esta semana' }, { value: 'month', label: 'Este mês' }]} />
        </div>

        <Tabs items={[{ key: 'day', label: 'Dia' }, { key: 'week', label: 'Semana' }, { key: 'month', label: 'Mês' }]} activeKey={period} onSelect={setPeriod} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          <Card title="OEE médio"><StatTile label="OEE" value="83,9" unit="%" delta={{ direction: 'up', label: '+1,4 pts vs. semana anterior' }} /></Card>
          <Card title="Produção total"><StatTile label="Unidades" value="13.404" unit="un" delta={{ direction: 'up', label: '+320 un' }} /></Card>
          <Card title="Paradas não programadas"><StatTile label="Ocorrências" value="3" status="critical" delta={{ direction: 'down', label: '-1 vs. semana anterior' }} /></Card>
          <Card title="Disponibilidade"><StatTile label="Disponibilidade" value="94,1" unit="%" /></Card>
        </div>

        <Card title="Linhas — Fábrica II">
          <DataTable
            columns={[
              { key: 'line', label: 'Linha' },
              { key: 'oee', label: 'OEE', align: 'right', mono: true },
              { key: 'prod', label: 'Produção', align: 'right', mono: true },
              { key: 'trend', label: 'Tendência (7d)' },
              { key: 'status', label: 'Status' },
            ]}
            rows={rows.map(r => ({
              line: r.line,
              oee: r.oee,
              prod: r.prod,
              trend: <Sparkline data={r.trend} status={r.status} width={100} height={28} />,
              status: <Badge status={r.status}>{{ success: 'Em operação', warning: 'Em alerta', critical: 'Parada' }[r.status]}</Badge>,
            }))}
          />
        </Card>
      </div>
    </div>
  );
}

window.Analytics = Analytics;

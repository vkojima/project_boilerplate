function PostoCard({ name, status, temp, speed, onClick }) {
  const { Card, Badge, Icon } = window.WEGFrontendDesignSystem_21dab7;
  const label = { success: 'Em operação', warning: 'Em alerta', critical: 'Parada', idle: 'Offline' }[status];
  return (
    <div
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <Card
        title={name}
        action={<Badge status={status}>{label}</Badge>}
        style={{ height: '100%' }}
      >
        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ font: 'var(--text-label)', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Temp.</span>
            <span style={{ font: 'var(--text-mono-md)', color: status === 'warning' ? 'var(--status-warning-strong)' : 'var(--text-primary)' }}>{temp} °C</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ font: 'var(--text-label)', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Vel.</span>
            <span style={{ font: 'var(--text-mono-md)', color: 'var(--text-primary)' }}>{speed} rpm</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Dashboard() {
  const { TopNav, Card, StatTile, Gauge, AlarmBanner, Dialog, Button, Badge } = window.WEGFrontendDesignSystem_21dab7;
  const [navKey, setNavKey] = React.useState('dashboard');
  const [dialogPosto, setDialogPosto] = React.useState(null);
  const [ackAlarm, setAckAlarm] = React.useState(false);

  const postos = [
    { name: 'Posto 1', status: 'success', temp: '62,1', speed: '1.204' },
    { name: 'Posto 2', status: 'warning', temp: '86,2', speed: '980' },
    { name: 'Posto 3', status: 'critical', temp: '—', speed: '0' },
    { name: 'Posto 4', status: 'success', temp: '58,4', speed: '1.180' },
    { name: 'Posto 5', status: 'idle', temp: '—', speed: '0' },
  ];

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-canvas)', overflow: 'hidden' }}>
      <TopNav
        items={[
          { key: 'dashboard', label: 'Painel', icon: 'layout-grid' },
          { key: 'cameras', label: 'Câmeras', icon: 'video' },
          { key: 'analytics', label: 'Análises', icon: 'chart-line' },
          { key: 'config', label: 'Configuração', icon: 'settings' },
        ]}
        activeKey={navKey}
        onSelect={(k) => {
          if (k === 'cameras') window.location.href = './cameras.html';
          else if (k === 'analytics') window.location.href = '../analytics/index.html';
          else if (k === 'config') window.location.href = '../configuration/index.html';
          else setNavKey(k);
        }}
        location={{ factory: 'Fábrica II', line: 'Linha 3', station: 'Todos os postos' }}
        userName="Carlos Souza"
      />

      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
        {!ackAlarm && (
          <AlarmBanner
            severity="critical"
            message="Parada não programada — Linha 3, Posto 3"
            timestamp="14:32:07"
            onAcknowledge={() => setAckAlarm(true)}
          />
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          <Card title="OEE da linha"><StatTile label="OEE" value="87,2" unit="%" delta={{ direction: 'up', label: '+2,1 pts vs. ontem' }} /></Card>
          <Card title="Produção"><StatTile label="Unidades / turno" value="4.812" unit="un" delta={{ direction: 'up', label: '+180 vs. meta' }} /></Card>
          <Card title="Temperatura crítica"><Gauge value={86} min={0} max={120} unit="°C" status="warning" size={110} /></Card>
          <Card title="Pressão do sistema"><Gauge value={62} min={0} max={100} unit="bar" status="success" size={110} /></Card>
        </div>

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, minHeight: 0 }}>
          {postos.map(p => (
            <PostoCard key={p.name} {...p} onClick={() => setDialogPosto(p)} />
          ))}
        </div>
      </div>

      <Dialog
        open={!!dialogPosto}
        title={dialogPosto ? dialogPosto.name : ''}
        onClose={() => setDialogPosto(null)}
        actions={<>
          <Button variant="secondary" onClick={() => setDialogPosto(null)}>Fechar</Button>
          <Button variant="danger" icon="power" onClick={() => setDialogPosto(null)}>Parar posto</Button>
        </>}
      >
        {dialogPosto && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div>Status: <Badge status={dialogPosto.status}>{{ success: 'Em operação', warning: 'Em alerta', critical: 'Parada', idle: 'Offline' }[dialogPosto.status]}</Badge></div>
            <div>Temperatura: <strong style={{ color: 'var(--text-primary)' }}>{dialogPosto.temp} °C</strong></div>
            <div>Velocidade: <strong style={{ color: 'var(--text-primary)' }}>{dialogPosto.speed} rpm</strong></div>
          </div>
        )}
      </Dialog>
    </div>
  );
}

window.Dashboard = Dashboard;

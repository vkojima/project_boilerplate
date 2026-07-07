function Configuration() {
  const { TopNav, Tabs, Card, Input, Select, Switch, Checkbox, Radio, Button, Avatar, IconButton, Badge } = window.WEGFrontendDesignSystem_21dab7;
  const [navKey, setNavKey] = React.useState('config');
  const [tab, setTab] = React.useState('thresholds');
  const [soundAlerts, setSoundAlerts] = React.useState(true);
  const [emailAlerts, setEmailAlerts] = React.useState(false);
  const [unit, setUnit] = React.useState('c');

  const users = [
    { name: 'Carlos Souza', role: 'Operador', line: 'Linha 3' },
    { name: 'Ana Ferreira', role: 'Gerente de planta', line: 'Fábrica II' },
    { name: 'Marcos Lima', role: 'Manutenção', line: 'Todas' },
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
          else if (k === 'analytics') window.location.href = '../analytics/index.html';
          else setNavKey(k);
        }}
        userName="Ana Ferreira"
      />

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 900, margin: '0 auto' }}>
        <div style={{ font: 'var(--text-title-lg)', color: 'var(--text-primary)' }}>Configuração — Linha 3</div>
        <Tabs
          items={[{ key: 'thresholds', label: 'Limites' }, { key: 'alerts', label: 'Alertas' }, { key: 'users', label: 'Usuários' }]}
          activeKey={tab} onSelect={setTab}
        />

        {tab === 'thresholds' && (
          <Card title="Limites de operação">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Input label="Temperatura máxima" defaultValue="90" unit="°C" />
              <Input label="Temperatura mínima" defaultValue="10" unit="°C" />
              <Input label="Velocidade máxima" defaultValue="1400" unit="rpm" />
              <Input label="Pressão máxima" defaultValue="80" unit="bar" />
              <Select label="Unidade de temperatura" value={unit} onChange={(e) => setUnit(e.target.value)} options={[{ value: 'c', label: 'Celsius' }, { value: 'f', label: 'Fahrenheit' }]} />
              <Select label="Linha" value="l3" onChange={() => {}} options={[{ value: 'l1', label: 'Linha 1' }, { value: 'l3', label: 'Linha 3' }]} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
              <Button variant="primary" icon="check-circle-2">Salvar alterações</Button>
            </div>
          </Card>
        )}

        {tab === 'alerts' && (
          <Card title="Preferências de alerta">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Switch label="Alertas sonoros" checked={soundAlerts} onChange={(e) => setSoundAlerts(e.target.checked)} />
              <Switch label="Notificar por e-mail" checked={emailAlerts} onChange={(e) => setEmailAlerts(e.target.checked)} />
              <div style={{ height: 1, background: 'var(--border-subtle)', margin: '4px 0' }} />
              <div style={{ font: 'var(--text-label)', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Severidade mínima notificada</div>
              <Radio name="sev" label="Todas (aviso e crítico)" checked={true} onChange={() => {}} />
              <Radio name="sev" label="Apenas críticos" checked={false} onChange={() => {}} />
              <div style={{ height: 1, background: 'var(--border-subtle)', margin: '4px 0' }} />
              <Checkbox label="Enviar resumo diário por e-mail" checked={false} onChange={() => {}} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
              <Button variant="primary" icon="check-circle-2">Salvar alterações</Button>
            </div>
          </Card>
        )}

        {tab === 'users' && (
          <Card title="Usuários com acesso" action={<Button variant="secondary" size="sm" icon="plus">Adicionar</Button>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {users.map(u => (
                <div key={u.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 4px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <Avatar name={u.name} />
                  <div style={{ flex: 1 }}>
                    <div style={{ font: 'var(--text-body-md)', color: 'var(--text-primary)' }}>{u.name}</div>
                    <div style={{ font: 'var(--text-caption)', color: 'var(--text-tertiary)' }}>{u.role} · {u.line}</div>
                  </div>
                  <IconButton icon="more-vertical" label="Mais opções" />
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

window.Configuration = Configuration;

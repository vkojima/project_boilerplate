function Cameras() {
  const { TopNav, Card, CameraFeed, CameraGrid, Tabs } = window.WEGFrontendDesignSystem_21dab7;
  const [navKey, setNavKey] = React.useState('cameras');
  const [layout, setLayout] = React.useState('grid');

  const feeds = [
    { id: 'cam1', label: 'Câmera 1', zone: 'Entrada — Linha 3', status: 'live', timestamp: '14:32:07' },
    { id: 'cam2', label: 'Câmera 2', zone: 'Posto 1', status: 'live', timestamp: '14:32:07' },
    { id: 'cam3', label: 'Câmera 3', zone: 'Posto 2', status: 'recording', timestamp: '14:32:07' },
    { id: 'cam4', label: 'Câmera 4', zone: 'Posto 3', status: 'recording', timestamp: '14:32:07' },
    { id: 'cam5', label: 'Câmera 5', zone: 'Posto 4', status: 'live', timestamp: '14:32:07' },
    { id: 'cam6', label: 'Câmera 6', zone: 'Saída — Expedição', status: 'offline' },
  ];
  const [focused, setFocused] = React.useState(feeds[0]);

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
          if (k === 'dashboard') window.location.href = './index.html';
          else if (k === 'analytics') window.location.href = '../analytics/index.html';
          else if (k === 'config') window.location.href = '../configuration/index.html';
          else setNavKey(k);
        }}
        location={{ factory: 'Fábrica II', line: 'Linha 3', station: 'Todos os postos' }}
        userName="Carlos Souza"
      />

      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ font: 'var(--text-title-lg)', color: 'var(--text-primary)' }}>Câmeras — Linha 3</div>
          <Tabs
            items={[{ key: 'grid', label: 'Grade' }, { key: 'focus', label: 'Foco + miniaturas' }]}
            activeKey={layout} onSelect={setLayout}
          />
        </div>

        {layout === 'grid' ? (
          <Card style={{ flex: 1, minHeight: 0 }}>
            <CameraGrid columns={3} feeds={feeds} onExpand={(f) => { setFocused(f); setLayout('focus'); }}
              style={{ height: '100%' }} />
          </Card>
        ) : (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
            <Card style={{ flex: 1, minHeight: 0 }}>
              <CameraFeed {...focused} style={{ height: '100%', aspectRatio: 'auto' }} />
            </Card>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${feeds.length}, 1fr)`, gap: 10 }}>
              {feeds.map((f) => (
                <div key={f.id} onClick={() => setFocused(f)} style={{ cursor: 'pointer' }}>
                  <CameraFeed {...f} compact
                    style={f.id === focused.id ? { borderColor: 'var(--blue-400)' } : undefined} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

window.Cameras = Cameras;

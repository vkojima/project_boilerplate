Tiles multiple `CameraFeed`s into a camera "wall" for simultaneous multi-camera monitoring.

```jsx
<CameraGrid
  feeds={[
    { id: 'cam1', label: 'Câmera 1', zone: 'Entrada — Linha 3', status: 'live', timestamp: '14:32:07' },
    { id: 'cam2', label: 'Câmera 2', zone: 'Posto 2', status: 'recording', timestamp: '14:32:07' },
    { id: 'cam3', label: 'Câmera 3', zone: 'Saída', status: 'offline' },
  ]}
  columns={3}
  onExpand={(feed) => setFocused(feed)}
/>
```

Defaults to an auto square-ish grid (2×2, 3×3, …) sized to the feed count; pass `columns` to force a layout (e.g. `2` for a 2×2 wall, `1` for a vertical stack). Pair with a focused single `CameraFeed` (larger) plus a `CameraGrid` thumbnail strip below it for a "focus + thumbnails" CCTV layout — see the HMI dashboard's Cameras screen for a worked example.

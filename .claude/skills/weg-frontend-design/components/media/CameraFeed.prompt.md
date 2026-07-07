A single 16:9 camera tile with a status badge (live/recording/offline), label, zone, timestamp, and expand action — the building block for any camera/CCTV view.

```jsx
<CameraFeed label="Câmera 3" zone="Linha 3 — Posto 2" status="live" timestamp="14:32:07" onExpand={() => setExpanded(feed)} />
```

Pass a real `src` (image URL, or video URL + `video`) when footage is available — the component shows an honest "Sem sinal" / "Pré-visualização indisponível" placeholder otherwise, never a fabricated image. `status="offline"` dims the tile and always shows the placeholder regardless of `src`. Use inside a `CameraGrid` for multiple simultaneous views, or standalone for a single feed embedded in a panel/dialog.

Set `compact` when the tile renders small (a thumbnail strip, a dense wall below ~200px wide) — it drops the zone caption, timestamp, expand control and placeholder icon/caption so nothing collides, keeping just a truncated label + status dot:

```jsx
<CameraFeed label="Câmera 2" status="recording" compact />
```

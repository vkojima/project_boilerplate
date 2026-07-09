export function Icon({ name, size = 20, strokeWidth = 2, color = 'currentColor', style, ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const render = () => {
      if (!window.lucide || !ref.current) return;
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        icons: window.lucide.icons,
        attrs: { width: size, height: size, stroke: color, 'stroke-width': strokeWidth },
      });
    };
    if (window.lucide) {
      render();
    } else {
      // lucide CDN script may still be loading — poll briefly
      let tries = 0;
      const t = setInterval(() => {
        tries += 1;
        if (window.lucide || tries > 40) {
          clearInterval(t);
          render();
        }
      }, 50);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth, color]);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: 'inline-flex', width: size, height: size, flexShrink: 0, ...style }}
      {...rest}
    />
  );
}

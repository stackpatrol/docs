'use client';

import { useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';
import mermaid from 'mermaid';

export function Mermaid({ chart }: { chart: string }) {
  const reactId = useId();
  const id = `mermaid-${reactId.replace(/:/g, '')}`;
  const [svg, setSvg] = useState('');
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;
    mermaid.initialize({
      startOnLoad: false,
      theme: resolvedTheme === 'dark' ? 'dark' : 'default',
      securityLevel: 'strict',
      fontFamily: 'inherit',
    });
    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (!cancelled) setSvg(svg);
      })
      .catch((err) => {
        if (!cancelled) setSvg(`<pre>${String(err)}</pre>`);
      });
    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  return (
    <div
      className="my-6 flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

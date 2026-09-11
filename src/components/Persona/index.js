import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// The four Safe Server characters. Each carries one core value from the rules.
// Rename a character or swap their art here and every page picks it up.
export const PERSONAS = {
  theo: {name: 'Theo', value: 'Respect', image: '/img/personas/theo.png'},
  mabel: {name: 'Mabel', value: 'Honesty', image: '/img/personas/mabel.png'},
  finn: {name: 'Finn', value: 'Fair play', image: '/img/personas/finn.png'},
  ned: {name: 'Ned', value: 'Shared space', image: '/img/personas/ned.png'},
};

// Plays the entrance animation when the card scrolls into view, rather than on
// page load while it may still be off-screen. Cards only start hidden once we
// know the browser can reveal them, so without JS or motion they just show.
function useRevealOnScroll() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState('static');

  useEffect(() => {
    const el = ref.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || reducedMotion || !('IntersectionObserver' in window)) {
      return undefined;
    }
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setReveal('shown');
      return undefined;
    }
    setReveal('pending');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal('shown');
          observer.disconnect();
        }
      },
      {threshold: 0.25},
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, reveal];
}

// Character line first; the plain detail underneath it on the page stays as-is.
// Usage: <Persona who="theo">Words build people up or knock them down.</Persona>
export default function Persona({who, children, to, linkLabel}) {
  const persona = PERSONAS[who];
  const image = useBaseUrl(persona.image);
  const [ref, reveal] = useRevealOnScroll();
  return (
    <figure ref={ref} className={styles.persona} data-reveal={reveal}>
      <img className={styles.portrait} src={image} alt={persona.name} width="72" height="72" />
      <figcaption className={styles.body}>
        <span className={styles.name}>
          {persona.name} <span className={styles.value}>· {persona.value}</span>
        </span>
        <q className={styles.line}>{children}</q>
        {to && (
          <Link className={styles.link} to={to}>
            {linkLabel ?? 'Read more'} →
          </Link>
        )}
      </figcaption>
    </figure>
  );
}

export function PersonaGrid({children}) {
  return <div className={styles.grid}>{children}</div>;
}

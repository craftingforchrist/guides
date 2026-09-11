import React from 'react';
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

// Character line first; the plain detail underneath it on the page stays as-is.
// Usage: <Persona who="theo">Words build people up or knock them down.</Persona>
export default function Persona({who, children, to, linkLabel}) {
  const persona = PERSONAS[who];
  const image = useBaseUrl(persona.image);
  return (
    <figure className={styles.persona}>
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

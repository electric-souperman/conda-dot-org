import React from 'react';
import CondaCSVG from '@site/static/img/conda_c.svg';
import styles from './styles.module.css';

export default function Header() {
  return (
    <div className={[styles.header, styles.section_padding].join(' ')}>
      <div className={[styles.header_content, styles.header_content_image].join(' ')}>
        <h1 className={styles.gradient_text}><b>CONDA</b><br></br></h1>
        <h2>Language-agnostic, multi-platform package management for projects of any size and complexity.</h2>
        <div className={styles.header_content_input}>
          <a className="button button--primary button--lg col" href="/learn/intro">Learn More</a>
        </div>
      </div>
      <div className={styles.header_image}>
        <CondaCSVG title="Conda Logo" width="100%"/>
      </div>
    </div>
  );
}

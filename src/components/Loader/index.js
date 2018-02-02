import React from 'react';
import { FoldingCube } from 'better-react-spinkit';
import styles from './styles.scss';

const Loader = () => (
  <div className={styles.container}>
    <FoldingCube name="folding-cube" size={60} color="#1e87f0" />
  </div>
);

export default Loader;

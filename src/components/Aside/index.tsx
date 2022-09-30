import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import './styles.scss';

const Aside = (): React.ReactElement => (
  <aside className="aside">
    <div className="aside__body">
      <FaRegUserCircle size={40} color="#4B5EFB" />
    </div>
    <div className="aside__division" />
  </aside>
);

export default Aside;

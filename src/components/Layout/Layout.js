import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import './Layout.css';

const layout = (props) => (
<Auxiliar>
  <div>ToolBar, SideDrawer, Backdrop</div>
  <main className='Content'>
      {props.children}
  </main>
</Auxiliar>
);

export default layout;
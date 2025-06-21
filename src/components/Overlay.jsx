import { Menu } from './Menu'

export function Overlay({ visible }) {
    return (
      <div className={`overlay ${visible ? 'visible' : ''}`} >
        <div className="overlay-content">
          <Menu visible={visible}/>
        </div>
      </div>
    );
  }  
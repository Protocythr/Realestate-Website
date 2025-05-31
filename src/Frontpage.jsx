import { Footer } from "./Footer";

export function Frontpage() {
  return (
    <div className="ftpg">
      <a
        style={{
          display: 'block',
          backgroundColor: '#8b0000',
          height: '100vh',
          width: '100%',
          textDecoration: 'none',
          color: 'white'
        }}
      >
        placeholder1
      </a>
      <a
        style={{
          display: 'block',
          backgroundColor: '#49759C',
          height: '100vh',
          width: '100%',
          textDecoration: 'none',
          color: 'white'
        }}
      >
        placeholder2
      </a>

      <Footer/>
    </div>
  );
}

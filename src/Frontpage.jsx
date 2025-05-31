import { Footer } from "./Footer";

export function Frontpage() {
  return (
    <div className="ftpg">
      <a
        style={{
          display: 'block',
          backgroundColor: 'red',
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
          backgroundColor: 'blue',
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

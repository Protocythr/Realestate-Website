export function MenuItem({ txtColor, txt, link }) {
    return (
      <div style={{ color: txtColor }}>
        <a href={link} className="mi-link">
          {txt}
        </a>
      </div>
    )
  }
  
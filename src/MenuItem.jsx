export function MenuItem({ txtColor, txt, link }) {
    return (
      <li style={{ color: txtColor }}>
        <a href={link} className="mi-link">
          {txt}
        </a>
      </li>
    )
  }
  
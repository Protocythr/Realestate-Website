export function LinkedElement({ txtColor, txt, link }) {
    return (
      <li className="nbe" style={{ color: txtColor }}>
        <a href={link} className="nbe-link">
          {txt}
        </a>
      </li>
    )
  }
  
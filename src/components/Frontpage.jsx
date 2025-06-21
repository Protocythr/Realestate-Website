import { Footer } from "./Footer";
import { Slideshow } from "./Slideshow";

export function Frontpage() {
  return (
    <div className="ftpg">
      <div
        style={{
          display: 'block',
          height: '100vh',
          width: '100%',
        }}
      >
        <Slideshow/>
      </div>
      <div className="photobio">
        <img src="assets/headshot.jpg"/>
        <a className="bio" href="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, modi sit a ducimus, reiciendis molestias totam maiores sequi optio quis adipisci, exercitationem similique laudantium consequatur blanditiis ipsam quod asperiores ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, modi sit a ducimus, reiciendis molestias totam maiores sequi optio quis adipisci, exercitationem similique laudantium consequatur blanditiis ipsam quod asperiores ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, modi sit a ducimus, reiciendis molestias totam maiores sequi optio quis adipisci, exercitationem similique laudantium consequatur blanditiis ipsam quod asperiores ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, modi sit a ducimus, reiciendis molestias totam maiores sequi optio quis adipisci, exercitationem similique laudantium consequatur blanditiis ipsam quod asperiores ratione?</a>
      </div>

      <Footer/>
    </div>
  );
}

import Menu from "./Menu";
import store1 from "../images/store.png"
import store2 from "../images/store2.png"

function About() {
  return (
    <>
          <div id="about">
              <h2>About Us</h2>
              <p className="description">Pearl & Leaf is a cozy, modern boba shop that blends tradition with creativity. 
                Every drink is crafted using premium loose-leaf teas brewed fresh daily, paired with chewy, 
                house-made tapioca pearls for the perfect balance of flavor and texture. 
                The menu offers both classic favorites, like milk tea and taro, 
                as well as unique seasonal creations inspired by local fruits and global flavors. 
                The shop's warm, minimalist space is designed to be a gathering spot for friends, 
                with soft lighting, earthy tones, and subtle greenery that create a calming atmosphere. 
                Pearl & Leaf isn't just about grabbing a drink—it's about slowing down, savoring the moment, 
                and connecting over something sweet.</p>
                <div className="store-imgs">
                  <img src={store1} className="store-img"></img>
                  <img src={store2} className="store-img"></img>
                </div>
                
      </div>
    </>
  );
}

export default About;

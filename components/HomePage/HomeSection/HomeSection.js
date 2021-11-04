import { HomeSectionComponent, Image, Message } from "./HomeSectionStyles";
import { useInView } from "react-intersection-observer";

const HomeSection = () => {
  return (
    <HomeSectionComponent>
      <Message>
        <h1>Muchas gracias</h1>
        <h1>por todo Chiquita</h1>
      </Message>
      <Image
        alt=""
        style={{
          backgroundImage: `url("/assets/images/couple.jpg")`,
        }}
      ></Image>
    </HomeSectionComponent>
  );
};

export default HomeSection;

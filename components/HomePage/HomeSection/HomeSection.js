import { HomeSectionComponent, Image, Message } from "./HomeSectionStyles";
import { motion } from "framer-motion";

const messageVariants = {
  hidden: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
    },
  },
  in: {
    opacity: 1,
    scale: 0.8,
    transition: {
      opacity: {
        ease: "easeInOut",
        duration: 1.2,
      },
      scale: {
        duration: 1.2,
        delay: 2,
      },
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    height: 250,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
    },
  },
  in: {
    opacity: 1,
    height: 350,
    transition: {
      opacity: {
        ease: "easeInOut",
        duration: 1.2,
      },
      height: {
        duration: 1.2,
        delay: 2,
      },
    },
  },
};

const HomeSection = () => {
  return (
    <HomeSectionComponent>
      <Message
        as={motion.div}
        initial="hidden"
        animate="in"
        variants={messageVariants}
      >
        <h1>Muchas gracias</h1>
        <h1>por todo Chiquita</h1>
      </Message>
      <Image
        alt=""
        style={{
          backgroundImage: `url("/assets/images/couple.jpg")`,
        }}
        as={motion.div}
        initial="hidden"
        animate="in"
        variants={imageVariants}
      ></Image>
    </HomeSectionComponent>
  );
};

export default HomeSection;

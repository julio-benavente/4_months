import { Photo, PhotosSectionComponent } from "./PhotoSectionStyles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Images

const PhotosSection = () => {
  const photos = [
    "/assets/images/photo (3).jpeg",
    "/assets/images/photo (1).jpeg",
    "/assets/images/photo (5).jpeg",
    "/assets/images/photo (11).jpeg",
    "/assets/images/photo (6).jpeg",
    "/assets/images/photo (22).jpeg",
    "/assets/images/photo (7).jpeg",
    "/assets/images/photo (10).jpeg",
    "/assets/images/photo (21).jpeg",
    "/assets/images/photo (19).jpeg",
    "/assets/images/photo (15).jpeg",
    "/assets/images/photo (14).jpeg",
    "/assets/images/photo (2).jpeg",
  ];

  const PhotosComponents = () => {
    return photos.map((url, index) => (
      <PhotosComponent url={url} key={index} />
    ));
  };

  return <PhotosSectionComponent>{PhotosComponents()}</PhotosSectionComponent>;
};

export default PhotosSection;

const photoVariants = {
  out: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  in: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  exit: { opacity: 0 },
};

const PhotosComponent = ({ url }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Photo
      as={motion.div}
      initial={inView ? "in" : "out"}
      animate={inView ? "in" : "out"}
      exit="exit"
      variants={photoVariants}
      ref={ref}
      style={{
        backgroundImage: `url("${url}")`,
      }}
    />
  );
};

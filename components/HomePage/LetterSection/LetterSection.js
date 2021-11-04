import {
  Letter,
  LetterSectionComponent,
  Photo,
  Video,
} from "./LetterSectionStyles";

const LetterSection = () => {
  const photo = "/assets/images/photo (6).jpeg";

  return (
    <LetterSectionComponent>
      <Letter>
        <p>
          ¡Ay, Chiquita! Los últimos meses han sido de mucha alegría, estoy muy
          feliz de poder disfrutar esta etapa de noviazgo a tu lado, cada
          momento lo haces especial, lo que antes era común y ordinario, ahora
          es significativo para mí. Me encanta poder escuchar tu voz por las
          mañanas, conversar y reírnos juntos, ver tu rostro angelical, y sentir
          la luz que irradia tu sonrisa.
        </p>
        <p>
          No puedo menos que agradecer por todo lo que has hecho por mí, por ser
          valiente al dejar tu país y venir aquí, a Perú, para poder vernos y
          abrazarnos. Muchas gracias por tu valioso ejemplo de fe y
          perseverancia. Tus convicciones me fortalecen y me alientan a ser
          mejor. En tu compañía siento que puedo ser yo y aún una mejor versión
          de mí.
        </p>
        <p>
          Miro con confianza los meses y años que están por venir, tengo
          confianza que el amor que tenemos el uno por el otro se va a
          fortalecer y florecer en bellas flores.
        </p>
        <p>Muchas gracias por todo mi Chiquita.</p>
        <p>Con amor,</p>
        <p>Julio</p>
      </Letter>
      <Photo
        style={{
          backgroundImage: `url("${photo}")`,
        }}
      />
      <Video>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZLLrtZqUvR0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Video>
    </LetterSectionComponent>
  );
};

export default LetterSection;

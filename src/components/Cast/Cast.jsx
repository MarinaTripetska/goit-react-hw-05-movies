import { useRef, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SmallLoader from "../Loaders/SmallLoader";
import { getCastById } from "../../API/get";
import { Section, MainContainer, Title } from "../UtilsStyledComponents";
import {
  NoResultMessage,
  List,
  Card,
  InfoParagraph,
  AvatarThumb,
} from "./Cast.styled";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Cast() {
  const { slug } = useParams();
  const movieID = slug.match(/[a-z0-9]+$/)[0];
  const section = useRef();

  const {
    data: cast,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery(["cast", movieID], () => getCastById(movieID), {
    enabled: Boolean(movieID),
    staleTime: 60_000 * 10,
  });

  useEffect(() => {
    const sectionDOMElem = section.current;
    if (cast) {
      sectionDOMElem.scrollIntoView({ behavior: "smooth" });
    }
  }, [cast]);

  if (isLoading) {
    return <SmallLoader />;
  }

  if (isError) {
    return <NoResultMessage>Something went wrong... {error}</NoResultMessage>;
  }

  if (isSuccess) {
    return (
      <Section ref={section}>
        <MainContainer>
          <Title Atr={"h2"} text="Cast" />

          {cast.length > 0 ? (
            <List>
              {cast.map((c) => (
                <Card key={c.cast_id}>
                  <InfoParagraph>
                    <b>Character:</b> {c.character}
                  </InfoParagraph>
                  <InfoParagraph>
                    <b>Actor name:</b> {c.name}
                  </InfoParagraph>
                  <AvatarThumb>
                    {c.profile_path && (
                      <LazyLoadImage
                        effect="blur"
                        alt={c.name}
                        src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${c.profile_path}`}
                        width="130"
                      />
                    )}
                  </AvatarThumb>
                </Card>
              ))}
            </List>
          ) : (
            <NoResultMessage>The cast not described...</NoResultMessage>
          )}
        </MainContainer>
      </Section>
    );
  }
}

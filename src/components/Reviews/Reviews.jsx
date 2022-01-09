import { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SmallLoader from "../Loaders/SmallLoader";
import { getReviewsById } from "../../API/get";
import { Section, MainContainer, Title } from "../UtilsStyledComponents";
import {
  List,
  Item,
  NoResultMessage,
  Author,
  Message,
  CreatedDate,
} from "./Reviews.styled";

export default function Reviews() {
  const { slug } = useParams();
  const section = useRef();

  const movieID = slug.match(/[a-z0-9]+$/)[0];
  const {
    data: reviews,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery(["review", movieID], () => getReviewsById(movieID), {
    enabled: Boolean(movieID),
    staleTime: 60_000 * 10,
  });

  useEffect(() => {
    const sectionDOMElem = section.current;
    if (reviews) {
      sectionDOMElem.scrollIntoView({ behavior: "smooth" });
    }
  }, [reviews]);

  if (isLoading) {
    return <SmallLoader />;
  }

  if (isError) {
    return (
      <NoResultMessage>
        Something went wrong! Error: {error.message}
      </NoResultMessage>
    );
  }

  if (isSuccess) {
    return (
      <Section ref={section}>
        <MainContainer>
          <Title Atr={"h2"} text="Reviews" />

          {reviews.length !== 0 ? (
            <List>
              {reviews.map(({ id, author, content, created_at }) => (
                <Item key={id}>
                  <Author>{author}</Author>
                  <Message>{content}</Message>
                  <CreatedDate>
                    {new Date(created_at).toLocaleDateString()}
                  </CreatedDate>
                </Item>
              ))}
            </List>
          ) : (
            <NoResultMessage>No reviews here...</NoResultMessage>
          )}
        </MainContainer>
      </Section>
    );
  }
}

import React from "react";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@VandersonArruda</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Vanderson Arruda</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />
          </Details>
        </CardFooter>
      </Card>
    </Container>
  );
}

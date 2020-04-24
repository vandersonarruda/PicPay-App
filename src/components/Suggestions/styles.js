import styled from "styled-components/native";

//  Dessa forma é possível passar atributos e seta um alignitens para o ScrollView
export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16,
  },
}))`
  background: #1e222b;
  height: 130px;
`;

// Também pode usar o TouchableOpacity no styled
export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;

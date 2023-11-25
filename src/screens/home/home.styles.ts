import { styled } from "styled-components/native";

export const SearchContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  gap: 15px;
`;
export const AlbunsFoundContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
  /* margin: 20px; */
  padding: 30px;
  padding-top: 0;
  padding-bottom: 0;

  scroll-padding-top: 10px;
  scroll-padding-bottom: 10px;

  display: flex;
  flex-direction: column;
  /* background-color: black; */
`;

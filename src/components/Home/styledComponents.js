import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'

export const AppHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1140px;
  min-height: 90vh;
  background-color: ${props => props.bgColor};
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: ${props => props.bgColor};
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  padding-top: 10px;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  margin-top: 30px;
  display: ${props => props.dispBanner};
  width: 90%;
  flex-direction: column;
  padding: 10px;
  align-self: center;
  @media screen and (max-width:768px) {
    height: 150px;
  }
`
export const BannerLogo = styled.img`
  width: 30%;

  @media screen and (min-width:768px) {
    width: 15%;
  }
`

export const BannerHeading = styled.p`
  width: 50%;
  font-size: 24px;
  @media screen and (max-width:768px) {
    font-size: 12px;
    width: 75%;
  }
`
export const BannerButton = styled.button`
  border: 2px solid #ed6861;
  color: #ed6861;
  font-weight: bold;
  background-color: transparent;
  border-radius: 5px;
  padding: 10px;
  width: 15%;
  cursor: pointer;
  @media screen and (max-width:768px) {
    font-size: 10px;
    font-weight: 500;
    padding: 10px 5px 10px 5px;
    width: 25%;
  }

  :hover {
    color: #ffffff;
    background-color: #ed6861;
  }
`

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  height: 30px;
  width: 30px;
  cursor: pointer;
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and(max-width:576px) {
    max-width: 576px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 576px) {
    width: 300px;
    padding: 10px;
  }
`
export const Search = styled.input`
  padding: 8px;
  outline: none;
  border: 1px solid #909090;
  line-height: 20px;
  width: 300px;
  @media screen and (max-width: 576px) {
    width: 250px;
  }
`
export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  border: 1px solid #909090;
  border-left: 0px;
  padding: 8px;
  width: 50px;
  line-height: 20px;
  background-color: #909090;
  :hover{
    background-color: #3b82f6;
    color: #ffffff;
  }
  :active{
    background-color: #00306e;
  }
`
export const SearchLogo = styled(BsSearch)`
  font-size: 15px;
`

export const Heading = styled.h1`
  font-size: 30px;
  color: ${props => props.color};
  @media screen and(min-width: 768px) {
    font-size: 24px;
  }
`
export const Description = styled.p`
  font-size: 18px;
  width: 400px;
  text-align: center;
  color: #616e7c;
`
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px;
  border: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 100px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`
export const NoVideosImage = styled.img`
  width: 350px;
`
export const VideosList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 10px;

  @media screen and(max-width:576px) {
    padding-left: 10px;
    padding-right: 10px;
    max-width: 576px;
  }
`

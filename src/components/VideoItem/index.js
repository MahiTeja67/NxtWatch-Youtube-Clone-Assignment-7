import {
  ListItem,
  CardImage,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelDetails,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
  NavLink,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    channelName,
    channelProfileLogo,
    publishedDate,
    thumbnailUrl,
    title,
    viewsCount,
  } = videoDetails
  return (
    <NxtWatchContext>
      {value => {
        const {isDarkTheme} = value
        const themeColor = isDarkTheme ? '#ffffff' : '#000000'
        const hoverCol = isDarkTheme
          ? '4px 4px 4px #717171'
          : '4px 4px 4px gray'
        return (
          <NavLink to={`/videos/${id}`}>
            <ListItem bgCol={hoverCol}>
              <CardImage src={thumbnailUrl} alt="video thumbnail" />
              <ChannelDetailsContainer>
                <ChannelLogo src={channelProfileLogo} alt="channel logo" />
                <ChannelDetails>
                  <Title color={themeColor}>{title}</Title>
                  <ChannelName>{channelName}</ChannelName>

                  <ViewsAndDate>
                    {viewsCount} views <Dot> &#8226;</Dot>
                    {publishedDate}
                  </ViewsAndDate>
                </ChannelDetails>
              </ChannelDetailsContainer>
            </ListItem>
          </NavLink>
        )
      }}
    </NxtWatchContext>
  )
}
export default VideoItem

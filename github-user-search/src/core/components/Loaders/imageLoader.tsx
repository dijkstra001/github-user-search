import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={318}
    viewBox="0 0 370 370"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="19" y="23" rx="2" ry="2" width="280" height="280" /> 
    <rect x="23" y="319" rx="0" ry="0" width="155" height="48" />
  </ContentLoader>
)

export default ImageLoader
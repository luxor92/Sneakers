import React from "react"
import ContentLoader from "react-content-loader"

const Preloader = (props) => (
    <ContentLoader
        speed={2}
        width={270}
        height={260}
        viewBox="0 0 270 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        >
        <rect x="79" y="444" rx="0" ry="0" width="1" height="0" />
        <rect x="5" y="36" rx="10" ry="10" width="150" height="91" />
        <rect x="5" y="143" rx="5" ry="5" width="150" height="16" />
        <rect x="6" y="200" rx="5" ry="5" width="93" height="18" />
        <rect x="6" y="180" rx="10" ry="10" width="80" height="15" />
        <rect x="120" y="180" rx="10" ry="10" width="35" height="35" />
    </ContentLoader>
)

export default Preloader
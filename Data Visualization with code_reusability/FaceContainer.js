export const FaceContainer = ({children, width, height, centrX, centrY}) =>(
 		<svg width={width} height={height}>
    <g transform = {`translate(${centrX}, ${centrY})`}>
      {children}
      </g>
      </svg>
); 
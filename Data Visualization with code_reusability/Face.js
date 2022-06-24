import {BackgroundCircle} from './BackgroundCircle';
import {Eyes} from './Eyes';
import {Mouth} from './MouthArch';
import {FaceContainer} from './FaceContainer'

export const Face = ({
width,
height,
centrX,
centrY,
strokewidth,
eyeOffsetX,
eyeOffsetY,
eyeRadius,
mouthRadius,
mouthWidth  
}) =>(
  <FaceContainer
      width = {width}
      height={height}
      centrX={centrX}
      centrY={centrY}
      >
      <BackgroundCircle 
        radius = {centrY-strokewidth/2} 
        strokewidth={strokewidth}/> 
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
        /> 
      <Mouth
        mouthRadius = {mouthRadius}
        mouthWidth = {mouthWidth}
        />
    </FaceContainer>
);

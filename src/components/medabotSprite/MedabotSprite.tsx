import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { width as mainSpritesWidth } from '../../static/images/mainSprites.json'

interface Sprite {
  head: Position
  upperBody: Position
  lowerBody: Position
  upperArmRight: Position
  upperArmLeft: Position
  lowerArmRight: Position
  lowerArmLeft: Position
  upperLegRight: Position
  upperLegLeft: Position
  lowerLegRight: Position
  lowerLegLeft: Position
}
interface Position {
  width: number
  height: number
  x: number
  y: number
}
const spritePosition: Sprite = {
  head: {
    width: 30,
    height: 29,
    x: 590,
    y: 1147
  },
  upperBody: {
    width: 16,
    height: 14,
    x: 583,
    y: 1113
  },
  lowerBody: {
    width: 16,
    height: 16,
    x: 586,
    y: 1097
  },
  upperArmRight: {
    width: 16,
    height: 21,
    x: 605,
    y: 1119
  },
  upperArmLeft: {
    width: 10,
    height: 22,
    x: 548,
    y: 1118
  },
  lowerArmRight: {
    width: 12,
    height: 19,
    x: 602,
    y: 1096
  },
  lowerArmLeft: {
    width: 17,
    height: 21,
    x: 562,
    y: 1097
  },
  upperLegRight: {
    width: 8,
    height: 13,
    x: 589,
    y: 1078
  },
  upperLegLeft: {
    width: 8,
    height: 13,
    x: 589,
    y: 1078
  },
  lowerLegRight: {
    width: 19,
    height: 21,
    x: 588,
    y: 1064
  },
  lowerLegLeft: {
    width: 21,
    height: 21,
    x: 557,
    y: 1067
  }
}

interface MedabotSpriteProps {
  scale?: number
}

export default function MedabotSprite({ scale = 1 }: MedabotSpriteProps) {
  const Head = styled.div`
    height: ${spritePosition.head.height * scale}px;
    width: ${spritePosition.head.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.head.x * scale}px
      ${spritePosition.head.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
    position: absolute;
  `
  const UpperBody = styled.div`
    height: ${spritePosition.upperBody.height * scale}px;
    width: ${spritePosition.upperBody.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.upperBody.x * scale}px
      ${spritePosition.upperBody.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
    position: absolute;
    top: ${spritePosition.head.height * scale}px;
  `
  const LowerBody = styled.div`
    height: ${spritePosition.lowerBody.height * scale}px;
    width: ${spritePosition.lowerBody.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.lowerBody.x * scale}px
      ${spritePosition.lowerBody.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
    position: absolute;
    top: ${(spritePosition.head.height + spritePosition.upperBody.height) * scale}px;
  `
  const UpperArmRight = styled.div`
    height: ${spritePosition.upperArmRight.height * scale}px;
    width: ${spritePosition.upperArmRight.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.upperArmRight.x * scale}px
      ${spritePosition.upperArmRight.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
    position: absolute;
    top: ${(spritePosition.head.height + spritePosition.upperBody.height + spritePosition.lowerBody.height) * scale}px;
  `
  const UpperArmLeft = styled.div`
    height: ${spritePosition.upperArmLeft.height * scale}px;
    width: ${spritePosition.upperArmLeft.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.upperArmLeft.x * scale}px
      ${spritePosition.upperArmLeft.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
  `
  const LowerArmRight = styled.div`
    height: ${spritePosition.lowerArmRight.height * scale}px;
    width: ${spritePosition.lowerArmRight.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.lowerArmRight.x * scale}px
      ${spritePosition.lowerArmRight.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
  `
  const LowerArmLeft = styled.div`
    height: ${spritePosition.lowerArmLeft.height * scale}px;
    width: ${spritePosition.lowerArmLeft.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.lowerArmLeft.x * scale}px
      ${spritePosition.lowerArmLeft.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
  `
  const UpperLegRight = styled.div`
    height: ${spritePosition.upperLegRight.height * scale}px;
    width: ${spritePosition.upperLegRight.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.upperLegRight.x * scale}px
      ${spritePosition.upperLegRight.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
    position: absolute;
    top: ${(spritePosition.head.height + spritePosition.upperBody.height + spritePosition.lowerBody.height) * scale}px;
  `
  const UpperLegLeft = styled.div`
    height: ${spritePosition.upperLegLeft.height * scale}px;
    width: ${spritePosition.upperLegLeft.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.upperLegLeft.x * scale}px
      ${spritePosition.upperLegLeft.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
  `
  const LowerLegRight = styled.div`
    height: ${spritePosition.lowerLegRight.height * scale}px;
    width: ${spritePosition.lowerLegRight.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.lowerLegRight.x * scale}px
      ${spritePosition.lowerLegRight.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
    position: absolute;
    top: ${(spritePosition.head.height +
      spritePosition.upperBody.height +
      spritePosition.lowerBody.height +
      spritePosition.upperLegRight.height) *
    scale}px;
  `
  const LowerLegLeft = styled.div`
    height: ${spritePosition.lowerLegLeft.height * scale}px;
    width: ${spritePosition.lowerLegLeft.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.lowerLegLeft.x * scale}px
      ${spritePosition.lowerLegLeft.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
  `

  const calculateWidthHeight = (medabotSprite: Sprite, medabotScale: number) => {
    const height =
      (medabotSprite.head.height +
        medabotSprite.upperBody.height +
        medabotSprite.lowerBody.height +
        medabotSprite.upperLegRight.height +
        medabotSprite.lowerLegRight.height) *
      medabotScale
    const width = 45 * medabotScale
    return { height, width }
  }

  const { height, width } = calculateWidthHeight(spritePosition, scale)

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 4, position: 'relative', height, width }}>
        <Head />
        {/* <UpperArmLeft /> */}
        <UpperBody />
        {/* <UpperArmRight /> */}
        {/* <LowerArmRight /> */}
        <LowerBody />
        {/* <LowerArmLeft /> */}
        <UpperLegRight />
        {/* <UpperLegLeft /> */}
        <LowerLegRight />
        {/* <LowerLegLeft /> */}
      </Box>
    </>
  )
}

MedabotSprite.defaultProps = {
  scale: 1
}

import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { width as mainSpritesWidth } from '../../static/images/mainSprites.json'

const spritePosition = {
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
    height: 14,
    x: 583,
    y: 1113
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
  `
  const UpperBody = styled.div`
    height: ${spritePosition.upperBody.height * scale}px;
    width: ${spritePosition.upperBody.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.upperBody.x * scale}px
      ${spritePosition.upperBody.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
  `
  const UpperArmRight = styled.div`
    height: ${spritePosition.upperArmRight.height * scale}px;
    width: ${spritePosition.upperArmRight.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.upperArmRight.x * scale}px
      ${spritePosition.upperArmRight.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
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
  const LowerBody = styled.div`
    height: ${spritePosition.lowerBody.height * scale}px;
    width: ${spritePosition.lowerBody.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.lowerBody.x * scale}px
      ${spritePosition.lowerBody.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
  `
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* TODO: make this margin from the data */}
      <Box sx={{ ml: `${17 * scale}px` }}>
        <Head />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <UpperArmRight />
        <UpperBody />
        <UpperArmLeft />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <LowerArmRight />
        <LowerBody />
        <LowerArmLeft />
      </Box>
    </Box>
  )
}

MedabotSprite.defaultProps = {
  scale: 1
}

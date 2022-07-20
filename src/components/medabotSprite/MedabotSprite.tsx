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
  top: number
  left: number
}
const spritePosition: Sprite = {
  lowerLegLeft: {
    width: 21,
    height: 21,
    x: 557,
    y: 1067,
    top: 63,
    left: 8
  },
  upperArmLeft: {
    width: 10,
    height: 22,
    x: 548,
    y: 1118,
    top: 22,
    left: 11
  },
  lowerArmLeft: {
    width: 17,
    height: 21,
    x: 562,
    y: 1097,
    top: 42,
    left: 17
  },
  upperLegLeft: {
    width: 8,
    height: 13,
    x: 589,
    y: 1078,
    top: 50,
    left: 10
  },
  lowerBody: {
    width: 16,
    height: 16,
    x: 586,
    y: 1097,
    top: 44,
    left: 0
  },
  upperLegRight: {
    width: 8,
    height: 13,
    x: 589,
    y: 1078,
    top: 50,
    left: 1
  },

  lowerLegRight: {
    width: 19,
    height: 21,
    x: 588,
    y: 1064,
    top: 63,
    left: -2
  },
  head: {
    width: 30,
    height: 29,
    x: 590,
    y: 1147,
    top: 0,
    left: 0
  },
  upperBody: {
    width: 16,
    height: 14,
    x: 583,
    y: 1113,
    top: 30,
    left: 0
  },

  upperArmRight: {
    width: 16,
    height: 21,
    x: 605,
    y: 1119,
    top: 23,
    left: -11
  },

  lowerArmRight: {
    width: 12,
    height: 19,
    x: 602,
    y: 1096,
    top: 44,
    left: -8
  }
}

interface MedabotSpriteProps {
  scale?: number
}

export default function MedabotSprite({ scale = 1 }: MedabotSpriteProps) {
  const medabot = (_spritePosition: Sprite) => {
    const meda: any = []
    Object.keys(_spritePosition).forEach(key => {
      const Part = styled.div`
        height: ${_spritePosition[key as keyof Sprite].height * scale}px;
        width: ${_spritePosition[key as keyof Sprite].width * scale}px;
        background: url('../../src/static/images/mainSprites.png') ${_spritePosition[key as keyof Sprite].x * scale}px
          ${_spritePosition[key as keyof Sprite].y * scale}px;
        image-rendering: pixelated;
        background-size: ${mainSpritesWidth * scale}px;
        position: absolute;
        top: ${_spritePosition[key as keyof Sprite].top * scale}px;
        left: ${_spritePosition[key as keyof Sprite].left * scale}px;
      `
      meda.push(<Part />)
    })
    return meda
  }

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
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 8, position: 'relative', height, width }}>
        {medabot(spritePosition)}
      </Box>
    </>
  )
}

MedabotSprite.defaultProps = {
  scale: 1
}

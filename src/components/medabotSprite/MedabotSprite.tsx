import styled from '@emotion/styled'
import { width as mainSpritesWidth } from '../../static/images/mainSprites.json'

const spritePosition = {
  head: {
    width: 30,
    height: 29,
    x: 590,
    y: 1147
  }
}

interface MedabotSpriteProps {
  scale?: number
}

export default function MedabotSprite({ scale = 1 }: MedabotSpriteProps) {
  const MedaHead = styled.div`
    height: ${spritePosition.head.height * scale}px;
    width: ${spritePosition.head.width * scale}px;
    background: url('../../src/static/images/mainSprites.png') ${spritePosition.head.x * scale}px
      ${spritePosition.head.y * scale}px;
    image-rendering: pixelated;
    background-size: ${mainSpritesWidth * scale}px;
  `

  return (
    <div>
      <MedaHead />
    </div>
  )
}

MedabotSprite.defaultProps = {
  scale: 1
}

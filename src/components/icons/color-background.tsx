import React, { FunctionComponent, CSSProperties } from 'react'
import { Svg } from './base'

interface ColorBackgroundIconProps {
  squareStyle: CSSProperties
}

export const ColorBackgroundIcon: FunctionComponent<ColorBackgroundIconProps> = ({ squareStyle }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.17 19.17">
      <rect width="19.17" height="19.17" rx="1.04" style={squareStyle} />
      <path d="M10.28,5.56A8.84,8.84,0,0,1,9.8,7.83,8.65,8.65,0,0,1,8.73,9.9a10.06,10.06,0,0,1-1.64,1.81,11.91,11.91,0,0,1-2.16,1.5.38.38,0,0,1-.21,0,.23.23,0,0,1-.18-.11L4,12.51a.28.28,0,0,1,0-.18.26.26,0,0,1,.12-.15A9.81,9.81,0,0,0,7.26,9.57,7.11,7.11,0,0,0,8.71,6.26a.5.5,0,0,0,0-.34.39.39,0,0,0-.31-.09H4.64c-.11,0-.16-.06-.16-.18V4.74c0-.1,0-.15.16-.15H9.32a1,1,0,0,1,.77.24A1.05,1.05,0,0,1,10.28,5.56Zm5.18,4a.2.2,0,0,1-.14.06H13.57v6.15a.14.14,0,0,1-.12.16H12.26c-.12,0-.17,0-.17-.16v-12c0-.12,0-.17.17-.17h1.15c.11,0,.16,0,.16.17V8.34h1.75a.24.24,0,0,1,.14.05.14.14,0,0,1,.06.11v.91a.14.14,0,0,1-.06.12Z" />
    </Svg>
  )
}

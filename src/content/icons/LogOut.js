import React from 'react'

const LogOut = ({
  color,
  size,
  ...props
}) => (
  <svg
    {...props}
    viewBox='0 0 48 48'
    width={size}
    height={size}
  >
<polygon fill={color} points="36,44 4,44 4,4 36,4 36,8 40,8 40,0 0,0 0,48 40,48 40,40 36,40  "/>
<polygon fill={color} points="48,24 37.976,13.977 37.976,20 13,20 13,28 37.976,28 37.976,34.023  "/>
</svg>
)

LogOut.displayName = 'LogOut'

LogOut.defaultProps = {
  size: 100,
  color: 'black'
}

export default LogOut
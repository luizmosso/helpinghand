import React from 'react'

const ChevronRightIcon = ({
  size,
  color,
  ...props
}) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill={color}
  >
    <path d='M8,16.6l4.6-4.6L8,7.4L9.4,6l6,6l-6,6L8,16.6z' />
  </svg>
)

ChevronRightIcon.displayName = 'ChevronRightIcon'

ChevronRightIcon.defaultProps = {
  size: 24,
  color: 'currentcolor'
}

export default ChevronRightIcon
import React from 'react'

const ChevronLeftIcon = ({
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
    <path d='M15.4,16.6L10.8,12l4.6-4.6L14,6l-6,6l6,6L15.4,16.6z' />
  </svg>
)

ChevronLeftIcon.displayName = 'ChevronLeftIcon'

ChevronLeftIcon.defaultProps = {
  size: 24,
  color: 'currentcolor'
}

export default ChevronLeftIcon
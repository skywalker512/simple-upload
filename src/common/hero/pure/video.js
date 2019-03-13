import React from 'react'

import WaterVideo from '@/statics/video/particles-compressed.mp4'
import PointVideo from '@/statics/video/underwater-grayscale-compressed-small.mp4'

export function PointVideoSource() {
  return (
    <source src={PointVideo} type="video/mp4"></source>
  )
}

export function WaterVideoSource() {
  return (
    <source src={WaterVideo} type="video/mp4"></source>
  )
}

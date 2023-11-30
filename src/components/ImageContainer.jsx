import React from 'react'

const ImageContainer = ({url}) => {
  return (
    <div class="flex justify-center items-center">
  <img src={url} alt="Dog Image" class="mx-auto max-w-full rounded" />
</div>

  )
}

export default ImageContainer
"use client"
import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
interface Props {
  src: string;
  className?: string;
  //   spinnerClassName?: string;
  alt?: string;
}
const LoadImage: FunctionComponent<Props> = ({
  src,
  className,
  //   spinnerClassName,
  alt,
}) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  return (
    <div className={`${className} relative h-full`}>
      <Image
        src={src}
        // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
        objectFit='contain'
        layout='fill'
        alt={alt + ""}
      />
    </div>
    // <React.Fragment>
    //   {isImageLoading && (
    //     <div className={`bg-[#202020] animate-pulse ${className}`}></div>
    //   )}
    //   <Image
    //     src={src}
    //     // className={`${className} ${isImageLoading ? 'hidden' : 'block'}`}
    //     onLoad={() => {
    //       console.log("asdfasdfasd")
    //       setIsImageLoading(false);
    //     }}
    //     onError={() => {
    //       console.log("asdfasdf")
    //       setIsImageLoading(true);
    //     }}
    //     layout='fill'
    //     alt={alt + ""}
    //   />
    // </React.Fragment>
  );
};
export default LoadImage;
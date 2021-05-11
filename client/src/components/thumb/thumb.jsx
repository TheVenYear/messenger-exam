import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Thumb = ({ image, ...props }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (!image) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setSrc(reader.result);
    };
    reader.readAsDataURL(image);
  }, [image]);

  return (
    <Avatar
      {...props}
      style={{
        height: '150px',
        width: '150px',
      }}
      src={src || '/broken-image.jpg'}
      alt={image?.name}
    />
  );
};

Thumb.propTypes = {
  image: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Thumb;

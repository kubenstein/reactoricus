import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const MapEditorModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('mapEditorOpened');
    return () => {
      document.body.classList.remove('mapEditorOpened');
    };
  });

  return (
    <div styleName="mapEditorModal" id="gameModal">
      <FunctionLink styleName="close" onClick={onClose}>✖</FunctionLink>
    </div>
  );
};

MapEditorModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MapEditorModal;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import AlgorithmEditor from 'components/AlgorithmEditor';
import UnityPlayer from 'components/UnityPlayer';
import PlayButton from 'components/PlayButton';
import ResetButton from 'components/ResetButton';

import './styles.css';

const GameModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('gameModalOpened');
    return () => {
      document.body.classList.remove('gameModalOpened');
    };
  });

  return (
    <div styleName="gameModal" id="gameModal">
      <FunctionLink styleName="close" onClick={onClose}>✖</FunctionLink>
      <UnityPlayer styleName="unityPlayer" />
      <PlayButton styleName="playButton" />
      <ResetButton styleName="resetButton" />
      <AlgorithmEditor styleName="algorithmEditor" />
    </div>
  );
};

GameModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default GameModal;

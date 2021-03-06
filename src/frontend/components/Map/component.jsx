import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import GameModal from 'components/GameModal';

import { mapShape } from 'lib/shapes';

import './styles.css';

const Map = ({ isOpen, onClick, map: { name, cloudinaryPublicId, finishedCount } }) => (
  <>
    {isOpen && <GameModal />}
    <div styleName="map">
      <FunctionLink onClick={onClick}>
        <img
          alt="map preview"
          src={
            cloudinaryPublicId
              ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/w_460,h_360,c_crop/${cloudinaryPublicId}`
              : '/images/map_unknown.jpg'
          }
        />
      </FunctionLink>
      <div styleName="info">
        <small styleName="name">
          map name:
          <span>
            {` ${name}`}
          </span>
        </small>
        <small styleName="counter" title="Count of Finished Runs">
          {`✔ ${finishedCount}`}
        </small>
      </div>
    </div>
  </>
);

Map.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  map: mapShape.isRequired,
};

export default Map;

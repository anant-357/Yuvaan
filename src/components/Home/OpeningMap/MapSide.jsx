import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class MapSide extends PureComponent {
  render() {
    const { side, isback, map } = this.props;
    const clsMap = `fp-front fp-map${map}`;
    const clsSide = `fp-map-side side-${side}`;
    return (
      <div className={clsSide}>
        <div className={clsMap} />
        {isback === true && <div className="fp-back" />}
      </div>
    );
  }
}

MapSide.propTypes = {
  side: PropTypes.number.isRequired,
  map: PropTypes.number.isRequired,
  isback: PropTypes.bool.isRequired
};
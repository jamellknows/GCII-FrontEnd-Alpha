// src/Globe.js
import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

class Globe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotation: 0,
    };
  }

  componentDidMount() {
    this.startRotationAnimation();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrame);
  }

  startRotationAnimation = () => {
    const animate = () => {
      this.setState((prevState) => ({
        rotation: prevState.rotation + 0.2,
      }));

      this.animationFrame = requestAnimationFrame(animate);
    };

    this.animationFrame = requestAnimationFrame(animate);
  };

  render() {
    const projection = d3.geoOrthographic()
      .fitSize([this.props.size, this.props.size], this.props.geoJson)
      .rotate([this.state.rotation]);

    const geoGenerator = d3.geoPath().projection(projection);
    const pathString = geoGenerator(this.props.geoJson);

    return (
      <svg width={this.props.size} height={this.props.size}>
        <path d={pathString} />
      </svg>
    );
  }
}

export default Globe;

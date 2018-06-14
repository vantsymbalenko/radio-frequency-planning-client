import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import { toggleParams } from "../actions/toggleParams";
import { calculate } from "../actions/calculate";

class ParametersOfCalculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      antennaName: "",
      longitude: "",
      latitude: "",
      antennaHeight: "",
      radioClimate: "",
      polarization: "",
      fractionOfSituation: "",
      fractionOfTime: "",
      power: ""
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = e => {
    if (ReactDOM.findDOMNode(this.parameterWindowRef).contains(e.target)) {
      /** this meant that click was inside area **/
    } else if (this.props.show) {
      this.props.toggleParams();
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  calculate = e => {
    e.preventDefault();
    this.props.calculate(this.state);
  };

  render() {
    return (
      <ParametersBody
        show={this.props.show}
        ref={node => (this.parameterWindowRef = node)}
      >
        <Form>
          <Legend>This is legend</Legend>
          <Label>
            Name of Antenna
            <Input
              type={"text"}
              name={"antennaName"}
              onChange={this.handleChange}
              value={this.state.antennaName}
            />
          </Label>
          <Label>
            Longitude
            <Input
              type={"text"}
              name={"longitude"}
              onChange={this.handleChange}
              value={this.state.longitude}
            />
          </Label>
          <Label>
            Latitude
            <Input
              type={"text"}
              name={"latitude"}
              onChange={this.handleChange}
              value={this.state.latitude}
            />
          </Label>
          <Label>
            Height of Antenna (in meters)
            <Input
              type={"number"}
              min={0}
              step={1}
              name={"antennaHeight"}
              onChange={this.handleChange}
              value={this.state.antennaHeight}
            />
          </Label>
          <Label>
            Fraction of situation (%)
            <Input
              type={"number"}
              max={100}
              min={0}
              name={"fractionOfSituation"}
              value={this.state.fractionOfSituation}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Fraction of Time (%)
            <Input
              type={"number"}
              max={100}
              min={0}
              name={"fractionOfTime"}
              value={this.state.fractionOfTime}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Polarization
            <Select
              name={"polarization"}
              onChange={this.handleChange}
              value={this.state.polarization}
            >
              <Option value={0}>Horizontal</Option>
              <Option value={1}>Vertical</Option>
            </Select>
          </Label>
          <Label>
            ERP (in Watts, optional)
            <Input
              type={"number"}
              min={0}
              name={"power"}
              value={this.state.power}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Radio Climate
            <Select
              name={"radioClimate"}
              value={this.state.radioClimate}
              onChange={this.handleChange}
            >
              <Option value={1}>1: Equatorial (Kongo)</Option>
              <Option value={2}>2: Continental Subtropical (Sudan)</Option>
              <Option value={3}>
                3: Maritime Subtropical (West coast of Africa)
              </Option>
              <Option value={4}>4: Desert (Sahara)</Option>
              <Option value={5}>5: Continental Temperature</Option>
              <Option value={6}>
                6: Maritime Temperature, over land (UK and West coast of US &
                EU)
              </Option>
              <Option value={7}>7: Maritime temperature, over sea</Option>
            </Select>
          </Label>
          <Button
            type={"submit"}
            disabled={this.props.requestStatus}
            onClick={this.calculate}
          >
            Calculate
          </Button>
        </Form>
      </ParametersBody>
    );
  }
}

ParametersOfCalculation.defaultProps = {
  show: false
};

ParametersOfCalculation.propTypes = {
  show: PropTypes.bool,
  requestStatus: PropTypes.bool,
  toggleParams: PropTypes.func
};

const mapStateToProps = state => ({
  requestStatus: state.appData.requestStatus
});

const mapStateToDispatch = {
  toggleParams,
  calculate
};

export default connect(mapStateToProps, mapStateToDispatch)(
  ParametersOfCalculation
);

const ParametersBody = styled.div`
  width: ${props => (props.show ? "375px" : "0")};
  position: absolute;
  border: none;
  height: 600px;
  transition: all 0.375s ease-in-out;
  z-index: 99;
  background: white;
  border-radius: 5px;
  top: 5px;
  left: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 5px;
`;

const Legend = styled.legend`
  width: 100%;
  height: 40px;
  color: white;
  background: gray;
  line-height: 40px;
  padding: 0 10px;
`;

const Label = styled.label`
  width: 100%;
  color: gray;
  font-size: 16px;
  display: block;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 95%;
  display: block;
  height: 35px;
  border: 1px solid gray;
  color: darkgrey;
  font-size: 20px;
  line-height: 35px;
  margin-top: 5px;
  border-radius: 3px;
  padding: 0 5px;
`;

const Select = styled.select`
  width: 98%;
  height: 35px;
  border: 1px solid gray;
  color: darkgrey;
  line-height: 35px;
  border-radius: 3px;
  margin-top: 5px;
  padding: 0 5px;
  font-size: 20px;
`;

const Option = styled.option`
  height: 35px;
  line-height: 35px;
  color: darkgrey;
  font-size: 20px;
  padding: 0 5px;
  width: 40px;
`;

const Button = styled.button`
  margin: 8px 0;
  width: 98%;
  height: 40px;
  background: darkgray;
  border: 1px solid gray;
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 3px;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: lightgray;
  }
`;

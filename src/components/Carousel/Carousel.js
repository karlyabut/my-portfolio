import React from 'react';
import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';

const noOfItems = items.length;
const noOfCards = 2;
const autoPlayDelay = 3000;
const chevronWidth = 50;

const Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 350px;
  background: url('${props => props.src}');
  background-size:100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50px;
`;

const carouselItems = myitems => range(noOfItems).map(index => (
  <SlideItem key={index} src={myitems[index%myitems.length]}>
  </SlideItem>
));

class AutoPlayCarousel extends React.Component {
  constructor(props) {
    super(props)
  };
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    console.log("Asdasd", this.props.propstopass)
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems(this.props.items)}
        />
      </Wrapper>
    );
  }
}
export default AutoPlayCarousel;
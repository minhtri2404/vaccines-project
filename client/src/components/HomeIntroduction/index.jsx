import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import introduction from '../../assets/images/introduction.jpg';
import SaleOff01 from '../../assets/images/SaleOff01.jpg';
import SaleOff02 from '../../assets/images/SaleOff02.jpg';
import SaleOff03 from '../../assets/images/SaleOff03.jpg';
import SaleOff04 from '../../assets/images/SaleOff04.jpg';
import SaleOff05 from '../../assets/images/SaleOff05.jpg';
import theme from '../../configs/theme.config';
import useStyle from './style';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'SaleOff01',
    imgPath: SaleOff01,
  },
  {
    label: 'SaleOff02',
    imgPath: SaleOff02,
  },
  {
    label: 'SaleOff03',
    imgPath: SaleOff03,
  },
  {
    label: 'SaleOff04',
    imgPath: SaleOff04,
  },
  {
    label: 'SaleOff05',
    imgPath: SaleOff05,
  },
];

function SaleOff() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Container disableGutters maxWidth="100%">
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents>
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Container>
    </Box>
  );
}

function Introduction() {
  const classes = useStyle(theme);
  return (
    <Box className={classes.introduction}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center">
          <Box width="30rem" flexShrink={0} marginRight="1rem">
            <p
              style={{
                borderBottom: 'solid 1px',
                borderColor: 'grey.400',
                paddingBottom: '0.25rem',
              }}>
              <strong>GI???I THI???U</strong>
            </p>
            <p>
              H??? th???ng ti??m ch???ng VNVC (thu???c C??ng ty C??? ph???n Vacxin Vi???t Nam)
              ch??nh th???c ??i v??o ho???t ?????ng t??? th??ng 6 n??m 2017. Trong b???i c???nh
              th??? gi???i ??ang ph???i ??????ng ?????u v???i t??nh tr???ng bi???n ?????i ph???c t???p c???a
              c??c ch???ng vi khu???n g??y b???nh c??ng nh?? s??? thi???u h???t v???c xin t???i Vi???t
              Nam nh?? hi???n nay, H??? th???ng ti??m ch???ng VNVC ra ?????i nh???m cung c???p
              cho tr??? em Vi???t Nam nh???ng lo???i v???c xin c?? ch???t l?????ng t???t nh???t c??ng
              v???i h??? th???ng ph??ng ti??m ch???ng an to??n, hi???n ?????i v?? cao c???p.
            </p>
            <p>
              V???i nh???ng m???c ti??u ????, C??ng ty VNVC ???? x??y d???ng d??y chuy???n b???o
              qu???n l???nh (Cold chain) ?????t ti??u chu???n GSP ???
            </p>
            <a href="/" style={{ float: 'right', paddingBottom: '0.25rem' }}>
              Xem th??m
            </a>
          </Box>
          <Box flexShrink={0}>
            <img height="100%" src={introduction} alt="introduction" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function HomeIntroduction() {
  return (
    <>
      <SaleOff />
      <Introduction />
    </>
  );
}

export default HomeIntroduction;

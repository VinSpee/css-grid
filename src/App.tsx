/** @jsx jsx */

// @ts-ignore
import * as React from 'react';
import { jsx, sx, View } from '@tedconf/monterey';
import Text from './text';
import TalkUnit from './talk-unit';
import Underlined from './underlined';
import User from './user';
import Endorsement from './endorsement';
import LikeButton from './like-button';
import useContainerQuery from './use-breakpoint';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import useWindowSize from './use-window-size';
const MOCK = {
  COPY: `I have the same experience about control my emotion, I mean responsible for that. so I believe that in all cases about in our life I am responsible and nothing else can play the role. Thank you it is great to review my experience blindness and make tomorrow.`,
};

const App = () => {
  const {
    ref: trendingRef,
    getStyleForBreakpoint: trendingBp,
  } = useContainerQuery({
    breakpoints: [400, 600, 768],
  });
  const { getStyleForBreakpoint: bp } = useWindowSize();

  console.log({
    orientation: bp(['horizontal', null, 'vertical']),
    visibleSlides: trendingBp([1.2, 1.5, 2.1, 3]),
  });

  return (
    <View
      sx={{
        minHeight: '100vh',
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
      }}
    >
      <View
        sx={{
          display: ['flex', null, null, 'grid'],
          width: '100%',
          gridGap: 15,
          // @ts-ignore
          gridTemplateColumns: (theme) =>
            `minmax(60%, 2fr) minmax(${theme.sizes[57]}, ${theme.sizes[83]})`,
          paddingX: 4,
          paddingY: 15,
        }}
      >
        <View
          sx={{
            width: '100%',
            alignItems: 'stretch',
            gridRow: 1,
            gridColumn: 1,
            alignSelf: 'flex-end',
          }}
        >
          <Underlined>
            <Text variant={['4b', null, '5']}>Newest talks</Text>
          </Underlined>
        </View>
        <View
          sx={{
            width: '100%',
            alignItems: 'stretch',
            gridRow: 2,
            gridColumn: 1,
          }}
        >
          <View sx={{ marginBottom: 8 }}>
            <TalkUnit
              stacked
              title="How I made friends with reality"
              src="https://loremflickr.com/1280/720/dog?lock=10"
            />
          </View>
        </View>
        <View
          sx={{ gridRow: 3, gridColumn: 1, alignItems: 'stretch' }}
          id="newestTalks"
        >
          <View sx={{ width: '100%', maxWidth: 51 }}>
            <User
              name="Kristin Watson"
              byline="Role at Organization"
              photoUrl="https://loremflickr.com/250/250/dog?lock=8"
            />
          </View>
          <View
            sx={{
              width: '100%',
              color: 'gray.0',
              marginTop: 5,
              marginBottom: 8,
              paddingX: 3,
            }}
          >
            <Endorsement disclaimer="This endorsement was picked based on your topic interests">
              {MOCK.COPY}
            </Endorsement>
            <View sx={{ marginTop: 6 }}>
              <LikeButton count={127} />
            </View>
          </View>
        </View>
        <View
          id="featuredPeople"
          sx={{
            width: '100%',
            alignItems: 'stretch',
            gridRow: 4,
            gridColumn: 1,
          }}
        >
          <View
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridRowGap: 8,
              gridGap: 10,
            }}
          >
            <View>
              <User
                name="Kristin Watson"
                byline="Role at Organization"
                photoUrl="https://loremflickr.com/250/250/dog?lock=8"
              />
            </View>
            <View>
              <User
                name="Kristin Watson"
                byline="Role at Organization"
                photoUrl="https://loremflickr.com/250/250/dog?lock=8"
              />
            </View>
            <View>
              <User
                name="Kristin Watson"
                byline="Role at Organization"
                photoUrl="https://loremflickr.com/250/250/dog?lock=8"
              />
            </View>
            <View>
              <User
                name="Kristin Watson"
                byline="Role at Organization"
                photoUrl="https://loremflickr.com/250/250/dog?lock=8"
              />
            </View>
          </View>
        </View>
        <View
          sx={{
            // @ts-ignore
            gridColumnStart: 2,
            alignSelf: 'flex-end',
            gridRow: 1,
          }}
        >
          <Underlined>
            <Text variant={['2b', '3b']}>Trending</Text>
          </Underlined>
        </View>
        <View
          // @ts-ignore
          ref={trendingRef}
          id="trending"
          sx={{
            // @ts-ignore
            gridColumnStart: 2,
            gridRow: '2 / -1',
          }}
        >
          <View sx={{ display: 'block', marginX: ['release', null, null, 0] }}>
            <CarouselProvider
              isIntrinsicHeight={bp([true, null, false])}
              orientation={bp(['horizontal', null, 'vertical'])}
              totalSlides={3}
              visibleSlides={bp([trendingBp([1.2, 1.5, 2.1, 3]), null, 3])}
              naturalSlideHeight={340}
              naturalSlideWidth={320}
              css={sx({
                '& .carousel__slider--vertical .carousel__slide': {
                  height: 'auto',
                  paddingBottom: '0 !important',
                },
              })}
            >
              <Slider>
                <Slide index={0}>
                  <View sx={{ marginBottom: 10, paddingX: '10px' }}>
                    <TalkUnit
                      stacked
                      src="https://loremflickr.com/720/405/dog?lock=6"
                      title="The troubling reason why vaccines are made too late ... if they're made at all"
                    />
                  </View>
                </Slide>
                <Slide index={1}>
                  <View sx={{ marginBottom: 10, paddingX: '10px' }}>
                    <TalkUnit
                      stacked
                      title={`"Everything happens for a reason" — and other lies I've loved`}
                      src="https://loremflickr.com/720/405/dog?lock=5"
                    />
                  </View>
                </Slide>
                <Slide index={2}>
                  <View sx={{ marginBottom: 10, paddingX: '10px' }}>
                    <TalkUnit
                      stacked
                      title={`"Everything happens for a reason" — and other lies I've loved`}
                      src="https://loremflickr.com/720/405/dog?lock=8"
                    />
                  </View>
                </Slide>
              </Slider>
            </CarouselProvider>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

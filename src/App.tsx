/** @jsx jsx */

// @ts-ignore
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

  return (
    <View
      sx={{
        minHeight: '100vh',
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <View
        sx={{
          display: ['flex', null, null, 'grid'],
          width: '100%',
          gridGap: [6, 12],
          gridRowGap: [6],
          maxWidth: 300,
          marginX: 'auto',
          // @ts-ignore
          gridTemplateColumns: [
            'minmax(60%, 3fr) 3fr 3fr',
            null,
            null,
            null,
            'minmax(50%, 3fr) 3fr 3fr',
          ],
          gridTemplateRows: 'auto auto auto auto',
          paddingX: [4, null, 6],
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
          <View sx={{ marginBottom: [2, null, null, 0] }}>
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
          <View
            sx={{ width: '100%', maxWidth: bp(['100%', null, null, null, 51]) }}
          >
            <User
              name="Kristin Watson"
              byline="Role at Organization"
              onFollow={() => {}}
              inline={bp([true, null, null, null, false])}
              photoUrl="https://loremflickr.com/250/250/dog"
            />
          </View>
          <View
            sx={{
              width: '100%',
              color: 'gray.0',
              marginTop: 5,
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
          sx={{
            width: '100%',
            alignItems: 'stretch',
            gridRow: [4, null, null, null, 1],
            gridColumn: [1, null, null, null, 3],
            marginTop: [6, null, 0],
            alignSelf: 'flex-end',
          }}
        >
          <Underlined>
            <Text variant="3b">Featured people</Text>
          </Underlined>
        </View>
        <View
          id="featuredPeople"
          sx={{
            width: '100%',
            alignItems: 'stretch',
            // @ts-ignore
            gridColumnStart: [null, null, null, null, 3],
            gridRow: [5, null, null, null, '2 / -1'],
            maxWidth: [null, null, null, null, 80],
          }}
        >
          <View
            sx={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: [-4, null, 0],
              // @ts-ignore
              '& > *': {
                marginBottom: 4,
                paddingX: [4, null, null, null, 0],
                '&:nth-of-type(even)': {
                  paddingLeft: 0,
                },
                width: '25%',
                '& > *': {
                  // maxWidth: 35,
                },
              },
            }}
          >
            <View>
              <User
                name="Kristin Watsonfdklasnfewnqleqnkflewnqklfewqfnkqfew"
                byline="Role at Organization"
                photoUrl="https://loremflickr.com/250/250/dog"
                onFollow={() => {}}
                stacked
              />
            </View>
            <View>
              <User
                name="Kristin Watsonfdklasnfewnqleqnkflewnqklfewqfnkqfew"
                byline="Role at Organization"
                photoUrl="https://loremflickr.com/250/250/dog"
                onFollow={() => {}}
                stacked
              />
            </View>
            <View>
              <User
                name="Kristin Watson"
                byline="Role at Organization"
                photoUrl="https://loremflickr.com/250/250/dog"
                onFollow={() => {}}
                stacked
              />
            </View>
            <View>
              <User
                name="Kristin Watson"
                byline="Role at Organization"
                photoUrl="https://loremflickr.com/250/250/dog"
                onFollow={() => {}}
                stacked
              />
            </View>
          </View>
        </View>
        <View
          sx={{
            // @ts-ignore
            gridColumn: ['2 / -1', null, null, null, '2 / -2'],
            alignSelf: [null, null, null, 'flex-end'],
            gridRow: 'auto',
            marginTop: [6, null, 0],
          }}
        >
          <Underlined>
            <Text variant={['3b']}>Trending</Text>
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
            gridColumn: ['2 / -1', null, null, null, '2 / -2'],
          }}
        >
          <View
            sx={{
              display: 'block',
              marginX: ['release', null, null, 0],
            }}
          >
            <CarouselProvider
              isIntrinsicHeight={bp([true, null, false])}
              orientation={bp(['horizontal', null, 'vertical'])}
              totalSlides={3}
              visibleSlides={bp([trendingBp([1.2, 2.1, 3, 3]), null, 3])}
              naturalSlideHeight={340}
              naturalSlideWidth={320}
              touchEnabled={bp([true, null, false])}
              dragEnabled={bp([true, null, false])}
              css={sx({
                '& .carousel__slider-tray-wrap--vertical': {
                  height: '100% !important',
                  paddingBottom: '0 !important',
                },
                '& .carousel__slider--vertical .carousel__slide': {
                  height: 'auto',
                  paddingBottom: '0 !important',
                },
              })}
            >
              <Slider>
                <Slide index={0}>
                  <View
                    sx={{ marginBottom: 10, paddingX: ['10px', null, null, 0] }}
                  >
                    <TalkUnit
                      stacked
                      src="https://loremflickr.com/720/405/dog?lock=6"
                      title="The troubling reason why vaccines are made too late ... if they're made at all"
                    />
                  </View>
                </Slide>
                <Slide index={1}>
                  <View
                    sx={{ marginBottom: 10, paddingX: ['10px', null, null, 0] }}
                  >
                    <TalkUnit
                      stacked
                      title={`"Everything happens for a reason" — and other lies I've loved`}
                      src="https://loremflickr.com/720/405/dog?lock=5"
                    />
                  </View>
                </Slide>
                <Slide index={2}>
                  <View
                    sx={{ marginBottom: 10, paddingX: ['10px', null, null, 0] }}
                  >
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

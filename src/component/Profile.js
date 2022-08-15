import {
  Box,
  Button,
  Image,
  Stack,
  Text,
  Link,
  Textarea,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputGroup,
  Divider,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
  return (
    <Box
      bg="#00212D"
      w="full"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="base-start"
      flexDirection="column"
    >
      <Box w={['full', '50%']} mt="6rem">
        <Box
          display="flex"
          justifyContent="center"
          flexDirection={['column', 'row']}
          alignItems="center"
          gap="3"
        >
          <Box
            bg="#D9D9D9"
            display="flex"
            alignItems="base-start"
            justifyContent="center"
            position="relative"
            borderRadius="50%"
            w={['123.75px', '136px']}
            h={['123.75px', '136px']}
          >
            <Image src="assets/DP.png" boxSize="100%" alt="" />
          </Box>

          <Box>
            <Text fontWeight="600" color="#fff" fontSize={['16px', '20px']}>
              Tosin Jegede
            </Text>
            <Text fontSize={['14px', '16px']} color="#3DD368">
              Youth Corper
            </Text>
            <Box display="flex" gap="2">
              <Image
                src="assets/Location.png"
                alt="location"
                boxSize={['12px', '16px']}
              />
              <Text color="#fff" fontSize={['12px', '14px']}>
                Add location
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          mt="1rem"
          justifyContent="center"
          alignItems="center"
          gap="10"
        >
          <VStack spacing="-1">
            <Text fontWeight="600" color="#fff" fontSize={['16px', '20px']}>
              2k
            </Text>
            <Text fontWeight="400" color="#C5CED0" fontSize={['12px', '16px']}>
              Followers
            </Text>
          </VStack>
          <Image src="/assets/line.png" alt="line" />
          <VStack spacing="-1">
            <Text fontWeight="600" color="#fff" fontSize={['16px', '20px']}>
              1.5k
            </Text>
            <Text fontWeight="400" color="#C5CED0" fontSize={['12px', '16px']}>
              Following
            </Text>
          </VStack>
        </Box>
        {/* button */}
        <Box
          display="flex"
          my="1rem"
          ml={['0', '2.5rem']}
          alignItems="center"
          justifyContent="center"
          gap="5"
        >
          <Stack>
            <Button
              w={['96px', '120px']}
              fontSize="12px"
              h="28px"
              color="#041F29"
              borderRadius="4px"
              p="10px"
              bg="linear-gradient(90deg, rgba(254,151,48,1) 0%, rgba(251,80,70,1) 88%)"
            >
              Edit profile
            </Button>
          </Stack>
          <Stack>
            <Button
              w={['96px', '120px']}
              fontSize="12px"
              h="28px"
              color="#fff"
              borderRadius="4px"
              p="10px"
              bg="none"
              border="1px solid "
              _hover={{
                background: 'none',
              }}
              style={{
                borderRadius: '50%',
                border: '1x solid',
                borderImageSlice: 1,
                borderWidth: '1px',
                boxShadow:
                  '1px 1px 1px 1px linear-gradient(90deg, rgba(254,151,48,1) 0%, rgba(251,80,70,1) 88%)',
                backgroundClip: 'content-box, border-box',
                borderImageSource:
                  ' linear-gradient(90deg, rgba(254,151,48,1) 0%, rgba(251,80,70,1) 88%)',
              }}
            >
              Invite Friends
            </Button>
          </Stack>
          <Stack display={['none', 'block']}>
            <Image src="assets/ring.png" alt="dot" />
          </Stack>
        </Box>

        {/* textarea */}

        <Box
          display="flex"
          mt="1rem"
          alignItems="center"
          justifyContent="center"
          position="relative"
          gap="5"
        >
          <Textarea
            w={['75%', '401px']}
            h={['93px', '1.4px']}
            display={['none','block']}
            placeholder="This is your Bio. Tell your story"
            textAlign="center"
            color='#566467'
            resize="none"
            fontSize={['12px', '14px']}
            py="1.5rem"
            outline="0 !important"
            _focus={{ outline: 'none !important' }}
            boxShadow="none !important"
            style={{
              border: '1x solid',
              borderImageSlice: 1,
              borderWidth: '1px',
              boxShadow:
                '1px 1px 1px 1px linear-gradient(90deg, rgba(254,151,48,1) 0%, rgba(251,80,70,1) 88%)',
              backgroundClip: 'content-box, border-box',
              borderImageSource:
                ' linear-gradient(90deg, rgba(254,151,48,1) 0%, rgba(251,80,70,1) 88%)',
            }}
          />
           <Textarea
            w={['75%', '401px']}
            h={['93px', '1.4px']}
            display={['block','none']}
            placeholder="A brief description of yourself"
            textAlign="center"
            color='#566467'
            resize="none"
            fontSize={['12px', '14px']}
            py="1.5rem"
            outline="0 !important"
            _focus={{ outline: 'none !important' }}
            boxShadow="none !important"
            style={{
              border: '1x solid',
              borderImageSlice: 1,
              borderWidth: '1px',
              boxShadow:
                '1px 1px 1px 1px linear-gradient(90deg, rgba(254,151,48,1) 0%, rgba(251,80,70,1) 88%)',
              backgroundClip: 'content-box, border-box',
              borderImageSource:
                ' linear-gradient(90deg, rgba(254,151,48,1) 0%, rgba(251,80,70,1) 88%)',
            }}
          />
          <Image
            src="assets/left_quote.png"
            position="absolute"
            left={['15%', ' 24.27%']}
            right=" 0"
            bg="#00212D"
            top=" -10%"
            bottom=" 25.58%"
            alt="dot"
          />
          <Image
            src="assets/right_quote.png"
            bg="#00212D"
            position="absolute"
            m={['1.5rem', '.75rem']}
            left="70.73%"
            right="0"
            top="55"
            bottom="0"
            alt="dot"
          />
        </Box>
        {/* interest */}
        <Box
          display="flex"
          mt="1rem"
          alignItems="center"
          justifyContent="center"
          gap="5"
        >
          <InputGroup
            w={['80%', '33.5rem']}
            h={['44px','49px']}
            bg="#012B37"
            border="none"
            display="flex"
            borderRadius="12px"
            alignItems='center'
            justifyContent="space-between"
            outline="none"
          >
            <InputLeftElement
              pointerEvents="none"
              w={['5rem', '5rem']}
              h='full'
              p='.15rem'
              color="#fff"
              fontSize={['12px', '14px']}
              borderRight="1px solid #033945"
              children="Interests"
            />
            <Input
              type="text"
              color="#878787"
              w="20rem"
              fontWeight="500"
              borderRadius="0px"
              fontSize={['12px','14px']}
              outline="0 !important"
              _active={{
                border: 'none !important',
                outline: 'none !important',
              }}
              _hover={{ border: 'none !important', outline: 'none !important' }}
              _focus={{ outline: 'none !important' }}
              border="none !important"
              boxShadow="none !important"
              ml="3rem"
              placeholder="Add your interests"
            />
          </InputGroup>
        </Box>
      </Box>
      <Divider mt="2rem" h="2px" w="full" borderBottom="none" bg="#033945" />
      <Box
        mt="2rem"
        w={['full', '50%']}
        h="40vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          fontWeight="600"
          color=" #C5CED0"
          fontSize={['16px', '24px']}
          textAlign="center"
        >
          Timeline
        </Text>
        <Tabs isFitted m={['auto','0']} w={['90%', '536px']}>
          <TabList mb="1em">
            <Tab
              color="#878787"
              fontWeight="600"
              fontSize={['14px', '18px']}
              borderBottom="2px solid #878787"
              _selected={{
                color: '#3DD368',
                fontWeight: '700',
                borderBottom: '2px solid #3DD368',
              }}
            >
              Gallery
            </Tab>
            <Tab
              color="#878787"
              fontWeight="600"
              fontSize={['14px', '18px']}
              borderBottom="2px solid #878787"
              _selected={{
                color: '#3DD368',
                fontWeight: '700',
                borderBottom: '2px solid #3DD368',
              }}
            >
              Posts
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              flexDirection="column"
              alignItems="center"
              gap="3"
              display="flex"
            >
              <Text
                textAlign="center"
                color="#C5CED0"
                fontSize="14px"
                fontWeight="400"
                display={['none', 'block']}
              >
                Add Photos to your gallery to make your profile pop
              </Text>
              <Button
                w={['130px', '130px']}
                fontSize="14px"
                h="30px"
                fontWeight="400"
                color="#fff"
                borderRadius="24px"
                p="10px"
                bg="none"
                border="1px solid #ED7832"
                _hover={{
                  background: 'none',
                }}
              >
                <Image src="assets/add-icon.png" alt="" boxSize="" /> &nbsp; Add
                Photos
              </Button>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Stack
        direction="row"
        p=".5rem"
        gap={['6', '6']}
        borderTop="2px solid #033945"
        display={['flex', 'none']}
        w="full"
        justifyContent='space-evenly'
        alignItems="center"
      >
        <Link>
          {' '}
          <Image src="/assets/home.png" alt="home" />
        </Link>
        <Link>
          {' '}
          <Image src="/assets/connect.png" alt="connect" />
        </Link>
        <Link>
          {' '}
          <Image
            src="/assets/Post icon.png"
            alt="post"
            display={['flex', 'none']}
          />
        </Link>
        <Link>
          {' '}
          <Image src="/assets/chat.png" alt="chat" />
        </Link>
        <Link>
          {' '}
          <Image src="/assets/bell.png" alt="bell" />
        </Link>
      </Stack>
    </Box>
  );
};

export default Profile;

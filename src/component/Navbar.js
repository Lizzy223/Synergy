import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Image,
  Stack,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const AddBgOnScroll = () => {
    const scrollHeight = 100;
    const pos = window.scrollY;

    if (pos >= scrollHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', AddBgOnScroll);
  }, []);

  const dropDown = useRef(null);

  return (
    <Box position="relative">
      <Box
        w="100%"
        bg="#012B37"
        h="4.8rem"
        display={['block', 'flex']}
        justifyContent="space-evenly"
        alignItems="center"
        ref={dropDown}
        transition={navbar ? '0.5s ease' : ''}
        pos="sticky"
        position="fixed"
        zIndex={5}
        // bottom="0"
        // right='0'
      >
        <Stack display={['none', 'flex']}>
          <Image src="/assets/Logo.png" alt="logo" />
        </Stack>
        <Stack display={['none', 'flex']}>
          <InputGroup
            borderRadius="24px"
            w="19rem"
            border="3px solid #033945"
            outline="none"
          >
            <InputLeftElement
              pointerEvents="none"
              children={<Image src="assets/search.png" alt="search" />}
            />
            <Input
              type="text"
              color="#878787"
              fontWeight="500"
              borderRadius="24px"
              boxShadow="none !important"
              _focus={{ outline: 'none !important' }}
              border="none"
              placeholder="Search Synergy"
            />
          </InputGroup>
        </Stack>
        <Stack
          direction="row"
          gap={['6', '6']}
          display={['none', 'flex']}
          alignItems="center"
        >
          <Image src="/assets/home.png" alt="home" />
          <Image src="/assets/connect.png" alt="connect" />
          <Image
            src="/assets/Post icon.png"
            alt="post"
            display={['flex', 'none']}
          />
          <Image src="/assets/chat.png" alt="chat" />
          <Image src="/assets/bell.png" alt="bell" />
          <Image src="/assets/line.png" display={['none', 'flex']} alt="line" />
          <Stack
            direction="row"
            gap="20"
            display={['none', 'flex']}
            alignItems="center"
          >
            <Image src="/assets/box.png" alt="box" />
            <Image src="/assets/Profile.png" alt="Profile" />
          </Stack>
        </Stack>

        {/* mob ile*/}
        <Stack
          justifyContent="space-between"
          p=".5rem"
          w="full"
          flexDirection="row"
          alignItems="center"
          display={['flex', 'none']}
        >
          <Box>
            <Text fontWeight="400" color="#fff" fontSize="14px">
              9:41
            </Text>
          </Box>

          <Box
            flexDirection="row"
            alignItems="center"
            display={['flex', 'none']}
            gap="2"
          >
            <Image src="/assets/status.png" alt="bell" />
            <Image src="/assets/wifi.png" alt="bell" />
            <Image src="/assets/battery.png" alt="bell" />
          </Box>
        </Stack>
        <Box mt=".25rem">
          <Stack
            justifyContent="space-between"
            px=".5rem"
            w="full"
            flexDirection="row"
            alignItems="center"
            display={['flex', 'none']}
          >
            <Image src="/assets/arrow-left.png" alt="bell" />
            <Text fontWeight="600" color="#fff" fontSize="16px">
              Profile
            </Text>
            <Image src="/assets/dots-horizontal.png" alt="bell" />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

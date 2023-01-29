import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const avatarSrc = 'https://avatars.githubusercontent.com/u/80691042?v=4'

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      color={'whiteAlpha.700'}
      minH={'48'}
      px={'16'}
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>About Me</Text>
          <Text
            fontSize={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            I love to code Javascript and make cool stuff.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={'28'} mt={['4', '0']} src={avatarSrc} />
          <Text>HM Jawad</Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer

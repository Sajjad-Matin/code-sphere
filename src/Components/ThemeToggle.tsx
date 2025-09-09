import { useColorMode } from '@chakra-ui/react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ThemeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <button
      onClick={toggleColorMode}
    >
      {colorMode === 'dark' ? <IoMoonOutline />  : <IoSunnyOutline />}
    </button>
  )
}

export default ThemeToggle
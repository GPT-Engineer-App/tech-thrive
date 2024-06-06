import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaRocket, FaMoon, FaSun } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="container.xl" p={4} bg={bg} color={color}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="lg">
          TechStartup
        </Heading>
        <IconButton aria-label="Toggle Dark Mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </Box>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>
            Welcome to TechStartup
          </Heading>
          <Text fontSize="xl" mb={4}>
            Revolutionizing the way you do business with cutting-edge technology solutions.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </Box>
        <HStack spacing={8} justifyContent="center">
          <Box boxSize="sm">
            <Image src="https://images.unsplash.com/photo-1640622842008-1897f26aafe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlfGVufDB8fHx8MTcxNzY2ODU1NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Modern Tech Office" borderRadius="md" />
          </Box>
          <Box boxSize="sm">
            <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3MTc2Njg1NTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Collaboration" borderRadius="md" />
          </Box>
        </HStack>
        <Box textAlign="center">
          <Heading as="h3" size="lg" mb={4}>
            Our Features
          </Heading>
          <Text fontSize="md" mb={2}>
            - Innovative Solutions
          </Text>
          <Text fontSize="md" mb={2}>
            - Seamless Integration
          </Text>
          <Text fontSize="md" mb={2}>
            - 24/7 Support
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

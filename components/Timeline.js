import React, { useState } from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Button,
  List,
  ListItem,
  Icon,
  Stack,
  Divider
} from '@chakra-ui/core';

const YearDivider = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />;
};

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex align="center">
          <Icon name="check-circle" mr={2} color="whatsapp.500" />
          <Text fontWeight="medium">{title}</Text>
        </Flex>
        <Text color={color[colorMode]} ml={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const FullTimeline = () => (
  <>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2017
    </Heading>
    <List>
      <TimelineStep title="Created an IoT Platform 🔥">
        Created our very own IoT platform sitting in a garage.
      </TimelineStep>
      <TimelineStep title="Started off an adventure of a lifetime: RAZRLAB 💫">
        Got together with some amazing minds to start off a venture of our own
        in the field of IoT through RAZRLAB.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2016
    </Heading>
    <List>
      <TimelineStep title="Team Lead at ROAMWORKS 💼">
        Took the position of team lead for the company managing an amazing set
        of team members.
      </TimelineStep>
      <TimelineStep title="Google Mobile Sites Certification">
        Certified in creating, managing, measuring and optimizing mobile
        websites.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2015
    </Heading>
    <List>
      <TimelineStep title="Software Engineer at ROAMWORKS 💼">
        Took the helm of a full-stack engineer at ROAMWORKS FZ-LLC developing
        IoT solutions.
      </TimelineStep>
      <TimelineStep title="Moved Back">
        Moved back to Dubai from India.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2014
    </Heading>
    <List>
      <TimelineStep title="Senior Web Developer">
        Worked on front-end development for ERP solutions at CAASP Labs Pvt. Ltd
      </TimelineStep>
      <TimelineStep title="Graduated from Christ University 🎓">
        Completed by B.Tech in Computer Science & Engineering from Christ
        University, Bangalore, India.
      </TimelineStep>
      <TimelineStep title="Published my Research Paper">
        Published research paper entitled “The Power of Facebook API” in
        International Journal of Engineering Research and Technology (IJERT).
      </TimelineStep>
      <TimelineStep title="Syscoms Certified Web Developer">
        Taking web development as a career choice.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2013
    </Heading>
    <List>
      <TimelineStep title="Interned At Al-Hamad">
        Worked on in-house web development project.<br></br> Helped the
        organization in revision of their current payroll system which also
        included revamp of frontend re-design for the company.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2012
    </Heading>
    <List>
      <TimelineStep title="Interned at Alpha Data">
        Worked as a part of post-sales installation and support team for Alpha
        Data, Dubai, United Arab Emirates.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2010
    </Heading>
    <List>
      <TimelineStep title="Completed by Pre-University 🎓">
        Completed my pre-university from Christ University, Bangalore, India.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2009
    </Heading>
    <List>
      <TimelineStep title="Completed High School 🎓">
        Completed by schooling from Our Own English High School Dubai, United
        Arab Emirates.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      1991
    </Heading>
    <List>
      <TimelineStep title="Born 👶🏼🍼" />
    </List>
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      mt={8}
    >
      <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
        My Time on Earth... 🌍
      </Heading>

      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2019
      </Heading>
      <List>
        <TimelineStep title="MBRIF Accelerator">
          Gratified to be a part of the Mohammed Bin Rashid Innovation Fund.
        </TimelineStep>
        <TimelineStep title="Conquering GCC market">
          From the outlands to the neighborhood. Started the roll out of the
          platform to GCC countries.
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2018
      </Heading>
      <List>
        <TimelineStep title="Deployed in the UK">
          Deploy our IoT platform for the one of the largest boiler insurance
          company in the UK. Bringing in immense cost-effective efficiency in
          their business.
        </TimelineStep>
        <TimelineStep title="Built an app for the masses">
          Created our first B2C mobile application for consumer tracking with
          over 10k active users.
        </TimelineStep>
        <TimelineStep title="Moved to an Office">
          Moved ourself from a garage to an office in a prime area.
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <Button
          my={4}
          mx="auto"
          fontWeight="medium"
          rightIcon="chevron-down"
          variant="ghost"
          onClick={() => showFullTimeline(true)}
        >
          See More
        </Button>
      )}
    </Flex>
  );
};

export default Timeline;

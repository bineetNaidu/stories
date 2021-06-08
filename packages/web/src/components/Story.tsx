import { FC } from 'react';
import { User } from '../generated/graphql';
import { Avatar, WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  user: User | any;
}

export const Story: FC<Props> = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4 } }}
    >
      <WrapItem
        as={Link}
        to={`/stories/${user._id}`}
        role="group"
        border="2px"
        p={0.5}
        borderColor="linear(to-r, red.500, yellow.500)"
        borderRadius="full"
        cursor="pointer"
        boxShadow="md"
      >
        <Avatar
          _groupHover={{ transform: 'scale(1.15)' }}
          name={user.username}
          src={user.avatar!}
          transition="all"
        />
      </WrapItem>
    </motion.div>
  );
};

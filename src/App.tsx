import './App.css'
import { Container, Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { TodoList } from './components/TodoList'
import { nanoid } from 'nanoid';
import { useCallback, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export interface Todo {
  id: string,
  text: string,
  completed: boolean,
}

const initialData = [
  { id: nanoid(), text: "some task", completed: false },
  { id: nanoid(), text: "some task", completed: false },
  { id: nanoid(), text: "some task", completed: true },
  { id: nanoid(), text: "some task", completed: false },
  { id: nanoid(), text: "some task", completed: false },
];

function App() {
  const { toggleColorMode } = useColorMode();
  const [data, setData] = useState<Array<Todo>>(initialData);
  const buttonIcon = useColorModeValue(<MdDarkMode />, <MdLightMode />);

  const handleToggleTask = useCallback(
    (taskId: string) => {
      setData(previousData => {
        const data = [...previousData];
        const item = data.find(item => item.id == taskId);
        if (item) {
          item.completed = !item.completed;
        }
        return data;
      })
    },
    [],
  );

  const handleDeleteTask = useCallback(
    (taskId: string) => {
      setData(previousData => {
        const data = [...previousData];
        const index = data.findIndex(item => item.id == taskId);
        if (index !== -1) {
          data.splice(index, 1);
        }
        return data;
      })
    },
    [],
  );

  const handleNewTask = useCallback(
    (text: string) => {
      setData((previousData) => {
        const newItem = {
          id: nanoid(),
          text: text,
          completed: false,
        };
        const newData = [...previousData, newItem];
        return newData;
      });
    },
    [],
  )

  return (
    <Container maxW="container.sm" p={0}>
      <IconButton
        pos='fixed'
        top={1}
        right={1}
        aria-label=""
        onClick={toggleColorMode}
        icon={buttonIcon}>
      </IconButton>
      <Flex h="100vh" py={20}>
        <TodoList
          data={data}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
          onNewTask={handleNewTask}
        ></TodoList>
      </Flex>
    </Container>
  )
}

export default App

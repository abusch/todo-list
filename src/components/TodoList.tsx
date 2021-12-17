import { FormControl, Heading, Input, Flex } from '@chakra-ui/react'

import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Todo } from '../App';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  data: Array<Todo>,
  onToggleTask: (id: string) => void,
  onDeleteTask: (id: string) => void,
  onNewTask: (text: string) => void,
}

export const TodoList = (props: TodoListProps) => {
  const { data, onToggleTask, onDeleteTask, onNewTask } = props;
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTaskInput(e.target.value);
    },
    [],
  );
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (taskInput != '') {
        onNewTask(taskInput);
        setTaskInput('');
      }
    },
    [taskInput],
  );

  return (
    <Flex direction="column" w="100vw" h="full" p={3} gap={3} alignItems="center">
      <Heading size="2xl">Todo List</Heading>
      <form
        style={{ width: '100%' }}
        onSubmit={handleSubmit}
      >
        <FormControl id="newTaskInput">
          <Input
            type="text"
            placeholder="Add a new task"
            value={taskInput}
            onChange={handleInputChange}
          />
        </FormControl>
      </form>
      {data.map((task) => (
        <TodoItem
          key={task.id}
          data={task}
          onToggleItem={onToggleTask}
          onDeleteItem={onDeleteTask} />
      ))}
    </Flex>
  )
}

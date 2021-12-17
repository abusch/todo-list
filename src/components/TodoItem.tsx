import React from 'react'
import { Checkbox, Flex, IconButton, Text } from '@chakra-ui/react';
import { Todo } from '../App'
import { MdDelete } from 'react-icons/md';

interface TodoItemProps {
  data: Todo,
  onToggleItem: (id: string) => void,
  onDeleteItem: (id: string) => void,
}

export const TodoItem = (props: TodoItemProps) => {
  const { data, onToggleItem, onDeleteItem } = props;
  return (
    <Flex direction="row" width="full" gap={3}>
      <Checkbox
        flex="1"
        defaultChecked={data.completed}
        onChange={() => onToggleItem(data.id)}
      >
        <Text decoration={data.completed ? 'line-through' : ''}>{data.text}</Text>
      </Checkbox>
      <IconButton
        onClick={() => onDeleteItem(data.id)}
        width="auto"
        aria-label='Remove task'
        icon={<MdDelete />} />
    </Flex>
  )
} 

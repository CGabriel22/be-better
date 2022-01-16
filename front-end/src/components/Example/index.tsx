import { useState } from 'react';

import { AddIcon, RemoveIcon } from '@assets/icons';
import { IconButton } from '@components/IconButton';
import { T } from '@components/T';

import { Example_ } from './example';

interface ExampleProps {
  //propriedades
  color: string;
}

const Example: React.FC<ExampleProps> = ({ ...props }) => {
  const [number, setNumber] = useState(0);
  return (
    <Example_ color={props.color}>
      <IconButton
        data-testid="addButton"
        aria-label="menu button"
        onClick={() => setNumber(number + 1)}
      >
        <AddIcon />
      </IconButton>
      <T type="h3" as="p" data-testid="number">
        {number}
      </T>
      <IconButton
        data-testid="removeButton"
        aria-label="menu button"
        onClick={() => setNumber(number - 1)}
      >
        <RemoveIcon />
      </IconButton>
    </Example_>
  );
};

export default Example;

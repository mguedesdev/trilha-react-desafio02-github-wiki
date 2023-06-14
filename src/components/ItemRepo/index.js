import React from 'react';
import './styles';
import { ItemContainer } from './styles';

const ItemRepo = ({ repo, onRemove }) => {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel='noreferrer'>Ver repositório</a>
      <a href='#' className='remover' onClick={onRemove}>Remover</a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;

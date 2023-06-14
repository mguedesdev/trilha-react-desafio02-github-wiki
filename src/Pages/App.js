import React, { useState } from 'react';
import gitLogo from '../assets/github-logo-bc.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data?.id) {
        const isExist = repos.find((repo) => repo.id === data.id);
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
        }
      } else {
        alert('Repositório não encontrado');
      }
    } catch (error) {
      console.log('Erro ao buscar repositório:', error);
      alert('Erro ao buscar repositório');
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='logo-Github' />
      <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />

      {repos.map(repo => (
        <ItemRepo key={repo.id} repo={repo} onRemove={() => handleRemoveRepo(repo.id)} />
      ))}
    </Container>
  );
}

export default App;

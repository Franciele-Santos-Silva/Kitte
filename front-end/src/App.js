import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [animal, setAnimal] = useState({
    nome: '',
    idade: '',
    raca: '',
    peso: '',
    sexo: '',
    dono: ''
  });
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    fetchAnimais();
  }, []);

  const fetchAnimais = async () => {
    const { data, error } = await supabase.from('animais').select('*');
    if (error) console.error(error);
    else setAnimais(data);
  };

  const handleChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('animais').insert([animal]);
    if (error) alert('Erro: ' + error.message);
    else {
      alert('Animal registrado com sucesso!');
      setAnimal({ nome:'', idade:'', raca:'', peso:'', sexo:'', dono:'' });
      fetchAnimais();
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Registrar Animal</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input name="nome" placeholder="Nome" value={animal.nome} onChange={handleChange} required /><br />
        <input name="idade" placeholder="Idade" type="number" value={animal.idade} onChange={handleChange} required /><br />
        <input name="raca" placeholder="Raça" value={animal.raca} onChange={handleChange} required /><br />
        <input name="peso" placeholder="Peso" type="number" step="0.1" value={animal.peso} onChange={handleChange} required /><br />
        <input name="sexo" placeholder="Sexo (M/F)" value={animal.sexo} onChange={handleChange} required /><br />
        <input name="dono" placeholder="Dono" value={animal.dono} onChange={handleChange} required /><br /><br />
        <button type="submit">Registrar</button>
      </form>

      <h2>Animais Cadastrados</h2>
      <ul>
        {animais.map(a => (
          <li key={a.id}>
            {a.nome} | Idade: {a.idade} | Raça: {a.raca} | Peso: {a.peso} | Sexo: {a.sexo} | Dono: {a.dono}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
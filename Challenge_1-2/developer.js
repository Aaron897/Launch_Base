const developer = {
    name: 'Kaio Queiroz',
    age: 23,
    techs : [
        {tech: "JavaScript", expertise: 'Web/Mobile'},
        {tech: "Pyton", expertise: 'Data science'},
        {tech: "C++", expertise: 'Descktop'}
    ],
};

console.log(`O desenvolvedor ${developer.name} tem ${developer.age} anos e usa a tecnologia ${developer.techs[1].tech} com especialidade em ${developer.techs[1].expertise}`)
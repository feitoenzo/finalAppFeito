import { ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const HookItem = ({ name, description }) => {
  return (
    <View style={styles.hookItem}>
      <Text style={styles.hookName}>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const HookList = () => {
  const hooks = [
    {
      name: 'useState',
      description: 'Gestiona el estado local en componentes funcionales.',
    },
    {
      name: 'useEffect',
      description: 'Permite realizar efectos secundarios en componentes funcionales.',
    },
    // Agrega más hooks aquí con su nombre y descripción
  ];

  return (
    <ScrollView>
      {hooks.map((hook, index) => (
        <HookItem key={index} name={hook.name} description={hook.description} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  hookItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  hookName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HookList;


/* En este ejemplo, creamos dos componentes: HookItem y HookList. HookItem representa un elemento de la lista de hooks, mientras que HookList contiene la lista de hooks y los renderiza utilizando ScrollView.

Simplemente puedes agregar más objetos al arreglo hooks en HookList, cada uno representando un hook diferente con su nombre y descripción. Luego, en el componente principal de tu aplicación, puedes importar y usar HookList para mostrar la lista de hooks.

Espero que esto te sea útil. ¡Si tienes más preguntas o necesitas más ayuda, no dudes en preguntar! */
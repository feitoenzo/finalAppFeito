import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import React from 'react';

// Importar los hooks adicionales

// Ejemplo de importación de hook personalizado de React Navigation


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
    {
      name: 'useContext',
      description: 'Accede al contexto definido en React utilizando el patrón Context API.',
    },
    {
      name: 'useReducer',
      description: 'Proporciona una alternativa al uso de useState cuando se necesita un estado más complejo.',
    },
    {
      name: 'useCallback',
      description: 'Memoriza una función para evitar su recreación en cada renderizado.',
    },
    {
      name: 'useMemo',
      description: 'Memoriza un valor calculado en función de las dependencias especificadas.',
    },
    {
      name: 'useRef',
      description: 'Crea una referencia mutable que persiste durante toda la vida del componente.',
    },
    {
      name: 'useLayoutEffect',
      description: 'Se ejecuta de forma síncrona después de todas las mutaciones del DOM.',
    },
    {
      name: 'useNavigation',
      description: 'Permite acceder a la navegación de la aplicación en componentes funcionales.',
    },
    {
      name: 'useFocusEffect',
      description: 'Ejecuta un efecto cuando la pantalla recibe o pierde el foco.',
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


/* Como puedes ver, los hooks adicionales como useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useLayoutEffect, useNavigation, y useFocusEffect se importan desde el módulo 'react'. Si utilizas algún hook personalizado de una biblioteca como React Navigation, deberás importarlo desde el módulo correspondiente de esa biblioteca, como se muestra en el ejemplo con useNavigation y useFocusEffect importados desde '@react-navigation/native'.

Recuerda que para utilizar los hooks adicionales, necesitarás tener instaladas las bibliotecas correspondientes. Por ejemplo, si deseas utilizar los hooks de React Navigation, asegúrate de tener instalada */
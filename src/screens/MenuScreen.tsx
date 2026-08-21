import React, { useState, useMemo } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { DISHES } from '../data/mockData';
import DishCard from '../components/DishCard';
import CategoryPills from '../components/CategoryPills';
import { useCart } from '../context/CartContext';

export default function MenuScreen({ navigation }: any) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const { addItem } = useCart();

  const filtered = useMemo(
    () =>
      DISHES.filter(
        d =>
          (cat === 'All' || d.category === cat) &&
          d.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [cat, query],
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Truffle, Burger, Sushi..."
        value={query}
        onChangeText={setQuery}
        style={styles.search}
        placeholderTextColor="#aaa"
      />
      <CategoryPills selected={cat} onSelect={setCat} />
      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={i => i.id}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={{ flex: 1, marginBottom: 12 }}>
            <DishCard
              dish={item}
              onAdd={() => addItem(item)}
              onPress={() => navigation.navigate('DishDetail', { dish: item })}
            />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0', paddingTop: 50 },
  search: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
});

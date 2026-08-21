import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Dish } from '../data/mockData';

type Props = { dish: Dish; onPress: () => void; onAdd: () => void };

export default function DishCard({ dish, onPress, onAdd }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <Text style={styles.name} numberOfLines={1}>
        {dish.name}
      </Text>
      <Text style={styles.meta}>
        {dish.category} • {dish.time}
      </Text>
      <View style={styles.row}>
        <Text style={styles.price}>${dish.price}</Text>
        <TouchableOpacity onPress={onAdd} style={styles.addBtn}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
      {dish.featured && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🔥 Featured</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  image: { width: '100%', height: 90, borderRadius: 12 },
  name: { fontWeight: '700', marginTop: 8, fontSize: 13 },
  meta: { color: '#888', fontSize: 11, marginTop: 2 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    alignItems: 'center',
  },
  price: { fontWeight: '800', fontSize: 14 },
  addBtn: {
    backgroundColor: '#FF6B35',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: { color: 'white', fontWeight: '800' },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#111',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: { color: 'white', fontSize: 10, fontWeight: '700' },
});

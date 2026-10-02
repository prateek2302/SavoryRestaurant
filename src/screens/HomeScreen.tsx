import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useCart } from '../context/CartContext';
import { Category, DISHES } from '../data/mockData';
import DishCard from '../components/DishCard';
import CategoryPills from '../components/CategoryPills';

export default function HomeScreen({ navigation }: any) {
  const [category, setCategory] = useState<Category>('All');
  const { addItem } = useCart();
  const featured = DISHES.filter(d => d.featured);
  const filtered =
    category === 'All' ? DISHES : DISHES.filter(d => d.category === category);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>{'Craving\nsomething\nsavory?'}</Text>
        <Text style={styles.heroSub}>20% off today • Free delivery</Text>
      </View>

      <CategoryPills selected={category} onSelect={setCategory} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Today 🔥</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 16 }}
        >
          {featured.map(dish => (
            <DishCard
              key={dish.id}
              dish={dish}
              onPress={() => navigation.navigate('DishDetail', { dish })}
              onAdd={() => addItem(dish)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{category} Menu</Text>
        <View style={styles.grid}>
          {filtered.map(dish => (
            <View key={dish.id} style={{ marginBottom: 12 }}>
              <DishCard
                dish={dish}
                onPress={() => navigation.navigate('DishDetail', { dish })}
                onAdd={() => addItem(dish)}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0' },
  hero: {
    height: 260,
    backgroundColor: '#FF6B35',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    padding: 24,
    justifyContent: 'flex-end',
  },
  heroTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 34,
  },
  heroSub: { color: '#FFE8D6', marginTop: 8, fontWeight: '600' },
  section: { padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});

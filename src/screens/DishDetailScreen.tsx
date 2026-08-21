import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useCart } from '../context/CartContext';

export default function DishDetailScreen({ route, navigation }: any) {
  const { dish } = route.params;
  const { addItem } = useCart();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF8F0' }}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.badgeRow}>
          <Text style={styles.badge}>{dish.category}</Text>
          <Text style={styles.badge}>⭐ {dish.rating}</Text>
          <Text style={styles.badge}>⏱ {dish.time}</Text>
        </View>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.desc}>{dish.desc}</Text>
        <Text style={styles.longDesc}>
          Made with premium ingredients, wood-fired, chef special. Served hot
          and fresh. Perfect for sharing or solo craving.
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${dish.price}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              addItem(dish);
              navigation.navigate('Cart');
            }}
          >
            <Text style={styles.btnText}>Add to Cart • ${dish.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: { width: '100%', height: 320 },
  content: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
  },
  badgeRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  badge: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    overflow: 'hidden',
  },
  name: { fontSize: 26, fontWeight: '800' },
  desc: { marginTop: 12, fontSize: 15, color: '#444', lineHeight: 22 },
  longDesc: { marginTop: 12, color: '#888', lineHeight: 20 },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: { fontSize: 24, fontWeight: '800' },
  btn: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 16,
  },
  btnText: { color: 'white', fontWeight: '800' },
});

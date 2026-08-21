import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
  const { items, updateQty, total, clear, count } = useCart();

  if (items.length === 0) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Text style={{ color: '#999', fontSize: 16 }}>
          Your cart is empty 🛒
        </Text>
        <Text style={{ color: '#bbb', marginTop: 8 }}>
          Add dishes from Menu
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart • {count} items</Text>
      <FlatList
        data={items}
        keyExtractor={i => i.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>
                ${item.price} • {item.category}
              </Text>
              <View style={styles.qtyRow}>
                <TouchableOpacity
                  onPress={() => updateQty(item.id, item.qty - 1)}
                  style={styles.qtyBtn}
                >
                  <Text style={{ fontWeight: '700' }}>-</Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 14, fontWeight: '700' }}>
                  {item.qty}
                </Text>
                <TouchableOpacity
                  onPress={() => updateQty(item.id, item.qty + 1)}
                  style={styles.qtyBtn}
                >
                  <Text style={{ fontWeight: '700' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ fontWeight: '800' }}>
              ${(item.price * item.qty).toFixed(2)}
            </Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
        >
          <Text style={{ color: '#888' }}>Subtotal</Text>
          <Text style={{ fontWeight: '700' }}>${total.toFixed(2)}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '800' }}>Total</Text>
          <Text style={{ fontSize: 18, fontWeight: '800' }}>
            ${(total + 2.99).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity style={styles.checkout} onPress={clear}>
          <Text style={styles.checkoutText}>
            Checkout • ${(total + 2.99).toFixed(2)}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            color: '#aaa',
            fontSize: 11,
            marginTop: 8,
          }}
        >
          Includes $2.99 delivery
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 16,
    paddingTop: 60,
  },
  title: { fontSize: 20, fontWeight: '800', marginBottom: 16 },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  img: { width: 60, height: 60, borderRadius: 12 },
  name: { fontWeight: '700' },
  price: { color: '#888', fontSize: 12, marginTop: 2 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  qtyBtn: {
    backgroundColor: '#F5F5F5',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginTop: 'auto',
    elevation: 10,
  },
  checkout: {
    backgroundColor: '#FF6B35',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  checkoutText: { color: 'white', fontWeight: '800', fontSize: 16 },
});

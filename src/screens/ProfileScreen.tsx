import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>PJ</Text>
      </View>
      <Text style={styles.name}>Prateek Jain</Text>
      <Text style={styles.email}>Jaipur, Rajasthan • Foodie Level 5</Text>
      <View style={{ marginTop: 30, width: '100%' }}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>📦 My Orders (12)</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>📍 Saved Addresses</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>💳 Payment Methods</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>⚙️ Settings</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.version}>
        <Text style={{ color: '#aaa', fontSize: 11 }}>
          Savory v1.0 • React Native CLI • #FF6B35
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
    paddingTop: 80,
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF6B35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#fff', fontWeight: '800', fontSize: 28 },
  name: { marginTop: 12, fontSize: 18, fontWeight: '800' },
  email: { color: '#888', marginTop: 4 },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: { fontWeight: '600' },
  arrow: { color: '#ccc', fontSize: 20 },
  version: { marginTop: 40 },
});

import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/mockData';

export default function CategoryPills({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (c: any) => void;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
    >
      {CATEGORIES.map((cat: string) => (
        <TouchableOpacity
          key={cat}
          onPress={() => onSelect(cat)}
          style={[styles.pill, selected === cat && styles.active]}
        >
          <Text style={[styles.text, selected === cat && styles.activeText]}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scroll: { paddingVertical: 12 },
  pill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#eee',
  },
  active: { backgroundColor: '#111', borderColor: '#111' },
  text: { color: '#111', fontWeight: '600', fontSize: 13 },
  activeText: { color: 'white' },
});

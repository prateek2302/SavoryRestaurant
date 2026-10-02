import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CATEGORIES, Category } from '../data/mockData';

export default function CategoryPills({
  selected,
  onSelect,
}: {
  selected: Category;
  onSelect: (category: Category) => void;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.content}
    >
      {CATEGORIES.map(category => (
        <TouchableOpacity
          key={category}
          onPress={() => onSelect(category)}
          style={[styles.pill, selected === category && styles.active]}
        >
          <Text
            style={[styles.text, selected === category && styles.activeText]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scroll: { height: 56, flexGrow: 0 },
  content: {
    paddingHorizontal: 16,
    gap: 8,
    alignItems: 'center',
  },
  pill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
  },
  active: { backgroundColor: '#111', borderColor: '#111' },
  text: { color: '#111', fontWeight: '600', fontSize: 14, lineHeight: 18 },
  activeText: { color: 'white' },
});

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function BookingScreen() {
  const [form, setForm] = useState({
    name: '',
    date: 'Tonight',
    time: '19:30',
    guests: '2',
    phone: '',
  });
  const [done, setDone] = useState(false);

  const book = () => {
    if (!form.name) {
      Alert.alert('Enter name');
      return;
    }
    setDone(true);
    setTimeout(() => setDone(false), 3000);
  };

  if (done) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Text style={{ fontSize: 60 }}>🎉</Text>
        <Text style={{ fontSize: 22, fontWeight: '800', marginTop: 16 }}>
          Table Booked!
        </Text>
        <Text style={{ color: '#888', marginTop: 8, textAlign: 'center' }}>
          See you {form.date} at {form.time}
          {'\n'}for {form.guests} guests
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Table</Text>
      <Text style={styles.sub}>Reserve your spot at Savory • Jaipur</Text>

      <TextInput
        placeholder="Your name"
        value={form.name}
        onChangeText={v => setForm({ ...form, name: v })}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={form.phone}
        onChangeText={v => setForm({ ...form, phone: v })}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <TextInput
          placeholder="Date"
          value={form.date}
          onChangeText={v => setForm({ ...form, date: v })}
          style={[styles.input, { flex: 1 }]}
        />
        <TextInput
          placeholder="Time"
          value={form.time}
          onChangeText={v => setForm({ ...form, time: v })}
          style={[styles.input, { flex: 1 }]}
        />
      </View>
      <TextInput
        placeholder="Guests"
        value={form.guests}
        onChangeText={v => setForm({ ...form, guests: v })}
        style={styles.input}
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.btn} onPress={book}>
        <Text style={styles.btnText}>Confirm Reservation</Text>
      </TouchableOpacity>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>📍 Savory Jaipur</Text>
        <Text style={styles.infoText}>
          C-Scheme, Jaipur, Rajasthan • Open 11AM - 11PM • +91 90000 00000
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 24,
    paddingTop: 60,
  },
  title: { fontSize: 28, fontWeight: '800' },
  sub: { color: '#888', marginTop: 4, marginBottom: 24 },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  btn: {
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
  },
  infoTitle: { fontWeight: '700' },
  infoText: { color: '#888', marginTop: 4, fontSize: 12, lineHeight: 18 },
});

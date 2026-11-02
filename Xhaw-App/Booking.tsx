import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, 
    TouchableOpacity } from 'react-native';

export default function BookingScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationItems = [
    ['Home', 'Homepage'], 
    ['About Us', 'AboutUS'], 
    ['Overview', 'Overview'],
    ['Booking', 'Booking'], 
    ['Payment', 'Payment'],
    ['Contact Us', 'ContactUS'], 
    ['FAQ', 'FAQ'],
     ['Calculate Fees', 'CalculateFees'],
    ['Sign Up', 'Signup'],
     ['Venues', 'Venues'],
  ];

  const navigateTo = (screen) => {
    setMenuOpen(false);
    navigation?.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>NEXT LEVEL</Text>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>
          <Text style={styles.menu}>{menuOpen ? '×' : '☰'}</Text>
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.navigationMenu}>
          {navigationItems.map(([label, screen]) => (
            <TouchableOpacity key={screen} style={styles.navigationItem} onPress={() => navigateTo(screen)}>
              <Text style={styles.navigationText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={styles.pinkLine} />

      <Text style={styles.pageTitle}>BOOKING PRICES</Text>
      {/* Subtitle based on the wireframe[cite: 11] */}
      <Text style={styles.subtitle}>SELECT YOUR TOURNAMENT PROFILE</Text>

      {/* Pricing list based on the wireframe[cite: 11] */}
      <View style={styles.priceItem}>
        <Text style={styles.priceTitle}>PC Gaming Session</Text>
        <Text style={styles.priceAmount}>R100 / hr</Text>
      </View>

      <View style={styles.priceItem}>
        <Text style={styles.priceTitle}>Console Gaming</Text>
        <Text style={styles.priceAmount}>R100 / hr</Text>
      </View>

      <View style={styles.priceItem}>
        <Text style={styles.priceTitle}>VR Experience</Text>
        <Text style={styles.priceAmount}>R150 / session</Text>
      </View>

      <View style={styles.priceItem}>
        <Text style={styles.priceTitle}>Esports Tournament</Text>
        <Text style={styles.priceAmount}>R250 / entry</Text>
      </View>
      
      <View style={styles.priceItem}>
        <Text style={styles.priceTitle}>Birthday Party Package</Text>
        <Text style={styles.priceAmount}>R2,500</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121225' },

  header: { 
    height: 55, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 12 },

  logo: { 
    color: '#FFFFFF', 
    fontSize: 14, 
    fontWeight: 'bold' },

  menu: { 
    color: '#FFFFFF', 
    fontSize: 24 },

  menuButton: { 
    paddingHorizontal: 8, 
    paddingVertical: 4 },

  navigationMenu: {
    backgroundColor: '#151329', 
    paddingHorizontal: 16, 
    paddingVertical: 6 },

  navigationItem: { 
    paddingVertical: 10,
    borderBottomWidth: 1, 
    borderBottomColor: '#29243D' },

  navigationText: { 
    color: '#FFFFFF', 
    fontSize: 14 },

  pinkLine: { 
    height: 1,
    backgroundColor: '#FF00FF' },
  pageTitle: { 
    color: '#FFFFFF', 
    fontSize: 22, 
    fontWeight: 'bold',
    marginTop: 20, 
    marginLeft: 12 },

  subtitle: { 
    color: '#FF00FF', 
    fontSize: 10, 
    marginTop: 5, 
    marginLeft: 12,
    marginBottom: 20 },

  priceItem: { 
    backgroundColor: '#151329', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginHorizontal: 12, 
    marginBottom: 10, 
    padding: 15, 
    borderRadius: 7 },

  priceTitle: { 
    color: '#FFFFFF', 
    fontSize: 14, 
    fontWeight: 'bold' },

  priceAmount: { 
    color: '#FF00FF', 
    fontSize: 14, 
    fontWeight: 'bold' },
});
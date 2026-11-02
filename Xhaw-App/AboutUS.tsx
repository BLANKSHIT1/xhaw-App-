import React, { useState } from 'react';
import { View, Text, StyleSheet, 
    ScrollView, TouchableOpacity } from 'react-native';

export default function AboutScreen({ navigation }) {
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

      <Text style={styles.pageTitle}>ABOUT US</Text>
      {/* Subtitle based on the wireframe[cite: 11] */}
      <Text style={styles.subtitle}>THE ORIGIN PROTOCOL</Text>

      <View style={styles.contentBox}>
        <Text style={styles.bodyText}>
          Next Level Gaming & Esports Arena was made in 2023 by Jason Naidoo. {/*[cite: 11] */}
          The business provides a modern gaming environment where gamers can use gaming equipment, take part in esports events and socialise with other gamers. {/*[cite: 11] */}
        </Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.bodyText}>
          Located in the heart of Johannesburg, our facility boasts high-spec PCs, next-gen consoles, VR immersion pods, and dedicated racing rigs to elevate your play style to the next level. {/*[cite: 11] */}
        </Text>
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
    marginLeft: 12 },

  contentBox: { 
    backgroundColor: '#151329', 
    marginTop: 18,
    marginHorizontal: 12, 
    padding: 15, 
    borderRadius: 7 },
  bodyText: { 
    color: '#AAAAAA', 
    fontSize: 12, 
    lineHeight: 18, 
    marginBottom: 10 },
});
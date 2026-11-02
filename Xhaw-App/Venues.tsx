import React, { useState } from 'react';
import { View, Text, StyleSheet, 
    ScrollView, TouchableOpacity } from 'react-native';

export default function VenuesScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationItems = [
    ['Home', 'Home'],
    ['Plans', 'Plans'],
    ['Booking Prices', 'Booking'],
    ['Contact Us', 'Contact']
  ];

  const navigateTo = (screen) => {
    setMenuOpen(false);
    navigation?.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>

      {/* TOP NAVIGATION BAR*/}
      <View style={styles.header}>
        <Text style={styles.logo}>NEXT LEVEL</Text>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => setMenuOpen(!menuOpen)}
          style={styles.menuButton}
        >
          <Text style={styles.menu}>{menuOpen ? '×' : '☰'}</Text>
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.navigationMenu}>
          {navigationItems.map(([label, screen]) => (
            <TouchableOpacity
              key={screen}
              style={styles.navigationItem}
              onPress={() => navigateTo(screen)}
            >
              <Text style={styles.navigationText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Pink line */}
      <View style={styles.pinkLine} />

      {/* PAGE TITLE*/}
      <Text style={styles.pageTitle}>VENUES</Text>
      <Text style={styles.subtitle}>FIND YOUR BATTLEGROUND</Text>

      {/* VENUES GRID */}
      <View style={styles.gridContainer}>
        
        {/* Row 1 */}
        <View style={styles.gridRow}>
          {/* Venue Card 1 */}
          <View style={styles.venueCard}>
            <View style={styles.imagePlaceholder} />
            <TouchableOpacity style={styles.venueButton}>
              <Text style={styles.venueButtonText}>MAIN ARENA</Text>
            </TouchableOpacity>
          </View>

          {/* Venue Card 2 */}
          <View style={styles.venueCard}>
            <View style={styles.imagePlaceholder} />
            <TouchableOpacity style={styles.venueButton}>
              <Text style={styles.venueButtonText}>CONSOLE LOUNGE</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Row 2 */}
        <View style={styles.gridRow}>
          {/* Venue Card 3 */}
          <View style={styles.venueCard}>
            <View style={styles.imagePlaceholder} />
            <TouchableOpacity style={styles.venueButton}>
              <Text style={styles.venueButtonText}>VIP ROOM</Text>
            </TouchableOpacity>
          </View>

          {/* Venue Card 4 */}
          <View style={styles.venueCard}>
            <View style={styles.imagePlaceholder} />
            <TouchableOpacity style={styles.venueButton}>
              <Text style={styles.venueButtonText}>ESPORTS STAGE</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: 
  { flex: 1, 
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

  gridContainer: { 
    paddingHorizontal: 8, 
    marginBottom: 30 },

  gridRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
     marginBottom: 12 },

  venueCard: { 
    flex: 1, 
    marginHorizontal: 4, 
    backgroundColor: '#151329', 
    borderRadius: 7, 
    overflow: 'hidden', 
    borderWidth: 1, 
    borderColor: '#29243D' },

  imagePlaceholder: { 
    height: 120, 
    backgroundColor: '#29243D' },

  venueButton: { 
    paddingVertical: 12, 
    alignItems: 'center',
     borderTopWidth: 1, 
     borderTopColor: '#FF00FF' },

  venueButtonText: { 
    color: '#FFFFFF', 
    fontSize: 9, 
    fontWeight: 'bold' },

});
import React, { useState } from 'react';
import { View, Text, StyleSheet, 
    ScrollView, TouchableOpacity } from 'react-native';

export default function CalculateFeesScreen({ navigation }) {
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

      {/* TOP NAVIGATION BAR*/}

      <View style={styles.header}>

        <Text style={styles.logo}>
          NEXT LEVEL
        </Text>

        {/* Menu button */}

        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => setMenuOpen(!menuOpen)}
          style={styles.menuButton}
        >
          <Text style={styles.menu}>
            {menuOpen ? '×' : '☰'}
          </Text>
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

      <Text style={styles.pageTitle}>
        CALCULATE FEES
      </Text>

      <Text style={styles.subtitle}>
        ESTIMATE YOUR COST
      </Text>

      {/* SELECTION DROPDOWNS (Simulated) */}

      <View style={styles.dropdownBox}>
        <Text style={styles.dropdownText}>PC Gaming Session</Text>
        <Text style={styles.dropdownArrow}>▼</Text>
      </View>

      <View style={styles.dropdownBox}>
        <Text style={styles.dropdownText}>4 Players</Text>
        <Text style={styles.dropdownArrow}>▼</Text>
      </View>

      {/* PLAY TIME SELECTOR */}

      <Text style={styles.inputLabel}>PLAY TIME</Text>
      
      <View style={styles.timeSelectorRow}>
        <TouchableOpacity style={styles.timeButton}>
          <Text style={styles.timeButtonText}>-</Text>
        </TouchableOpacity>

        <View style={styles.timeDisplay}>
          <Text style={styles.timeDisplayText}>3 HRS</Text>
        </View>

        <TouchableOpacity style={styles.timeButton}>
          <Text style={styles.timeButtonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fullDayButton}>
          <Text style={styles.fullDayText}>FULL DAY</Text>
        </TouchableOpacity>
      </View>

      {/* CALCULATION SUMMARY */}

      <View style={styles.contactBox}>

        <Text style={styles.contactTitle}>
          CALCULATED FEES ARE DISPLAYED HERE
        </Text>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Base Fee</Text>
          <Text style={styles.calcValue}>R120.00</Text>
        </View>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Player Multiplier</Text>
          <Text style={styles.calcValue}>4</Text>
        </View>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Duration (Discounted)</Text>
          <Text style={styles.calcValue}>3 Hours</Text>
        </View>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Subtotal</Text>
          <Text style={styles.calcValue}>R1,440.00</Text>
        </View>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Squad Discount</Text>
          <Text style={styles.calcDiscount}>-R144.00</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Estimate</Text>
          <Text style={styles.totalValue}>R1,296.00</Text>
        </View>

      </View>

      {/* PLACE ORDER BUTTON*/}

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>
          PLACE ORDER
        </Text>
      </TouchableOpacity>

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
    paddingLeft: 12, 
    paddingRight: 12 },

  logo: { color: '#FFFFFF', 
    fontSize: 14, 
    fontWeight: 'bold' },

  menu: { color: '#FFFFFF',
    fontSize: 24 },
  menuButton: { paddingHorizontal: 8, 
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

  pinkLine: { height: 1,
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
    marginBottom: 15 },

    dropdownBox: { 
        backgroundColor: '#151329',
         flexDirection: 'row', 
         justifyContent: 'space-between', 
         alignItems: 'center', height: 45, 
         marginHorizontal: 12, 
    marginBottom: 10, 
         paddingHorizontal: 12, 
         borderRadius: 5, 
     borderWidth: 1, 
        borderColor: '#29243D' },

  dropdownText: { 
    color: '#FFFFFF', 
    fontSize: 11 },

  dropdownArrow: { 
    color: '#777777', 
    fontSize: 10 },

  inputLabel: { 
    color: '#AAAAAA', 
    fontSize: 10, 
    marginLeft: 12, 
    marginTop: 10 },

  timeSelectorRow: { 
    flexDirection: 'row', 
    alignItems: 'center',
     marginHorizontal: 12, 
     marginTop: 10, 
     marginBottom: 20 },

  timeButton: { 
    backgroundColor: '#151329', 
    width: 45, 
    height: 45, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: '#29243D' },

  timeButtonText: { 
    color: '#FFFFFF', 
    fontSize: 18 },

  timeDisplay: { 
    flex: 1, 
    height: 45, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#FF00FF' },

  timeDisplayText: { 
    color: '#FFFFFF', 
    fontSize: 14, 
    fontWeight: 'bold' },

  fullDayButton: { 
    backgroundColor: '#151329', 
    height: 45, 
    paddingHorizontal: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: '#29243D' },

  fullDayText: { 
    color: '#FFFFFF', 
    fontSize: 10, 
    fontWeight: 'bold' },

  contactBox: { 
    backgroundColor: '#151329', 
    marginHorizontal: 12, 
    padding: 15, 
    borderRadius: 7 },

  contactTitle: { 
    color: '#FFFFFF', 
    fontSize: 10, 
    fontWeight: 'bold', 
    marginBottom: 15 },
    
    calcRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 10 },

  calcLabel: { 
    color: '#AAAAAA', 
    fontSize: 11 },
    
  calcValue: { color: '#FFFFFF', 
    fontSize: 11 },

  calcDiscount: { 
    color: '#FF00FF', 
    fontSize: 11 },

  totalRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 15, 
    paddingTop: 15, 
    borderTopWidth: 1, 
    borderTopColor: '#29243D' },

  totalLabel: { 
    color: '#FFFFFF',
     fontSize: 14, 
     fontWeight: 'bold' },

  totalValue: { 
    color: '#FFFFFF', 
    fontSize: 14, 
    fontWeight: 'bold' },

  sendButton: { 
    height: 48, 
    backgroundColor: '#FF00FF', 
    marginTop: 30, 
    marginLeft: 12, 
    marginRight: 12, 
    marginBottom: 30, 
    borderRadius: 6, 
    alignItems: 'center', 
    justifyContent: 'center' },

  sendButtonText: { 
    color: '#000000', 
    fontSize: 12, 
    fontWeight: 'bold' },
});
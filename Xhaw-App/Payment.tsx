import React, { useState } from 'react';
import { View, Text, StyleSheet, 
    ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function PaymentScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationItems = [
    ['Home', 'Home'],
    ['Calculate Fees', 'CalculateFees'],
    ['Contact Us', 'Contact'],
    ['FAQ', 'FAQ']
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
      <Text style={styles.pageTitle}>PAYMENT</Text>
      <Text style={styles.subtitle}>LOCK IN PROTOCOL</Text>

      {/* PAYMENT SUMMARY BOX */}
      <View style={styles.contentBox}>
        
        {/* Selected Inventory */}
        <Text style={styles.sectionTitlePink}>SELECTED INVENTORY</Text>
        
        <View style={styles.inventoryRow}>
          <Text style={styles.inventoryText}>PC Gaming Session (x2)</Text>
          <Text style={styles.inventoryPrice}>R240</Text>
        </View>
        <View style={styles.inventoryRow}>
          <Text style={styles.inventoryText}>VR Experience (x1)</Text>
          <Text style={styles.inventoryPrice}>R150</Text>
        </View>

        {/* Deployment Date */}
        <Text style={styles.inputLabel}>DEPLOYMENT DATE</Text>
        <View style={styles.dropdownBox}>
          <Text style={styles.dropdownText}>15 / 10 / 2026</Text>
          <Text style={styles.dropdownArrow}>📅</Text>
        </View>

        {/* Squad Size */}
        <Text style={styles.inputLabel}>SQUAD SIZE</Text>
        <View style={styles.dropdownBox}>
          <Text style={styles.dropdownText}>2 Players</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </View>

        {/* Multiplayer Discounts */}
        <Text style={styles.sectionTitlePink}>MULTIPLAYER DISCOUNTS</Text>
        <View style={styles.discountRow}>
          <View style={[styles.discountBadge, styles.discountBadgeActive]}>
            <Text style={styles.discountTextActive}>2 Bookings</Text>
            <Text style={styles.discountSubtextActive}>5% off</Text>
          </View>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>3 Bookings</Text>
            <Text style={styles.discountSubtext}>10% off</Text>
          </View>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>4+ Bookings</Text>
            <Text style={styles.discountSubtext}>15% off</Text>
          </View>
        </View>

        {/* Totals */}
        <View style={styles.totalsContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.calcLabel}>Squad Subtotal</Text>
            <Text style={styles.calcValue}>R420.00</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.calcLabel}>Discount</Text>
            <Text style={styles.calcDiscount}>- R42.00</Text>
          </View>
          <View style={styles.grandTotalRow}>
            <Text style={styles.grandTotalLabel}>GRAND TOTAL</Text>
            <Text style={styles.grandTotalValue}>R378.00</Text>
          </View>
        </View>

        {/* Lock In Button */}
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>LOCK IN PROTOCOL</Text>
        </TouchableOpacity>

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
    marginBottom: 15 },

  contentBox: { 
    marginHorizontal: 12, 
    marginBottom: 30 },

  sectionTitlePink: { 
    color: '#FF00FF', 
    fontSize: 11, 
    fontWeight: 'bold', 
    marginTop: 15, 
    marginBottom: 10 },
 
    inventoryRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 8, 
    paddingHorizontal: 5 },

  inventoryText: { 
    color: '#FFFFFF', 
    fontSize: 11 },

  inventoryPrice: { 
    color: '#FFFFFF',
 fontSize: 11, 
 fontWeight: 'bold' },

  inputLabel: { 
    color: '#AAAAAA', 
    fontSize: 10, 
    marginTop: 15, 
    marginBottom: 5 },

  dropdownBox: { 
    backgroundColor: '#151329', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height: 45, 
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

  discountRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 5, 
    marginBottom: 20 },

  discountBadge: { 
    flex: 1, 
    backgroundColor: '#151329', 
    marginHorizontal: 4, 
    paddingVertical: 10, 
    alignItems: 'center', 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: '#29243D' },

  discountBadgeActive: { 
    borderColor: '#FF00FF', 
    backgroundColor: '#1A1433' },

  discountText: { 
    color: '#FFFFFF', 
    fontSize: 9, 
    fontWeight: 'bold' },

  discountTextActive: { 
    color: '#FF00FF', 
    fontSize: 9, 
    fontWeight: 'bold' },
  discountSubtext: { 
    color: '#777777',
     fontSize: 8,
      marginTop: 2 },

  discountSubtextActive: { 
    color: '#FFFFFF',
     fontSize: 8, 
     marginTop: 2 },

  totalsContainer: { 
    marginTop: 10, 
    borderTopWidth: 1, 
    borderTopColor: '#29243D', 
    paddingTop: 15 },

  totalRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 8 },

  calcLabel: { 
    color: '#AAAAAA', 
    fontSize: 11 },

  calcValue: { 
    color: '#FFFFFF', 
    fontSize: 11 },

  calcDiscount: { 
    color: '#FF00FF', 
    fontSize: 11 },

  grandTotalRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10, 
    paddingTop: 10 },

  grandTotalLabel: { 
    color: '#FFFFFF',
     fontSize: 14, 
     fontWeight: 'bold' },

  grandTotalValue: { 
    color: '#FFFFFF', 
    fontSize: 14, 
    fontWeight: 'bold' },

  sendButton: { 
    height: 48, 
    backgroundColor: '#FF00FF', 
    marginTop: 25, 
    borderRadius: 6, 
    alignItems: 'center', 
    justifyContent: 'center' },
    
  sendButtonText: { 
    color: '#000000', 
    fontSize: 12, 
    fontWeight: 'bold' },
});
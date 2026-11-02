import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function BookingPricesScreen({ navigation }) {
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
          accessibilityLabel={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
              accessibilityRole="button"
              accessibilityLabel={`Navigate to ${label}`}
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
        BOOKING PRICES
      </Text>

      <Text style={styles.subtitle}>
        SELECT YOUR TOURNAMENT PROFILE
      </Text>

      {/* PRICING LIST */}

      <View style={styles.priceListContainer}>

        {/* Item 1 */}
        <View style={styles.priceRow}>
          <View style={styles.priceInfo}>
            <Text style={styles.itemTitle}>PC Gaming Session</Text>
            <Text style={styles.itemDetail}>Per Hour</Text>
          </View>
          <View style={styles.priceAction}>
            <Text style={styles.priceText}>R100/hr</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Item 2 */}
        <View style={styles.priceRow}>
          <View style={styles.priceInfo}>
            <Text style={styles.itemTitle}>Console Gaming</Text>
            <Text style={styles.itemDetail}>Per Hour</Text>
          </View>
          <View style={styles.priceAction}>
            <Text style={styles.priceText}>R100/hr</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Item 3 */}
        <View style={styles.priceRow}>
          <View style={styles.priceInfo}>
            <Text style={styles.itemTitle}>VR Experience</Text>
            <Text style={styles.itemDetail}>Per session</Text>
          </View>
          <View style={styles.priceAction}>
            <Text style={styles.priceText}>R150/session</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Item 4 */}
        <View style={styles.priceRow}>
          <View style={styles.priceInfo}>
            <Text style={styles.itemTitle}>Esports Tourname...</Text>
            <Text style={styles.itemDetail}>Per entry</Text>
          </View>
          <View style={styles.priceAction}>
            <Text style={styles.priceText}>R250/entry</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Item 5 */}
        <View style={styles.priceRow}>
          <View style={styles.priceInfo}>
            <Text style={styles.itemTitle}>Birthday Party Pa...</Text>
            <Text style={styles.itemDetail}>Per squad</Text>
          </View>
          <View style={styles.priceAction}>
            <Text style={styles.priceText}>R2,500/squad</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Item 6 */}
        <View style={styles.priceRow}>
          <View style={styles.priceInfo}>
            <Text style={styles.itemTitle}>Corporate Event</Text>
            <Text style={styles.itemDetail}>Customized</Text>
          </View>
          <View style={styles.priceAction}>
            <Text style={styles.priceText}>R5,000/customized</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      {/* ADD NEW INVENTORY BUTTON*/}

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>
          + ADD NEW INVENTORY ITEM
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

  priceListContainer: { 
    marginTop: 20 },

  priceRow: { 
    backgroundColor: '#151329',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 15, 
    marginHorizontal: 12, 
    marginBottom: 8, 
    borderRadius: 7 },

  priceInfo: { 
    flex: 1 },

  itemTitle: { 
    color: '#FFFFFF', 
    fontSize: 12, 
    fontWeight: 'bold' },

  itemDetail: { 
    color: '#777777', 
    fontSize: 10,
    marginTop: 4 },
  priceAction: { 
    flexDirection: 'row', 
    alignItems: 'center' },

  priceText: { 
    color: '#AAAAAA', 
    fontSize: 11, 
    marginRight: 10 },

  addButton: { 
    backgroundColor: '#FF00FF', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 4 },

  addButtonText: { 
    color: '#000000', 
    fontSize: 10, 
    fontWeight: 'bold' },

  sendButton: { 
    height: 48, 
    backgroundColor: '#FF00FF', 
    marginTop: 18, 
    marginLeft: 12, 
    marginRight: 12, 
    marginBottom: 30, 
borderRadius: 6, 
 alignItems: 'center', 
 justifyContent: 'center' },

  sendButtonText: { color: '#000000', 
    fontSize: 12,
     fontWeight: 'bold' },
});
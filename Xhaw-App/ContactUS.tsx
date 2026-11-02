import React, { useState } from 'react';
import { View, Text, StyleSheet,
     ScrollView, TouchableOpacity, TextInput } from 'react-native';
import type { NavigationProp, ParamListBase } from '@react-navigation/native';

type ScreenProps = { navigation: NavigationProp<ParamListBase> };

export default function ContactScreen({ navigation }: ScreenProps) {
  const [menuOpen, setMenuOpen] = useState(false);
      const navigationItems = [
    ['Home', 'Homepage'], 
    ['About Us', 'AboutUS'], 
    ['Calculate Fees', 'CalculateFees'],
    ['Payment', 'Payment'],
    ['Contact Us', 'ContactUS'], 
    ['FAQ', 'FAQ'],
    ['Sign Up', 'Signup'],
     ['Venues', 'Venues'],
  ];

  const navigateTo = (screen: string) => {
    setMenuOpen(false);
    navigation?.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      {/* TOP NAVIGATION BAR */}
      <View style={styles.header}>
        <Text style={styles.logo}>NEXT LEVEL</Text>

        {/* Menu button */}
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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

      {/* PAGE TITLE */}
      <Text style={styles.pageTitle}>CONTACT US</Text>
      <Text style={styles.subtitle}>GET IN TOUCH WITH NEXT LEVEL</Text>

      {/* CONTACT INFORMATION */}
      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>NEXT LEVEL GAMING & ESPORTS ARENA</Text>
        <Text style={styles.contactText}>Johannesburg, South Africa</Text>
        <Text style={styles.contactText}>Phone: +27 11 555 0123</Text>
        <Text style={styles.contactText}>Email: info@nextlevelgaming.co.za</Text>
        <Text style={styles.contactText}>Open Monday - Sunday</Text>
      </View>

      {/* SEND US A MESSAGE */}
      <Text style={styles.sectionTitle}>SEND US A MESSAGE</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#777777"
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#777777"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Your Phone Number"
        placeholderTextColor="#777777"
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.messageInput}
        placeholder="Write your message..."
        placeholderTextColor="#777777"
        multiline={true}
      />

      {/* SEND BUTTON */}
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>SEND MESSAGE</Text>
      </TouchableOpacity>

      {/* SOCIAL / COMMUNITY */}
      <View style={styles.communityBox}>
        <Text style={styles.communityTitle}>JOIN THE COMMUNITY</Text>
        <Text style={styles.communityText}>
          Follow Next Level for tournament announcements, gaming events and community updates.
        </Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>INSTAGRAM</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>DISCORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121225',
  },
  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  menu: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  menuButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  navigationMenu: {
    backgroundColor: '#151329',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  navigationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#29243D',
  },
  navigationText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  pinkLine: {
    height: 1,
    backgroundColor: '#FF00FF',
  },
  pageTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 12,
  },
  subtitle: {
    color: '#FF00FF',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 12,
  },
  contactBox: {
    backgroundColor: '#151329',
    marginTop: 18,
    marginLeft: 12,
    marginRight: 12,
    padding: 15,
    borderRadius: 7,
  },
  contactTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contactText: {
    color: '#AAAAAA',
    fontSize: 10,
    marginTop: 8,
  },
  sectionTitle: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 12,
  },
  input: {
    height: 45,
    backgroundColor: '#151329',
    color: '#FFFFFF',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 12,
    borderRadius: 5,
    fontSize: 11,
  },
  messageInput: {
    height: 110,
    backgroundColor: '#151329',
    color: '#FFFFFF',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 12,
    paddingTop: 12,
    borderRadius: 5,
    fontSize: 11,
    textAlignVertical: 'top',
  },
  sendButton: {
    height: 48,
    backgroundColor: '#FF00FF',
    marginTop: 18,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  communityBox: {
    backgroundColor: '#111126',
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 30,
    padding: 15,
    borderRadius: 7,
  },
  communityTitle: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  communityText: {
    color: '#999999',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 8,
  },
  socialRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  socialButton: {
    backgroundColor: '#FF00FF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    marginRight: 8,
    borderRadius: 5,
  },
  socialText: {
    color: '#000000',
    fontSize: 9,
    fontWeight: 'bold',
  },
});
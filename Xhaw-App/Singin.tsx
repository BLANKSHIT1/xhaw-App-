import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, 
    TouchableOpacity, TextInput } from 'react-native';
import type { NavigationProp, ParamListBase } from '@react-navigation/native';

type ScreenProps = { navigation: NavigationProp<ParamListBase> };

export default function SignInScreen({ navigation }: ScreenProps) {
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

      {/* PAGE TITLE */}
      <Text style={styles.pageTitle}>SIGN IN</Text>
      <Text style={styles.subtitle}>WELCOME BACK TO THE ARENA</Text>

      {/* Email Input */}
      <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
      <TextInput
        style={styles.input}
        placeholder="player@example.com"
        placeholderTextColor="#777777"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <Text style={styles.inputLabel}>PASSWORD</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        placeholderTextColor="#777777"
        secureTextEntry={true}
      />

      {/* SIGN IN BUTTON */}
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* SWITCH TO SIGN UP LINK */}
      <TouchableOpacity onPress={() => navigateTo('SignUp')}>
        <Text style={styles.switchAuthText}>
          Don't have an account? <Text style={styles.highlightText}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
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
    paddingHorizontal: 12,
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
    marginBottom: 20,
  },
  inputLabel: {
    color: '#AAAAAA',
    fontSize: 10,
    marginLeft: 12,
    marginTop: 15,
  },
  input: {
    height: 45,
    backgroundColor: '#151329',
    color: '#FFFFFF',
    marginTop: 5,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 12,
    borderRadius: 5,
    fontSize: 11,
    borderWidth: 1,
    borderColor: '#29243D',
  },
  sendButton: {
    height: 48,
    backgroundColor: '#FF00FF',
    marginTop: 25,
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
  switchAuthText: {
    color: '#AAAAAA',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  highlightText: {
    color: '#FF00FF',
    fontWeight: 'bold',
  },
});
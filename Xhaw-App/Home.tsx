import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, Image } from 'react-native';
import type { NavigationProp, ParamListBase } from '@react-navigation/native';

type ScreenProps = { navigation: NavigationProp<ParamListBase> };

export default function HomeScreen({ navigation }: ScreenProps) {
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
      {/* TOP NAVIGATION BAR*/}
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

      {/* PAGE TITLE*/}
      <Text style={styles.pageTitle}>UNLEASH THE SQUAD</Text>

      {/* INTRO TEXT */}
      <Text style={styles.introText}>
        Johannesburg's ultimate destination for esports tournaments, competitive gaming sessions, and high-tech birthday packages. Experience low latency and pro-grade peripherals.
      </Text>

      {/* OPERATORS ON DUTY BOX */}
      <View style={styles.contentBox}>
        <Text style={styles.sectionTitlePink}>OPERATORS ON DUTY</Text>
        
        <View style={styles.operatorsRow}>
          <View style={styles.operatorItem}>
            <View style={styles.avatarPlaceholder} />
            <Text style={styles.operatorName}>Jason Naidoo</Text>
            <Text style={styles.operatorRole}>Founder</Text>
          </View>

          <View style={styles.operatorItem}>
            <View style={styles.avatarPlaceholder} />
            <Text style={styles.operatorName}>Sipho Dlamini</Text>
            <Text style={styles.operatorRole}>Arena Manager</Text>
          </View>

          <View style={styles.operatorItem}>
            <View style={styles.avatarPlaceholder} />
            <Text style={styles.operatorName}>Zoe Botha</Text>
            <Text style={styles.operatorRole}>Community Manager</Text>
          </View>
        </View>
      </View>

      {/* ESPORTS & TOURNEYS BOX */}
      <View style={styles.contentBox}>
        <Text style={styles.sectionTitlePink}>ESPORTS & TOURNEYS</Text>
        <Text style={styles.contactText}>
          Weekly localized leagues and weekend showdowns. Drop in solo or coordinate with your squad for the ultimate gaming experience.
        </Text>
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
  introText: {
    color: '#AAAAAA',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
  },
  contentBox: {
    backgroundColor: '#151329',
    marginTop: 18,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 10,
    padding: 15,
    borderRadius: 7,
  },
  sectionTitlePink: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactText: {
    color: '#AAAAAA',
    fontSize: 10,
    marginTop: 5,
    lineHeight: 16,
  },
  operatorsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  operatorItem: {
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#29243D',
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#FF00FF',
  },
  operatorName: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  operatorRole: {
    color: '#AAAAAA',
    fontSize: 9,
  },
});
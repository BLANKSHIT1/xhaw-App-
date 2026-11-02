import React, { useState } from 'react';
import { View, Text, StyleSheet,
     ScrollView, TouchableOpacity } from 'react-native';

export default function FAQScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationItems = [
    ['Home', 'Home'],
    ['Calculate Fees', 'CalculateFees'],
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
      <Text style={styles.pageTitle}>FAQ</Text>
      <Text style={styles.subtitle}>GOT QUESTIONS?</Text>

      {/* FAQ LIST */}
      <View style={styles.faqContainer}>
        
        {/* Expanded Question Example */}
        <View style={styles.faqItem}>
          <View style={styles.faqHeader}>
            <Text style={styles.faqQuestion}>What are your operating hours?</Text>
            <Text style={styles.faqIcon}>▼</Text>
          </View>
          <View style={styles.faqAnswerContainer}>
            <Text style={styles.faqAnswer}>
              Mon-Thu 10am-10pm, Fri-Sat 10am-Midnight, Sun 10am-8pm.
            </Text>
          </View>
        </View>

        {/* Collapsed Questions */}
        <TouchableOpacity style={styles.faqItem}>
          <View style={styles.faqHeader}>
            <Text style={styles.faqQuestion}>Do I need to bring my own equipment?</Text>
            <Text style={styles.faqIcon}>▼</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqItem}>
          <View style={styles.faqHeader}>
            <Text style={styles.faqQuestion}>How do I book a gaming session?</Text>
            <Text style={styles.faqIcon}>▼</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqItem}>
          <View style={styles.faqHeader}>
            <Text style={styles.faqQuestion}>Are there age restrictions?</Text>
            <Text style={styles.faqIcon}>▼</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqItem}>
          <View style={styles.faqHeader}>
            <Text style={styles.faqQuestion}>Can I host a birthday party?</Text>
            <Text style={styles.faqIcon}>▼</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqItem}>
          <View style={styles.faqHeader}>
            <Text style={styles.faqQuestion}>What payment methods do you accept?</Text>
            <Text style={styles.faqIcon}>▼</Text>
          </View>
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
    marginBottom: 20 },

  faqContainer: { 
    marginHorizontal: 12, 
    marginBottom: 30 },

  faqItem: { 
    backgroundColor: '#151329', 
    marginBottom: 10, 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: '#29243D', 
    overflow: 'hidden' },

  faqHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 15 },

  faqQuestion: { 
    color: '#FFFFFF', 
    fontSize: 11, 
    fontWeight: 'bold', 
    flex: 1 },

  faqIcon: { 
    color: '#FF00FF', 
    fontSize: 10, 
    marginLeft: 10 },

  faqAnswerContainer: { 
    paddingHorizontal: 15, 
    paddingBottom: 15 },

  faqAnswer: { color: '#AAAAAA', 
    fontSize: 10, 
    lineHeight: 16 },
});
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './navigation/types';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'CalculateFees'>;
type MenuScreen = 'Home' | 'AboutUS' | 'Payment' | 'ContactUS' | 'FAQ' | 'Signup' | 'Venues' | 'CalculateFees';

export default function CalculateFeesScreen({ navigation }: ScreenProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Updated Package Options matching the web venue options & arena experiences
  const packagesList = [
    { name: 'PC Gaming Session', price: 100 },
    { name: 'Console Gaming', price: 100 },
    { name: 'Esports Tournament', price: 250 },
    { name: 'Esports Training Package', price: 1500 },
    { name: 'Birthday Party Package', price: 1500 },
    { name: 'Virtual Reality Experience', price: 750 },
    { name: 'Racing Simulator Challenge', price: 750 },
    { name: 'Escape Room Challenge', price: 750 }
  ];

  const playerOptions = [1, 2, 3, 4, 5, 6, 8, 10];

  // Selection States
  const [selectedPackage, setSelectedPackage] = useState(packagesList[0]);
  const [playerCount, setPlayerCount] = useState(4);
  const [hours, setHours] = useState(3);
  const [isFullDay, setIsFullDay] = useState(false);

  // Dropdown Modal Visibility States
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [showPlayerModal, setShowPlayerModal] = useState(false);

  const navigationItems = [
    ['Home', 'Home'],
    ['About Us', 'AboutUS'],
    ['Payment', 'Payment'],
    ['Contact Us', 'ContactUS'],
    ['FAQ', 'FAQ'],
    ['Sign Up', 'Signup'],
    ['Venues', 'Venues'],
    ['Calculate Fees', 'CalculateFees'],
  ] as const;

  const navigateTo = (screen: MenuScreen) => {
    setMenuOpen(false);
    navigation.navigate(screen);
  };

  // Play Time Handlers
  const handleAddHour = () => {
    setIsFullDay(false);
    setHours((prev) => prev + 1);
  };

  const handleSubtractHour = () => {
    setIsFullDay(false);
    if (hours > 1) {
      setHours((prev) => prev - 1);
    }
  };

  const handleFullDayToggle = () => {
    setIsFullDay(!isFullDay);
    if (!isFullDay) {
      setHours(8);
    } else {
      setHours(3);
    }
  };

  // Dynamic Calculation Logic
  const baseRate = selectedPackage.price;
  const activeHours = isFullDay ? 8 : hours;
  const subtotal = baseRate * activeHours * playerCount;

  let discountRate = 0;
  if (playerCount >= 4) {
    discountRate = 0.15;
  } else if (playerCount === 3) {
    discountRate = 0.10;
  } else if (playerCount === 2) {
    discountRate = 0.05;
  }

  const discountAmount = subtotal * discountRate;
  const totalEstimate = subtotal - discountAmount;

  // Handle Placing Order & Navigating to Payment Screen
  const handlePlaceOrder = () => {
    const orderData = {
      packageName: selectedPackage.name,
      playerCount: playerCount,
      hours: activeHours,
      isFullDay: isFullDay,
      subtotal: subtotal.toFixed(2),
      discountAmount: discountAmount.toFixed(2),
      totalEstimate: totalEstimate.toFixed(2)
    };

    navigation.navigate('Payment', { bookingData: orderData });
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
      <Text style={styles.pageTitle}>CALCULATE FEES</Text>
      <Text style={styles.subtitle}>ESTIMATE YOUR COST</Text>

      {/* PACKAGE SELECTION DROPDOWN */}
      <TouchableOpacity
        style={styles.dropdownBox}
        onPress={() => setShowPackageModal(true)}
      >
        <Text style={styles.dropdownText}>{selectedPackage.name} (R{selectedPackage.price})</Text>
        <Text style={styles.dropdownArrow}>▼</Text>
      </TouchableOpacity>

      {/* PLAYER COUNT DROPDOWN */}
      <TouchableOpacity
        style={styles.dropdownBox}
        onPress={() => setShowPlayerModal(true)}
      >
        <Text style={styles.dropdownText}>{playerCount} {playerCount === 1 ? 'Player' : 'Players'}</Text>
        <Text style={styles.dropdownArrow}>▼</Text>
      </TouchableOpacity>

      {/* PLAY TIME SELECTOR */}
      <Text style={styles.inputLabel}>PLAY TIME</Text>
      <View style={styles.timeSelectorRow}>
        <TouchableOpacity style={styles.timeButton} onPress={handleSubtractHour}>
          <Text style={styles.timeButtonText}>-</Text>
        </TouchableOpacity>

        <View style={styles.timeDisplay}>
          <Text style={styles.timeDisplayText}>
            {isFullDay ? 'FULL DAY (8 HRS)' : `${hours} HRS`}
          </Text>
        </View>

        <TouchableOpacity style={styles.timeButton} onPress={handleAddHour}>
          <Text style={styles.timeButtonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fullDayButton, isFullDay && styles.fullDayActive]}
          onPress={handleFullDayToggle}
        >
          <Text style={[styles.fullDayText, isFullDay && styles.fullDayActiveText]}>
            FULL DAY
          </Text>
        </TouchableOpacity>
      </View>

      {/* CALCULATION SUMMARY DISPLAY */}
      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>CALCULATED FEES ARE DISPLAYED HERE</Text>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Base Fee</Text>
          <Text style={styles.calcValue}>R{baseRate.toFixed(2)}</Text>
        </View>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Player Multiplier</Text>
          <Text style={styles.calcValue}>{playerCount}</Text>
        </View>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Duration</Text>
          <Text style={styles.calcValue}>{activeHours} Hours</Text>
        </View>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Subtotal</Text>
          <Text style={styles.calcValue}>R{subtotal.toFixed(2)}</Text>
        </View>

        <View style={styles.calcRow}>
          <Text style={styles.calcLabel}>Squad Discount ({(discountRate * 100)}%)</Text>
          <Text style={styles.calcDiscount}>- R{discountAmount.toFixed(2)}</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Estimate</Text>
          <Text style={styles.totalValue}>R{totalEstimate.toFixed(2)}</Text>
        </View>
      </View>

      {/* PLACE ORDER BUTTON */}
      <TouchableOpacity style={styles.sendButton} onPress={handlePlaceOrder}>
        <Text style={styles.sendButtonText}>PLACE ORDER</Text>
      </TouchableOpacity>

      {/* MODAL FOR SELECTING PACKAGE */}
      <Modal visible={showPackageModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Package</Text>
            {packagesList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalItem}
                onPress={() => {
                  setSelectedPackage(item);
                  setShowPackageModal(false);
                }}
              >
                <Text style={styles.modalItemText}>{item.name} — R{item.price}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowPackageModal(false)}
            >
              <Text style={styles.modalCloseText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MODAL FOR SELECTING PLAYERS */}
      <Modal visible={showPlayerModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Player Count</Text>
            {playerOptions.map((num) => (
              <TouchableOpacity
                key={num}
                style={styles.modalItem}
                onPress={() => {
                  setPlayerCount(num);
                  setShowPlayerModal(false);
                }}
              >
                <Text style={styles.modalItemText}>{num} {num === 1 ? 'Player' : 'Players'}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowPlayerModal(false)}
            >
              <Text style={styles.modalCloseText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121225'
  },

  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold'
  },

  menu: {
    color: '#FFFFFF',
    fontSize: 24
  },

  menuButton: {
    paddingHorizontal: 8,
    paddingVertical: 4
  },

  navigationMenu: {
    backgroundColor: '#151329',
    paddingHorizontal: 16,
    paddingVertical: 6
  },

  navigationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#29243D'
  },

  navigationText: {
    color: '#FFFFFF',
    fontSize: 14
  },

  pinkLine: {
    height: 1,
    backgroundColor: '#FF00FF'
  },

  pageTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 12
  },

  subtitle: {
    color: '#FF00FF',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 12,
    marginBottom: 15
  },

  dropdownBox: {
    backgroundColor: '#151329',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    marginHorizontal: 12,
    marginBottom: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#29243D'
  },

  dropdownText: {
    color: '#FFFFFF',
    fontSize: 11
  },

  dropdownArrow: {
    color: '#777777',
    fontSize: 10
  },

  inputLabel: {
    color: '#AAAAAA',
    fontSize: 10,
    marginLeft: 12,
    marginTop: 10
  },

  timeSelectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 20
  },

  timeButton: {
    backgroundColor: '#151329',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#29243D'
  },

  timeButtonText: {
    color: '#FFFFFF',
    fontSize: 18
  },

  timeDisplay: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF00FF'
  },

  timeDisplayText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold'
  },

  fullDayButton: {
    backgroundColor: '#151329',
    height: 45,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#29243D'
  },

  fullDayActive: {
    backgroundColor: '#FF00FF'
  },

  fullDayText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold'
  },

  fullDayActiveText: {
    color: '#000000'
  },

  contactBox: {
    backgroundColor: '#151329',
    marginHorizontal: 12,
    padding: 15,
    borderRadius: 7
  },

  contactTitle: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 15
  },

  calcRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  calcLabel: {
    color: '#AAAAAA',
    fontSize: 11
  },

  calcValue: {
    color: '#FFFFFF',
    fontSize: 11
  },

  calcDiscount: {
    color: '#FF00FF',
    fontSize: 11
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#29243D'
  },

  totalLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold'
  },

  totalValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold'
  },

  sendButton: {
    height: 48,
    backgroundColor: '#FF00FF',
    marginTop: 25,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },

  sendButtonText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold'
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 20
  },

  modalContent: {
    backgroundColor: '#151329',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#FF00FF'
  },

  modalTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },

  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#29243D'
  },

  modalItemText: {
    color: '#FFFFFF',
    fontSize: 12
  },

  modalCloseButton: {
    marginTop: 15,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#29243D',
    borderRadius: 5
  },

  modalCloseText: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold'
  }
});
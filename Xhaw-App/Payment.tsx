import React, { useState } from 'react';
import { View, Text, StyleSheet, 
  ScrollView, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './navigation/types';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Payment'>;

export default function PaymentScreen({ route, navigation }: ScreenProps) {
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
  const bookingData = route.params?.bookingData || {
    packageName: 'PC Gaming Session',
    playerCount: 4,
    hours: 3,
    subtotal: '1200.00',
    discountAmount: '180.00',
    totalEstimate: '1020.00'
  };

  const handleLockIn = () => {
    navigation.navigate('Homepage');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>NEXT LEVEL</Text>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>
          <Text style={styles.menu}>{menuOpen ? '×' : '☰'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pinkLine} />

      <Text style={styles.pageTitle}>PAYMENT</Text>
      <Text style={styles.subtitle}>LOCK IN PROTOCOL</Text>

      <View style={styles.contentBox}>
        <Text style={styles.sectionTitlePink}>ORDER SUMMARY</Text>

        <View style={styles.inventoryRow}>
          <Text style={styles.inventoryText}>{bookingData.packageName} ({bookingData.hours} hrs)</Text>
          <Text style={styles.inventoryPrice}>R{bookingData.subtotal}</Text>
        </View>

        <Text style={styles.inputLabel}>SQUAD SIZE</Text>
        <View style={styles.dropdownBox}>
          <Text style={styles.dropdownText}>{bookingData.playerCount} Players</Text>
        </View>

        <View style={styles.totalsContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.calcLabel}>Subtotal</Text>
            <Text style={styles.calcValue}>R{bookingData.subtotal}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.calcLabel}>Discount</Text>
            <Text style={styles.calcDiscount}>- R{bookingData.discountAmount}</Text>
          </View>
          <View style={styles.grandTotalRow}>
            <Text style={styles.grandTotalLabel}>GRAND TOTAL</Text>
            <Text style={styles.grandTotalValue}>R{bookingData.totalEstimate}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={handleLockIn}>
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
    height: 45,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#29243D' },

  dropdownText: {
    color: '#FFFFFF',
    fontSize: 11 },

  totalsContainer: {
    marginTop: 15,
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
    fontWeight: 'bold' }
});
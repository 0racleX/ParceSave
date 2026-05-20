// screens/CartScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function CartScreen({ route }) {
  const product = route.params?.product;

  return (
    <View style={styles.cartContainer}>
      <View style={styles.cartHeader}>
        <Text style={styles.cartTitle}>Mi Carrito 🛒</Text>
      </View>

      <ScrollView style={styles.cartContent}>
        {product ? (
          <View style={styles.cartItem}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{product.name}</Text>
              <Text style={styles.itemExpiry}>Vence: {product.expires}</Text>
            </View>
            <View style={styles.itemPriceContainer}>
              <Text style={styles.itemOriginalPrice}>₡{product.originalPrice}</Text>
              <Text style={styles.itemPrice}>₡{product.price}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartIcon}>🛒</Text>
            <Text style={styles.emptyCartText}>Tu carrito está vacío</Text>
            <Text style={styles.emptyCartSubtext}>
              Explora nuestras ofertas y encuentra productos increíbles
            </Text>
          </View>
        )}

        {product && (
          <View style={styles.summary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal:</Text>
              <Text style={styles.summaryValue}>₡{product.price}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Ahorro:</Text>
              <Text style={styles.savingsValue}>₡{product.originalPrice - product.price}</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalValue}>₡{product.price}</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {product && (
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Confirmar compra 💳</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  cartHeader: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  cartContent: {
    flex: 1,
    padding: 24,
  },
  cartItem: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  itemInfo: {
    marginBottom: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  itemExpiry: {
    color: '#f59e0b',
    fontSize: 14,
  },
  itemPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemOriginalPrice: {
    color: '#9ca3af',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  itemPrice: {
    color: '#16a34a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyCart: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyCartIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6b7280',
    marginBottom: 8,
  },
  emptyCartSubtext: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
  },
  summary: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#6b7280',
  },
  summaryValue: {
    fontSize: 16,
    color: '#111827',
  },
  savingsValue: {
    fontSize: 16,
    color: '#16a34a',
    fontWeight: 'bold',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 12,
    marginBottom: 0,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  checkoutButton: {
    margin: 24,
    backgroundColor: '#eab308',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#eab308',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  checkoutText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
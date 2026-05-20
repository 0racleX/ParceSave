// screens/ExploreScreen.js
import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const products = [
  { id: "1", name: "Leche fresca", price: 3000, originalPrice: 3500, expires: "Mañana", discount: 15 },
  { id: "2", name: "Pan campesino", price: 1500, originalPrice: 2000, expires: "Hoy", discount: 25 },
  { id: "3", name: "Tomates cherry", price: 2000, originalPrice: 2800, expires: "2 días", discount: 30 },
  { id: "4", name: "Yogurt natural", price: 1200, originalPrice: 1600, expires: "3 días", discount: 25 },
];

export default function ExploreScreen({ navigation }) {
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <View style={styles.productHeader}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>-{item.discount}%</Text>
        </View>
      </View>
      
      <Text style={styles.expiryText}>⏰ Vence: {item.expires}</Text>
      
      <View style={styles.priceContainer}>
        <Text style={styles.originalPrice}>₡{item.originalPrice}</Text>
        <Text style={styles.currentPrice}>₡{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.exploreContainer}>
      <View style={styles.exploreHeader}>
        <Text style={styles.exploreTitle}>Ofertas cercanas 🛍️</Text>
        <Text style={styles.exploreSubtitle}>Productos con descuento cerca de ti</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  exploreContainer: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  exploreHeader: {
    padding: 24,
    paddingTop: 60,
  },
  exploreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  exploreSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  productList: {
    paddingHorizontal: 24,
  },
  productCard: {
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
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  discountBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  expiryText: {
    color: '#f59e0b',
    fontSize: 14,
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  originalPrice: {
    color: '#9ca3af',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  currentPrice: {
    color: '#16a34a',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
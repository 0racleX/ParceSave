// screens/ProductDetailScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.detailContainer}>
      <ScrollView style={styles.detailContent}>
        <View style={styles.productImagePlaceholder}>
          <Text style={styles.productEmoji}>🥛</Text>
        </View>

        <View style={styles.productInfo}>
          <Text style={styles.detailProductName}>{product.name}</Text>
          
          <View style={styles.detailPriceContainer}>
            <Text style={styles.detailOriginalPrice}>₡{product.originalPrice}</Text>
            <Text style={styles.detailCurrentPrice}>₡{product.price}</Text>
            <View style={styles.detailDiscountBadge}>
              <Text style={styles.detailDiscountText}>-{product.discount}%</Text>
            </View>
          </View>

          <View style={styles.expiryContainer}>
            <Text style={styles.expiryLabel}>⏰ Vence:</Text>
            <Text style={styles.expiryValue}>{product.expires}</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Descripción</Text>
            <Text style={styles.descriptionText}>
              Producto fresco de excelente calidad. Aprovecha esta oferta especial
              antes de que expire. ¡Ahorra mientras ayudas a reducir el desperdicio de alimentos!
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => navigation.navigate("Cart", { product })}
        >
          <Text style={styles.addToCartText}>Agregar al carrito 🛒</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailContent: {
    flex: 1,
  },
  productImagePlaceholder: {
    height: 200,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productEmoji: {
    fontSize: 64,
  },
  productInfo: {
    padding: 24,
  },
  detailProductName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  detailPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  detailOriginalPrice: {
    fontSize: 18,
    color: '#9ca3af',
    textDecorationLine: 'line-through',
  },
  detailCurrentPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  detailDiscountBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  detailDiscountText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  expiryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 8,
  },
  expiryLabel: {
    fontSize: 16,
    color: '#6b7280',
  },
  expiryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f59e0b',
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  actionContainer: {
    padding: 24,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  addToCartButton: {
    backgroundColor: '#16a34a',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#16a34a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  addToCartText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
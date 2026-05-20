import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>¡Hola! 👋</Text>
        <Text style={styles.headerTitle}>Bienvenido a ParceSave</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>₡15,420</Text>
            <Text style={styles.statLabel}>Ahorrado este mes</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Productos salvados</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryAction]}
            onPress={() => navigation.navigate("Explore")}
          >
            <Text style={styles.actionIcon}>🛍️</Text>
            <Text style={styles.primaryActionText}>Explorar Ofertas</Text>
            <Text style={styles.actionSubtext}>Descubre productos cerca de ti</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryAction]}
            onPress={() => navigation.navigate("Cart")}
          >
            <Text style={styles.actionIcon}>🛒</Text>
            <Text style={styles.secondaryActionText}>Ver Carrito</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#16a34a',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    flex: 0.48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16a34a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  actionsContainer: {
    gap: 16,
  },
  actionButton: {
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  primaryAction: {
    backgroundColor: '#16a34a',
  },
  secondaryAction: {
    backgroundColor: 'white',
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  primaryActionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  secondaryActionText: {
    color: '#16a34a',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionSubtext: {
    color: '#dcfce7',
    fontSize: 14,
  },
});
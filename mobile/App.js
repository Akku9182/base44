import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const summary = [
  { label: "Total balance", value: "$24,890" },
  { label: "Income", value: "$8,200" },
  { label: "Expenses", value: "$4,620" },
  { label: "Savings", value: "$4,120" }
];

const insights = [
  { title: "7-day forecast", detail: "$580" },
  { title: "Overspending", detail: "Dining +12%" },
  { title: "Savings nudge", detail: "$120" }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Welcome back</Text>
          <Text style={styles.headerTitle}>Jordan Carter</Text>
        </View>

        <View style={styles.grid}>
          {summary.map((item) => (
            <View key={item.label} style={styles.card}>
              <Text style={styles.cardLabel}>{item.label}</Text>
              <Text style={styles.cardValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Insights</Text>
          {insights.map((insight) => (
            <View key={insight.title} style={styles.insightCard}>
              <Text style={styles.insightTitle}>{insight.title}</Text>
              <Text style={styles.insightValue}>{insight.detail}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionCard}>
            <Text style={styles.actionText}>Transfer between accounts</Text>
          </View>
          <View style={styles.actionCard}>
            <Text style={styles.actionText}>Pay bills</Text>
          </View>
          <View style={styles.actionCard}>
            <Text style={styles.actionText}>Scan QR to pay</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1D39"
  },
  content: {
    padding: 20
  },
  header: {
    marginBottom: 20
  },
  headerLabel: {
    color: "#8CA3C5",
    fontSize: 14
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "600"
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  card: {
    width: "48%",
    backgroundColor: "#142A4B",
    padding: 16,
    borderRadius: 16
  },
  cardLabel: {
    color: "#8CA3C5",
    fontSize: 12
  },
  cardValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8
  },
  section: {
    marginTop: 24
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12
  },
  insightCard: {
    backgroundColor: "#1EC8B0",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12
  },
  insightTitle: {
    color: "#0B1D39",
    fontSize: 12,
    textTransform: "uppercase"
  },
  insightValue: {
    color: "#0B1D39",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 6
  },
  actionCard: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10
  },
  actionText: {
    color: "#0B1D39",
    fontSize: 14
  }
});

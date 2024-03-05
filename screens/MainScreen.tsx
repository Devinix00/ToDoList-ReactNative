import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/header/Header";
import MainSection from "../components/mainSection/MainSection";
import AddToDoForm from "../components/addToDoForm/AddToDoForm";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <Breadcrumb />
      <MainSection />
      <AddToDoForm />
    </SafeAreaView>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    display: "flex",
  },
});

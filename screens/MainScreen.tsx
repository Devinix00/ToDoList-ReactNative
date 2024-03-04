import { SafeAreaView, StatusBar } from "react-native";
import Header from "../components/header/Header";
import MainSection from "../components/mainSection/MainSection";

function MainScreen() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      <MainSection />
    </SafeAreaView>
  );
}

export default MainScreen;

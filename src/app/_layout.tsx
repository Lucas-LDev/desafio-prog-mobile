import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "slide_from_bottom", gestureDirection: 'vertical'}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen name="addTasks" />
      <Stack.Screen name="chatScreen" />
      <Stack.Screen name="calendarScreen" />
      <Stack.Screen name="moreOptionsScreen" />
    </Stack>
  );
}

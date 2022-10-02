import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "sb",
  currency: "EUR",
  "disable-card": "visa",
  "disable-funding": "card",
  intent: "capture",
  "data-client-token": "abc123xyz==",
};

export default function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons style={{ layout: "horizontal", color:'gold', shape:'pill', label:'checkout', tagline:'true' }} />
    </PayPalScriptProvider>
  );
}


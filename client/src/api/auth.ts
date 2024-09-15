const serverIP = process.env.REACT_APP_BACKEND_URL;

export const authCar = async (carIp: string, carPassword: string) => {
  try {
    await fetch(`http://${serverIP}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        roverIP: carIp,
        roverKey: carPassword,
      }),
    });
  } catch (error) {
    console.error("Failed to login:", error);
  }
};

const serverIP = "server ip";
export const startRace = async () => {
  try {
    await fetch(`http://${serverIP}/startRace`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to start race:", error);
  }
};

export const endRace = async () => {
  try {
    await fetch(`http://${serverIP}/endRace`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to end race:", error);
  }
};

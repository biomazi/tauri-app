import { invoke } from "@tauri-apps/api/tauri";
import { getName, getTauriVersion } from "@tauri-apps/api/app";
import { useEffect } from "react";
// import { arch, platform } from "os";

// const greet = await invoke("greet", { name: "App Initialized" });
// const appName = await getName();
// const tauriVersion = await getTauriVersion();
// const archName = await arch();
// const platformName = await platform();
const getResults = async () => {
  return await Promise.all([
    invoke<{ message: string; other_val: number }>("greet", { number: 42 }),
    getName(),
    getTauriVersion(),
  ]);
};

const Tauri = () => {
  useEffect(() => {
    // @ts-ignore
    if (window.__TAURI_IPC__) {
      const setResults = async () => {
        const data = await getResults();
        return data;
      };
      setResults().then((r) => {
        console.table({
          greet: r[0].message,
          number: r[0].other_val,
          appName: r[1],
          tauriVersion: r[2],
        });
      });
    }
  }, []);

  return null;
};

export default Tauri;

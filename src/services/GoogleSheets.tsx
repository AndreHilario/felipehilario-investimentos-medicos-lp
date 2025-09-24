import { FormDataSheets } from "../features/quests/Questionary";

// api/sendToGoogleSheet.ts
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbz3Qz7tKa-QW5OiSfbZ2NaP6plONqNzcK0pf_mStY9taGGnYzXp12HwKEFXkT2kHkkHRQ/exec'; // cole a URL da implantação
const APPS_SCRIPT_SECRET = '893318107295-3d3kqvdk8l5n7n7vg1sgo7463bv07gv1.apps.googleusercontent.com'; // mesmo valor do SECRET no GAS

export async function sendToGoogleSheet(data: FormDataSheets) {
  // Sanitizações simples (opcional)
  const normalized: FormDataSheets = {
    ...data,
  };

  const payload = {
    apiKey: APPS_SCRIPT_SECRET,
    ...normalized
  };

  const resp = await fetch(WEB_APP_URL, {
    method: 'POST',
    headers: {
      // Evita preflight CORS
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(payload)
  });

  // O GAS geralmente responde 200 sempre; verifique o JSON 'ok'
  const json = await resp.json().catch(() => null);

  if (!json || json.ok !== true) {
    const msg = json && json.error ? json.error : `Falha ao enviar (status HTTP ${resp.status})`;
    throw new Error(msg);
  }

  return json; // { ok: true, inserted: 1 }
}
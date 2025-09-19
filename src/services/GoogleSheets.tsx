const GAS_URL = 'https://script.google.com/macros/s/AKfycbzAHi7q8lm8S9MqMdft3Y2D8G9qHt9mvc8edlv5xGILv8h6GnpI7LzJq_ChIPU6uP_N/exec'; // coloque a URL do Web App nas envs do seu bundler
const GAS_KEY = 'Y2hhdmVzLWZvcnRlcw-2025-09-17-51c2'; // se usar a chave opcional

export interface FormDataSheet {
    patrimonioFaixa: 'Até R$300.000' | 'De R$300.001 a R$1.000.000' | 'De R$1.000.001 a R$3.000.000' | 'Acima de R$3.000.001';
    meta: 'Reduzir carga de plantões' | 'Manutenção e proteção do patrimônio construído' | 'Garantir aposentadoria através de renda passiva de investimentos' | 'Se organizar financeiramente';
    desafio: string;
    urgenciaFaixa: '0–4' | '5–8' | '9–10';
    nomeCompleto: string;
    whatsapp: string;
}

export async function sendToGoogleSheet(data: FormDataSheet): Promise<void> {
    if (!GAS_URL) throw new Error('GAS_URL ausente');

    const url = GAS_KEY ? `${GAS_URL}?key=${encodeURIComponent(GAS_KEY)}` : GAS_URL;

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    // Em Apps Script, o status HTTP pode vir sempre 200.
    // Então verificamos o body:
    const json = await res.json().catch(() => null);

    if (!json || json.ok !== true) {
        const errMsg = json?.error || 'Falha ao enviar para a planilha';
        throw new Error(errMsg);
    }
}
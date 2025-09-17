const GAS_URL = import.meta.env.VITE_GAS_URL; // coloque a URL do Web App nas envs do seu bundler
const GAS_KEY = import.meta.env.VITE_GAS_KEY; // se usar a chave opcional

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
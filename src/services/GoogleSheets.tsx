import axios from 'axios'; // Você precisaria instalar o axios: npm install axios ou yarn add axios

const GAS_URL = 'https://script.google.com/macros/s/AKfycbzR8g6QyurHy5vUBSZB7ff0pm09dIkPomWPaYck-AuQ8c8EuBIesfmabmHKdTUvBLrR/exec';
const GAS_KEY = 'Y2hhdmVzLWZvcnRlcw-2025-09-17-51c2';

export interface FormDataSheet {
    investAmount: 'ate_300k' | '300k_a_1m' | '1m_a_3m' | 'acima_3m' | '';
    goal: 'reduzir_plantoes' | 'manutencao_protecao' | 'aposentadoria_renda_passiva' | 'organizacao_financeira' | '';
    challenge: string;
    urgency: number;
    fullName: string;
    whatsapp: string;
}

export async function sendToGoogleSheet(data: FormDataSheet): Promise<void> {
    if (!GAS_URL) throw new Error('GAS_URL ausente');

    const url = GAS_KEY ? `${GAS_URL}?key=${encodeURIComponent(GAS_KEY)}` : GAS_URL;

    try {
        const res = await axios.post(url, data, { // Axios automaticamente serializa 'data' para JSON
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = res.data; // Axios já entrega a resposta JSON em res.data

        if (!json || json.ok !== true) {
            const errMsg = json?.error || 'Falha ao enviar para a planilha';
            throw new Error(errMsg);
        }
    } catch (error: any) {
        // Axios também tem um objeto de erro mais detalhado para erros de rede/HTTP
        // Mas para erros lógicos do Apps Script (como json.ok === false), seu tratamento já é bom.
        console.error("Erro na requisição Axios:", error);
        throw new Error(error.response?.data?.error || error.message || 'Erro desconhecido ao enviar para a planilha');
    }
}
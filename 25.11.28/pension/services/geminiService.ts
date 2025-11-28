import { GoogleGenAI, ChatSession, GenerateContentResult } from "@google/genai";
import { ROOMS, AMENITIES, SLOGANS } from '../constants';

const apiKey = process.env.API_KEY || '';
// Fallback for demo purposes if env is missing (Safety: Only do this in client-side demos, normally server-side)
// In a real app, strict handling of process.env.API_KEY is required.

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
당신은 'Celestia Cliffside(셀레스티아 클리프사이드)' 펜션의 전문 AI 컨시어지입니다.
당신의 역할은 고객의 질문에 친절하고 품격 있는 어조로 답변하여 펜션의 매력을 전달하고 예약을 유도하는 것입니다.

[펜션 정보]
1. 위치: 산속에 위치하며, 모든 객실에서 오션뷰가 보이는 독채 펜션입니다.
2. 타겟: 30대 신혼부부 및 연인, 조용하고 고급스러운 힐링을 원하는 고객.
3. 핵심 슬로건: ${SLOGANS.join(', ')}

[객실 정보]
${ROOMS.map(r => `- ${r.name}: ${r.description} (가격: ${r.price})`).join('\n')}

[부대시설 및 서비스]
${AMENITIES.map(a => `- ${a.title}: ${a.description}`).join('\n')}

[응대 가이드]
- 어조: 정중하고, 차분하며, 고급스러운 '해요체'를 사용하세요. (예: "고객님, 그 부분은 이렇게 준비되어 있습니다.")
- 예약 문의: 예약은 'RESERVATION' 메뉴에서 가능하다고 안내해주세요.
- 추천: 커플에게는 'Moonlight Villa'를, 일출을 좋아하는 고객에게는 'Sunrise Suite'를 추천해주세요.
- 모르는 정보: 펜션 정보에 없는 내용은 정중히 사과하고 프론트 데스크로 문의 달라고 하세요.
`;

let chatSession: ChatSession | null = null;

export const initializeChat = async (): Promise<ChatSession> => {
  if (chatSession) return chatSession;

  try {
    chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7, 
        }
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "죄송합니다. 현재 AI 컨시어지 시스템을 연결할 수 없습니다.";
  }

  try {
    const result: GenerateContentResult = await chatSession.sendMessage({
        message: message
    });
    return result.response.text || "답변을 생성하는 데 문제가 발생했습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "잠시 후 다시 시도해 주세요.";
  }
};

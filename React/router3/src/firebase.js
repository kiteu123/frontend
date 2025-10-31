// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyDx6yI0srgvDwXUlMGOq9aMyJPleF2GJVc",
  authDomain: "router3-fire-kyw.firebaseapp.com",
  projectId: "router3-fire-kyw",
  storageBucket: "router3-fire-kyw.firebasestorage.app",
  messagingSenderId: "196281546021",
  appId: "1:196281546021:web:615b08f0d619d814fb96cc",
  measurementId: "G-X24RRYL8YF",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;

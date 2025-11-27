import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 p-6 h-48 overflow-y-auto custom-scroll text-xs text-gray-600 leading-relaxed border border-gray-200">
      <p className="mb-4">
        두산로보틱스는 이용자의 문의 대응 및 더 나은 서비스 제공을 위한 이용 분석 등을 위해 이용자의 개인정보를 수집합니다. 아래 내용을 자세히 읽어 보시고 동의 여부를 체크하여 주시기 바랍니다.
      </p>
      
      <p className="font-bold mb-2">수집의 목적</p>
      <p className="mb-4">두산로보틱스는 다음과 같은 목적을 위해 이용자의 개인정보를 수집합니다.</p>
      
      <ul className="list-disc pl-4 mb-4 space-y-1">
        <li>이용자의 서비스 문의 또는 요청에 응하거나, 이용자에게 유익한 정보를 제공하기 위하여</li>
        <li>각종 민원처리를 위하여</li>
        <li>서비스 이용분석을 통해 이용자에게 더 나은 서비스를 제공하고 본 사이트의 수준을 향상시키기 위하여</li>
      </ul>

      <p className="font-bold mb-2">수집하는 개인정보 항목</p>
      <p className="mb-4">
        필수항목 : 이름, 회사명, 이메일, 전화번호, 국가, 문의내용<br/>
        선택항목 : 첨부파일
      </p>

      <p className="font-bold mb-2">개인정보의 보유 및 이용기간</p>
      <p className="mb-4">
        원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
      </p>
      
      <div className="w-full flex justify-center py-2">
         <button className="flex items-center text-gray-500 hover:text-black">
           개인정보 수집 및 이용동의 더 보기 <span className="ml-1 text-[10px]">∨</span>
         </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Tabs from './Tabs';
import PrivacyPolicy from './PrivacyPolicy';

const InquiryForm: React.FC = () => {
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  
  // State for form fields (visual representation only for this demo)
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '대한민국',
    source: '',
    content: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full">
      <Tabs />

      {/* AS Notice Box */}
      <div className="bg-gray-100 p-8 rounded-sm mb-12 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-0 text-center md:text-left">
          A/S 등 서비스와 관련된 문의는 <span className="font-bold">'A/S 신청'</span> 페이지에서 접수 부탁드립니다.
        </p>
        <button className="bg-white border border-gray-300 px-6 py-3 text-sm font-medium flex items-center hover:bg-gray-50 transition-colors">
          A/S 신청 바로가기 <ArrowRight size={16} className="ml-2" />
        </button>
      </div>

      <div className="flex justify-end mb-4">
        <span className="text-xs text-blue-600 font-medium">* 필수 입력항목</span>
      </div>

      {/* Form Grid */}
      <form className="border-t border-gray-200">
        
        {/* Row 1: Inquiry Type & Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-32 lg:w-40 py-4 md:py-6 flex items-center text-sm font-medium text-gray-800">
              문의 항목 <span className="text-blue-600 ml-1">*</span>
            </div>
            <div className="flex-grow py-2 md:py-4 md:pr-8">
              <select 
                name="inquiryType"
                className="w-full bg-gray-100 border-none rounded-none px-4 py-3 text-sm focus:ring-1 focus:ring-gray-400 outline-none"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="">문의 항목을 선택해 주세요.</option>
                <option value="product">제품 문의</option>
                <option value="solution">솔루션 문의</option>
                <option value="quote">견적 문의</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-32 lg:w-40 py-4 md:py-6 flex items-center text-sm font-medium text-gray-800 md:pl-8">
              이름 <span className="text-blue-600 ml-1">*</span>
            </div>
            <div className="flex-grow py-2 md:py-4">
              <input 
                type="text" 
                name="name"
                placeholder="이름을 입력해 주세요."
                className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gray-400 outline-none"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Company & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-32 lg:w-40 py-4 md:py-6 flex items-center text-sm font-medium text-gray-800">
              회사명 <span className="text-blue-600 ml-1">*</span>
            </div>
            <div className="flex-grow py-2 md:py-4 md:pr-8">
              <input 
                type="text" 
                name="company"
                placeholder="회사명을 입력해 주세요."
                className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gray-400 outline-none"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-32 lg:w-40 py-4 md:py-6 flex items-center text-sm font-medium text-gray-800 md:pl-8">
              이메일 <span className="text-blue-600 ml-1">*</span>
            </div>
            <div className="flex-grow py-2 md:py-4">
              <input 
                type="email" 
                name="email"
                placeholder="이메일을 입력해 주세요."
                className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gray-400 outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Row 3: Phone & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-32 lg:w-40 py-4 md:py-6 flex items-center text-sm font-medium text-gray-800">
              전화번호 <span className="text-blue-600 ml-1">*</span>
            </div>
            <div className="flex-grow py-2 md:py-4 md:pr-8">
              <input 
                type="tel" 
                name="phone"
                placeholder="전화번호를 입력해 주세요. (숫자만 입력 가능)"
                className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gray-400 outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-32 lg:w-40 py-4 md:py-6 flex items-center text-sm font-medium text-gray-800 md:pl-8">
              국가 <span className="text-blue-600 ml-1">*</span>
            </div>
            <div className="flex-grow py-2 md:py-4">
              <select 
                name="country"
                className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gray-400 outline-none"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="대한민국">대한민국</option>
                <option value="미국">미국</option>
                <option value="중국">중국</option>
                <option value="독일">독일</option>
              </select>
            </div>
          </div>
        </div>

        {/* Row 4: Referral Source */}
        <div className="grid grid-cols-1 border-b border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-32 lg:w-40 py-4 md:py-6 flex items-center text-sm font-medium text-gray-800">
              두산 로봇을 알게된 경로 <span className="text-blue-600 ml-1">*</span>
            </div>
            <div className="flex-grow py-2 md:py-4 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <select 
                  name="source"
                  className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gray-400 outline-none"
                  value={formData.source}
                  onChange={handleChange}
                >
                  <option value="">두산로봇을 알게된 경로를 선택해 주세요.</option>
                  <option value="search">검색엔진</option>
                  <option value="exhibition">전시회</option>
                  <option value="news">뉴스/기사</option>
                  <option value="sns">SNS</option>
                  <option value="referral">지인 추천</option>
                  <option value="other">기타</option>
                </select>
              </div>
              <div className="w-full md:w-1/2">
                <input 
                  type="text" 
                  disabled={formData.source !== 'other'}
                  placeholder="기타 경로를 입력해 주세요."
                  className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gray-400 outline-none disabled:text-gray-400 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Content */}
        <div className="grid grid-cols-1 border-b border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-32 lg:w-40 py-4 md:py-6 flex items-start pt-6 text-sm font-medium text-gray-800">
              내용 <span className="text-blue-600 ml-1">*</span>
            </div>
            <div className="flex-grow py-4">
              <textarea 
                name="content"
                rows={8}
                placeholder="내용을 입력해 주세요."
                className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gray-400 outline-none resize-none"
                value={formData.content}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Row 6: File Upload */}
        <div className="grid grid-cols-1 border-b border-gray-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-32 lg:w-40 py-4 md:py-6 flex items-center text-sm font-medium text-gray-800">
              첨부파일
            </div>
            <div className="flex-grow py-4 flex items-center gap-2">
              <div className="relative flex-grow max-w-md">
                <input 
                  type="text" 
                  readOnly 
                  placeholder="파일을 선택해 주세요." 
                  className="w-full bg-gray-100 border-none px-4 py-3 text-sm text-gray-500"
                />
              </div>
              <label className="cursor-pointer bg-white border border-gray-300 px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
                찾아보기
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="md:pl-32 lg:pl-40 pb-4 text-xs text-gray-500">
            * 첨부 파일은 jpg, png, gif, hwp, pdf, ppt, pptx, xls, xlsx, zip 파일에 한해 등록이 가능합니다. (최대 용량 : 10MB)
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div className="mt-16">
          <h3 className="text-lg font-medium mb-4">개인정보 수집 및 이용동의</h3>
          <PrivacyPolicy />
          
          <div className="mt-4 flex justify-end items-center">
            <label className="flex items-center cursor-pointer select-none group">
              <span className="text-sm text-gray-700 mr-2 group-hover:text-black">만 14세 이상이며, 개인정보 수집 및 이용에 동의합니다.</span>
              <div 
                className={`w-5 h-5 border flex items-center justify-center transition-colors ${privacyAgreed ? 'bg-black border-black text-white' : 'bg-white border-gray-300 text-transparent'}`}
                onClick={() => setPrivacyAgreed(!privacyAgreed)}
              >
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="ml-2 text-sm font-bold underline cursor-pointer">동의함</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-2 mt-12 mb-20">
          <button type="button" className="w-32 py-4 border border-gray-300 bg-white text-gray-800 font-medium text-sm hover:bg-gray-50 transition-colors">
            취소
          </button>
          <button type="button" className="w-32 py-4 bg-black text-white font-medium text-sm hover:bg-gray-800 transition-colors">
            접수
          </button>
        </div>

      </form>
    </div>
  );
};

export default InquiryForm;
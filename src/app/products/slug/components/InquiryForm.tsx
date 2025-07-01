'use client';
import { useForm } from 'react-hook-form';
import { sendInquiryEmail } from '@/lib/email';

export default function InquiryForm({ productName }: { productName: string }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    await sendInquiryEmail({
      to: 'alidjie@gmail.com',
      subject: `询盘产品: ${productName}`,
      text: `
        产品名称: ${productName}
        姓名: ${data.name}
        邮箱: ${data.email}
        电话: ${data.phone}
        数量: ${data.quantity}
        备注: ${data.message || '无'}
      `
    });
    alert('询盘已发送！我们会尽快联系您');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
      <h3 className="text-xl font-bold">产品询盘</h3>
      <div>
        <label className="block mb-1">数量</label>
        <input 
          type="number" 
          {...register('quantity', { required: '请填写数量' })} 
          className="w-full p-2 border rounded"
        />
        {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
      </div>
      {/* 其他字段：姓名、邮箱、电话... */}
      <button 
        type="submit" 
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        提交询盘
      </button>
    </form>
  );
}
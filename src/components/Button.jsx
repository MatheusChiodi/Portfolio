import { Eye, Plus, X } from 'lucide-react';

export default function Button({ title, onClick, icon }) {
  return (
    <button className="bg-gray-800 text-white p-2 px-4 rounded-lg hover:bg-[#ff5555] cursor-pointer flex items-center justify-center gap-3" onClick={onClick}>
      {title}

      {icon === 'plus' && <Plus size={20} />}
      {icon === 'eye' && <Eye size={20} />}
      {icon === 'x' && <X size={20} />}
    </button>
  );
}

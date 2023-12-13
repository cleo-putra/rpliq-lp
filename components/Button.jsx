import Image from "next/image";


const Button = ({title, icon }) => {
  return (
    <button
      className={`flexCenter gap-3 rounded border btn_dark_green`}
      type='button'
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      <label className="font-bold whitespace-nowrap text-black-50">{title}</label>
    </button>
  );
};

export default Button;

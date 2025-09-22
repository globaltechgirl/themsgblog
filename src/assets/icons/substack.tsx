import type { ImgHTMLAttributes } from "react";

const SubstackIcon = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    {...props}
    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20id='substack'%3e%3cg%20id='social/logos/substack'%20fill='none'%20fill-rule='evenodd'%20stroke='none'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1'%3e%3cpath%20id='line'%20stroke='%23000'%20d='M3.5,2.5%20L19.5,2.5%20L19.5,4.5%20L3.5,4.5%20Z%20M3.5,6.5%20L19.5,6.5%20L19.5,8.5%20L3.5,8.5%20Z%20M3.5,10.5%20L19.5,10.5%20L19.5,21.5%20L11.5,16.5%20L3.5,21.5%20L3.5,10.5%20Z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
    alt="Substack Icon"
  />
);

export default SubstackIcon;

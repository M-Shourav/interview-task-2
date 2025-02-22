import { cn } from "@/lib/utlis";

interface props {
  amount: string;
  className?: string;
}

const FormattedPrice = ({ amount, className }: props) => {
  const priceFormate = new Number(amount).toLocaleString("en-us", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  });
  return (
    <div className={cn("text-base font-semibold text-blue-600", className)}>
      {priceFormate}
    </div>
  );
};

export default FormattedPrice;

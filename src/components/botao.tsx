import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
    base: 'rounded-lg px-5 justify-center font-medium flex items-center gap-2',

    variants: {
        variant:{
            primario: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secundario: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
        },

        tamanho: {
            padrao: 'py-2',
            completo: 'w-full h-11',
        }
    },
    
    defaultVariants: {
        variant: 'primario',
        tamanho: 'padrao',
    },

});

interface BotaoProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

export function Botao({
    children, 
    variant,
    tamanho,
    ...props
}: BotaoProps) {
    return (
        <button {...props} className={buttonVariants({ variant, tamanho })}>
            {children}
        </button>
    );
}
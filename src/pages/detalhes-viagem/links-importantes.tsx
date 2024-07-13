import { Link2, Plus } from "lucide-react";
import { Botao } from "../../components/botao";

export function LinksImportantes() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl ">Links importantes</h2>

            <div className="space-y-5">

                <div className="flex items-center justify-between gap-4">

                    <div className="space-y-1.5 ">

                        <span className="block font-medium text-zinc-100">
                            Site do SVideos
                        </span>

                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200" target="_blank" rel="noopener noreferrer">
                            https://www.xvideos.com/
                        </a>

                    </div>

                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-4">

                    <div className="space-y-1.5 ">

                        <span className="block font-medium text-zinc-100">
                            Twitter (X)
                        </span>

                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200" target="_blank" rel="noopener noreferrer">
                            https://www.x.com/
                        </a>

                    </div>

                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>

            <Botao variant='secundario' tamanho="completo">
                <Plus className="size-5" />
                Cadastrar novo link
            </Botao>
        </div>
    );
}
import { Plus } from "lucide-react";
import { useState } from "react";
import { CriaAtividadeModal } from "./cria-atividade-modal";
import { LinksImportantes } from "./links-importantes";
import { ListaConvidados } from "./lista-convidados";
import { Atividades } from "./atividades";
import { DestinoEDataHeader } from "./destino-e-data-header";
import { Botao } from "../../components/botao";

export function PaginaDetalheViagem() {

    const [isModalCriaAtividadeAberto, setIsModalCriaAtividadeAberto] = useState(false);

    function abreModalCriaAtividade() {
        setIsModalCriaAtividadeAberto(true);
    }

    function fechaModalCriaAtividade() {
        setIsModalCriaAtividadeAberto(false);
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <DestinoEDataHeader
            />

            <main className="flex gap-16 px-4">

                <section className="flex-1 space-y-6">

                    <div className="flex items-center justify-between ">
                        <h2 className="text-3xl font-semibold">Atividades</h2>

                        <Botao variant='primario' tamanho="padrao" onClick={abreModalCriaAtividade}>
                            <Plus className="size-5 text-lime-950" />
                            Cadastrar atividade
                        </Botao>
                        
                    </div>

                    <Atividades
                    />

                </section>

                <section className="w-80 space-y-6">

                    <LinksImportantes
                    />

                    <div className="w-full h-px bg-zinc-800"></div>

                    <ListaConvidados
                    />

                </section>
            </main>

            {isModalCriaAtividadeAberto ?
                <CriaAtividadeModal
                    fechaModalCriaAtividade={fechaModalCriaAtividade}
                />
                : null}

        </div>
    );
}
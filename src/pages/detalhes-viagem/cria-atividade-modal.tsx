import { X, Tag, Calendar } from "lucide-react";
import { Botao } from "../../components/botao";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CriaAtividadeModalProps {
    fechaModalCriaAtividade: () => void;
}

export function CriaAtividadeModal({
    fechaModalCriaAtividade
}: CriaAtividadeModalProps) {

    const { tripId } = useParams();

    async function criarAtividade(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const dados = new FormData(event.currentTarget);
        const tituloAtividade = dados.get('titulo_atividade')?.toString();
        const ocorreQuando = dados.get('occurs_at')?.toString();

        await api.post(`/trips/${tripId}/activities`, {
            title: tituloAtividade,
            occurs_at: ocorreQuando
        });

        fechaModalCriaAtividade();
        
    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">

                <div className="space-y-2">

                    <div className="flex items-center justify-between">

                        <h2 className=" text-lg font-semibold">Cadastrar atividade</h2>

                        <button type="button" onClick={fechaModalCriaAtividade}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-small text-zinc-400">
                        Todos os convidados podem visualizar as atividades.
                    </p>

                </div>

                <form onSubmit={criarAtividade} className="space-y-3">

                    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center gap-2">

                        <Tag className="text-zinc-400 size-5" />

                        <input
                            type="text"
                            name="titulo_atividade"
                            placeholder="Qual a atividade?"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />

                    </div>

                    <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center gap-2">

                        <Calendar className="text-zinc-400 size-5" />

                        <input
                            type="datetime-local"
                            name="occurs_at"
                            placeholder="Data e horário da atividade."
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />

                    </div>

                    <Botao variant='primario' tamanho='completo'>
                        Salvar atividade
                    </Botao>

                </form>

            </div>
        </div>
    );
}
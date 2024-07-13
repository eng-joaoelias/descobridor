import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Botao } from "../../components/botao";
import { api } from "../../lib/axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Participante {
    id: string;
    name: string | null;
    email: string;
    is_confirmed: boolean;
}

export function ListaConvidados() {

    const { tripId } = useParams();
    const [participantes, setParticipantes] = useState<Participante[]>([]);

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(resposta => setParticipantes(resposta.data.participants));
    });

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl ">Convidados</h2>

            <div className="space-y-5">

                {participantes.map((participante, index) => {
                    return (

                        <div key={participante.id} className="flex items-center justify-between gap-4">

                            <div className="space-y-1.5 ">

                                <span className="block font-medium text-zinc-100">
                                    {participante.name ?? `Convidado ${index}`}
                                </span>

                                <span className="block text-sm text-zinc-400 truncate">
                                    {participante.email}
                                </span>

                            </div>

                            {participante.is_confirmed ?
                                <CheckCircle2 className="text-green-400 size-5 shrink-0" />
                                :
                                <CircleDashed className="text-zinc-400 size-5 shrink-0" />}
                        </div>

                    );
                })}

            </div>

            <Botao variant='secundario' tamanho="completo">
                <UserCog className="size-5" />
                Gerenciar convidados
            </Botao>
        </div>
    );
}
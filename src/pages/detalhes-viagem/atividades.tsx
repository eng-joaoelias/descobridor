import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Atividade {
    date: string;
    activities: {
        id: string;
        title: string;
        occurs_at: string;
    }[];

}

export function Atividades() {

    const { tripId } = useParams();
    const [atividades, setAtividades] = useState<Atividade[]>([]);

    useEffect(() => {
        api.get(`/trips/${tripId}/activities`).then(resposta => setAtividades(resposta.data.activities));
    });

    return (
        <div className="space-y-8">

            {atividades.map(categoria => {
                return (
                    <div key={categoria.date} className="space-y-2.5">

                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl text-zinc-300 font-semibold">Dia {format(categoria.date, 'd')}</span>
                            <span className="text-xs text-zinc-500">{format(categoria.date, 'EEEE', { locale: ptBR })}</span>
                        </div>

                        {categoria.activities.length > 0 ? (

                            <div>
                                {categoria.activities.map(atividade => {
                                    return (
                                        <div key={atividade.id} className="space-y-2.5">
                                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                                <CircleCheck className="size-5 text-lime-300" />
                                                <span className="text-zinc-100">{atividade.title}</span>
                                                <span className="text-zinc-100 text-sm ml-auto">{format(atividade.occurs_at, 'HH:mm')}h</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        ) : (
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                        )
                        }

                    </div>
                );
            })}

            <div className="space-y-2.5">

                <div className="flex gap-2 items-baseline">
                    <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                    <span className="text-xs text-zinc-500">Sábado</span>
                </div>

                <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>

            </div>

            {/* <div className="space-y-2.5">

                <div className="flex gap-2 items-baseline">
                    <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                    <span className="text-xs text-zinc-500">Domingo</span>
                </div>

                <div className="space-y-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">Academia em grupo</span>
                        <span className="text-zinc-100 text-sm ml-auto">08:00h</span>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">Orgia</span>
                        <span className="text-zinc-100 text-sm ml-auto">23:30h</span>
                    </div>
                </div>

            </div> */}

        </div>
    );
}
import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Botao } from "../../components/botao";
import { useParams } from 'react-router-dom'
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";

interface Viagem{
    destination: string;
    ends_at: string;
    id: string;
    is_confirmed: boolean
    starts_at: string
}

export function DestinoEDataHeader() {

    const { tripId } = useParams();
    const [viagem, setViagem] = useState<Viagem | undefined>();

    useEffect(() =>{
        api.get(`/trips/${tripId}`).then(resposta => setViagem(resposta.data.trip));
    });

    const dataExibida = viagem ?
    format(viagem.starts_at, "d ' de 'LLL").concat(' até ').concat(
        format(viagem.ends_at, "d' de 'LLL")
    ) : null;

    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">

            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className="text-zinc-100 text-lg">
                    {viagem?.destination}
                </span>
            </div>

            <div className="flex items-center gap-5">

                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="text-zinc-100 text-lg">
                        {dataExibida}
                    </span>
                </div>

                <div className="w-px h-6 bg-zinc-800">

                </div>

                <Botao variant='secundario'>
                    Alterar local/data
                    <Settings2 className="size-5" />
                </Botao>

            </div>

        </div>
    );
}
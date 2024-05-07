import {Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {Checkout} from "./pages/Checkout";
import {Delivery} from "./pages/Delivery";
import {FormProvider, useForm} from 'react-hook-form'
import * as zod from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";

const newFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewFormData = zod.infer<typeof newFormValidationSchema>

export function Router() {
    const newCycleForm = useForm<NewFormData>({
        resolver: zodResolver(newFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })

    return (
        <Routes>
            <Route path={'/'} element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route
                    path="/delivery"
                    element={
                        <FormProvider {...newCycleForm}>
                            <Delivery/>
                        </FormProvider>
                    }
                />
                <Route path="*" element={<div>404</div>}/>
            </Route>
        </Routes>
    );
}

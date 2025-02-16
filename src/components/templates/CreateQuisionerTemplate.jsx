import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from "lucide-react";
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Question } from '../organisms/Quisioner/Question';


const quisionerSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters" }),
    questions: z.array(
        z.object({
            question: z.string().min(2, { message: "Question is required" }),
            type: z.enum(["BOOLEAN", "SCALE", "MULTIPLE_CHOICE"]),
            isRequired: z.boolean(),
            options: z.array(z.object({
                title: z.string().min(1, { message: "Option title is required" }),
                score: z.number().min(0, {
                    message: "Score must be greater than or equal to 0"
                })
            })).optional().default([])
        })
    )
});

export const CreateQuisionerTemplate = ({ forWho = "", onSubmitHandler = () => { } }) => {
    const form = useForm({
        defaultValues: {
            title: '',
            questions: []
        },
        resolver: zodResolver(quisionerSchema)
    });

    // Gunakan useFieldArray untuk menangani pertanyaan
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "questions"
    });

    return (
        <section className="relative flex flex-col gap-4">
            <header className="bg-white p-4 rounded-xl sticky top-0 z-10 flex justify-between items-center">
                <h1>Create Quisioner Page</h1>
                <Button onClick={() => append({
                    question: "", type: "BOOLEAN", isRequired: true, options: [{
                        title: "",
                        score: 0
                    }]
                })} type="button">
                    <Plus />
                    <span>Tambah Pertanyaan</span>
                </Button>
            </header>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitHandler)} className="bg-white p-4 rounded-xl flex flex-col gap-4">
                    <FormField
                        name="title"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl className="flex">
                                    <textarea
                                        type="text"
                                        className="bg-none text-4xl w-full h-full overflow-auto outline-none resize-none"
                                        placeholder="Judul Quisioner"
                                        {...field}
                                    ></textarea>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {fields.map((field, index) => {
                        return (
                            <FormField
                                key={field.id}
                                name={`questions.${index}.question`}
                                control={form.control}
                                render={({ field }) => (
                                    <Question
                                        index={index}
                                        question={field.value}
                                        isRequired={form.watch(`questions.${index}.isRequired`)}
                                        onChange={form.setValue}
                                        selectValue={form.watch(`questions.${index}.type`)}
                                        control={form.control}
                                        onRemove={remove}
                                    />
                                )}
                            />
                        )
                    })}

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </section>
    );
};

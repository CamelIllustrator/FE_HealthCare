import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import Question from '../organisms/Quisioner/Question';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const quisionerSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters" }),
    questions: z.array(
        z.object({
            question: z.string().min(1, { message: "Question is required" }),
            type: z.enum(["BOOLEAN", "text", "MULTIPLE_CHOICE"]),
        })
    )
});

export const CreateQuisionerTemplate = () => {
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

    const onSubmitHandler = (values) => {
        console.log({ values });
    };

    return (
        <section className="relative flex flex-col gap-4">
            <header className="bg-white p-4 rounded-xl sticky top-0 z-10 flex justify-between items-center">
                <h1>Create Quisioner Page</h1>
                <Button onClick={() => append({ question: "", type: "BOOLEAN" })} type="button">
                    <Plus />
                    <span>Tambah Pertanyaan</span>
                </Button>
            </header>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitHandler)} className="bg-white p-4 rounded-xl flex flex-col gap-2">
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
                                    <FormItem>
                                        <FormControl>
                                            <Question {...field} index={index} />
                                        </FormControl>
                                        <Button type="button" onClick={() => remove(index)} className="mt-2">
                                            Hapus Pertanyaan
                                        </Button>
                                    </FormItem>
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

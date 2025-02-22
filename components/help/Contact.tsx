"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Swal from "sweetalert2";
import { DialogDescription } from "@radix-ui/react-dialog";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  lastName: z
    .string()
    .min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
  address: z
    .string()
    .min(5, { message: "La dirección debe tener al menos 5 caracteres." }),
  phone: z
    .string()
    .min(9, { message: "El teléfono debe tener al menos 9 caracteres." }),
  comment: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactButton({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarnos. Te responderemos pronto.",
          confirmButtonColor: "#3085d6",
        });
        reset();
        setIsOpen(false);
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: ` Error ${error}`,
        text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"default"}
          className="bg-sky-500 hover:bg-sky-700 cursor-pointer"
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Solicita tu Demostración Gratuita</DialogTitle>
          <DialogDescription>
            Explora sin compromiso todas nuestras soluciones en una demostración
            personalizada
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input {...register("firstName")} placeholder="Nombre" />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}

          <Input {...register("lastName")} placeholder="Apellido" />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}

          <Input {...register("address")} placeholder="Localidad" />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message}</p>
          )}

          <Input {...register("phone")} placeholder="Teléfono" />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}

          <Textarea
            {...register("comment")}
            placeholder="Comentario (opcional)"
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

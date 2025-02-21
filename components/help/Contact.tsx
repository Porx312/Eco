"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import Swal from "sweetalert2"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  lastName: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
  address: z.string().min(5, { message: "La dirección debe tener al menos 5 caracteres." }),
  date: z.date({ required_error: "La fecha es requerida." }),
  time: z.string().min(1, { message: "La hora es requerida." }),
  postalCode: z.string().min(5, { message: "El código postal debe tener al menos 5 caracteres." }),
  phone: z.string().min(9, { message: "El teléfono debe tener al menos 9 caracteres." }),
  comment: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(data: FormData) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarnos. Te responderemos pronto.",
          confirmButtonColor: "#3085d6",
        })
        reset()
        setSelectedDate(undefined)
        setIsOpen(false)
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        confirmButtonColor: "#d33",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Solicitar una visita</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Formulario de Contacto</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input {...register("firstName")} placeholder="Nombre" />
          {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}

          <Input {...register("lastName")} placeholder="Apellido" />
          {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}

          <Input {...register("address")} placeholder="Dirección" />
          {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}

          {/* 📅 Calendario para seleccionar la fecha */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left">
                {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date)
                  setValue("date", date as Date, { shouldValidate: true })
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}

          {/* 🕒 Selector de hora */}
          <Select onValueChange={(value) => setValue("time", value, { shouldValidate: true })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccionar hora" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }, (_, i) => i + 8).map((hour) => (
                <SelectItem key={hour} value={`${hour}:00`}>{`${hour}:00`}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.time && <p className="text-sm text-red-500">{errors.time.message}</p>}

          <Input {...register("postalCode")} placeholder="Código Postal" />
          {errors.postalCode && <p className="text-sm text-red-500">{errors.postalCode.message}</p>}

          <Input {...register("phone")} placeholder="Teléfono" />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}

          <Textarea {...register("comment")} placeholder="Comentario (opcional)" />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

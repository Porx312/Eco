"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EcozonoCalculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [laundryCount, setLaundryCount] = useState("")
  const [waterConsumption, setWaterConsumption] = useState("")
  const [detergentCost, setDetergentCost] = useState("")
  const [softenerCost, setSoftenerCost] = useState("")
  const [antilimeCost, setAntilimeCost] = useState("")
  const [cleaningProductsCost, setCleaningProductsCost] = useState("")

  const calculateSavings = () => {
    const laundry = Number.parseFloat(laundryCount) || 0
    const water = Number.parseFloat(waterConsumption) || 0
    const detergent = Number.parseFloat(detergentCost) || 0
    const softener = Number.parseFloat(softenerCost) || 0
    const antilime = Number.parseFloat(antilimeCost) || 0
    const cleaning = Number.parseFloat(cleaningProductsCost) || 0

    const energySavings = laundry * 0.92 * 4 // Asumiendo 4 semanas por mes
    const productsSavings = (detergent + softener + antilime + cleaning) * 0.75 // 75% de ahorro en productos
    const installationSavings = 19 // 19€/mes por deterioro de instalación
    const waterSavings = water * 0.5 // Asumiendo 50% de ahorro en agua embotellada

    const ozoneSavings = energySavings + productsSavings + installationSavings
    const waterFilterSavings = waterSavings

    return {
      ozone: ozoneSavings.toFixed(2),
      waterFilter: waterFilterSavings.toFixed(2),
      total: (ozoneSavings + waterFilterSavings).toFixed(2),
    }
  }

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        setter(value)
      }
    }

  const savings = calculateSavings()

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Calcular Ahorro </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm md:max-w-xl">
          <DrawerHeader>
            <DrawerTitle>Calculadora de Ahorro </DrawerTitle>
            <DrawerDescription>
              Calcula cuánto puedes ahorrar con nuestro sistema de filtración y ozono.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="grid">
              <div className="grid gap-2">
                <Label htmlFor="laundry">Coladas por semana</Label>
                <Input
                  id="laundry"
                  type="text"
                  inputMode="decimal"
                  value={laundryCount}
                  onChange={handleInputChange(setLaundryCount)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="water">Gasto mensual en agua embotellada (€)</Label>
                <Input
                  id="water"
                  type="text"
                  inputMode="decimal"
                  value={waterConsumption}
                  onChange={handleInputChange(setWaterConsumption)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="detergent">Gasto mensual en detergente (€)</Label>
                <Input
                  id="detergent"
                  type="text"
                  inputMode="decimal"
                  value={detergentCost}
                  onChange={handleInputChange(setDetergentCost)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="softener">Gasto mensual en suavizante (€)</Label>
                <Input
                  id="softener"
                  type="text"
                  inputMode="decimal"
                  value={softenerCost}
                  onChange={handleInputChange(setSoftenerCost)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="antilime">Gasto mensual en antical (€)</Label>
                <Input
                  id="antilime"
                  type="text"
                  inputMode="decimal"
                  value={antilimeCost}
                  onChange={handleInputChange(setAntilimeCost)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cleaning">Gasto mensual en productos de limpieza (€)</Label>
                <Input
                  id="cleaning"
                  type="text"
                  inputMode="decimal"
                  value={cleaningProductsCost}
                  onChange={handleInputChange(setCleaningProductsCost)}
                />
              </div>
            </div>
          </div>
          <DrawerFooter className="flex-col items-start">
            <div className="w-full ">
              <p className="font-semibold">Ahorro mensual estimado:</p>
            <div className="flex justify-between w-full">
            <div>
             <p>Con ozono: {savings.ozone}€</p>
             <p>Con filtro de agua: {savings.waterFilter}€</p>
             </div>
             <p className="font-bold text-lg">Total: {savings.total}€</p>
            </div>
            
            </div>
            <DrawerClose asChild>
              <Button className="w-full">Cerrar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}


import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PaletteIcon } from "lucide-react";
import { useState } from "react";
import { Color, ColorChangeHandler, TwitterPicker } from "react-color";

interface ColorPickerProps {
  color: Color | undefined;
  onChange: ColorChangeHandler;
}

const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <Popover open={showPopover} onOpenChange={setShowPopover}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Change resume color."
          onClick={() => setShowPopover(true)}
        >
          <PaletteIcon className="size-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="border-none bg-transparent shadow-none"
        align="end"
      >
        <TwitterPicker
          color={color}
          onChange={onChange}
          triangle="top-right"
          colors={[
            "#b80000",
            "#db3e00",
            "#008b02",
            "#006b76",
            "#1273de",
            "#004dcf",
            "#eb144c",
            "#795548",
            "#4f6875",
            "#000000",
          ]}
        />
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;

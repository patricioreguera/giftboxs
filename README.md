# GIFT BOXS

# COMPLEMENTOS

https://flowbite.com/docs/components/card/

# DOCUMENTACION ASTRO

ISLAS:
https://docs.astro.build/es/recipes/sharing-state-islands/
https://docs.astro.build/es/recipes/sharing-state/

#EJEMPLO NANOESTORE EN COMPONENTE ASTRO

<div id="dialog" style="display: hidden">¡Hola Mundo!</div>

<script>
  import { isOpen } from "../sotre";

  // Escucha los cambios en el store y muestra/oculta el diálogo en consecuencia
  isOpen.subscribe(open => {
    if (open) {
      document.getElementById('dialog').style.display = 'block';
    } else {
      document.getElementById('dialog').style.display = 'none';
    }
  })
</script>

# EJEMPLO NANOESTORE EN COMPONENTE REACT

import { useStore } from "@nanostores/react";
import { isOpen, user } from "../sotre";
export default function Btn() {
// lee el valor del store con el hook `useStore`
const $isCartOpen = useStore(isOpen);
const MyUser = useStore(user);
// escribe en el store importado usando `.set`

    console.log(MyUser);
    const handleClick = () => {
    	isOpen.set(!$isCartOpen);
    	user.set({ ...MyUser, name: "pepe" });
    };

    return (
    	<>
    		<button
    			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    			onClick={handleClick}
    		>
    			Cartaaa
    		</button>
    		<h1>{MyUser.name}</h1>
    	</>
    );

}

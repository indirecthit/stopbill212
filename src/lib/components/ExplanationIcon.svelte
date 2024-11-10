<script lang="ts">
    import { BadgeAlert, SquarePlus, BadgeDollarSign, Snowflake, Clipboard, Siren, FastForward, House, Mail, Microscope, Pencil, ShoppingCart, Sun } from 'lucide-svelte';
    import type { Icon } from 'lucide-svelte';
    import type { ComponentType } from 'svelte';

    let { icon }: { icon: string } = $props();
    const icons: { [key: string]: ComponentType<Icon> } = {
        'BadgeAlert': BadgeAlert,
        'BadgeDollarSign': BadgeDollarSign,
        'Clipboard': Clipboard,
        'House': House,
        'Mail': Mail,
        'Microscope': Microscope,
        'Pencil': Pencil,
        'ShoppingCart': ShoppingCart,
        'Sun': Sun,
        'Snowflake': Snowflake,
        'Siren': Siren,
        'FastForward': FastForward,
        'SquarePlus': SquarePlus,
    };
    let iconComponent = icons[icon];
</script>

<svelte:component this={icons[icon]} />
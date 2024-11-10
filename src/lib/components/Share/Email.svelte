<script lang="ts">
    let { subject, body } = $props();

    let href = $derived.by(() => {
        return encodeURI(`mailto:?subject=${subject}&body=${body}`);
    });  ;
  </script>


<a href={href} class="btn-icon btn-icon-sm"  data-umami-event="social > Email">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg>
  </a
  >
  
  <style>
    a {
        transition: all 0.2s ease-in-out;
    }
    @media (prefers-reduced-motion: reduce) {
        a {
            transition: all 2s ease-in-out;
        }
    }

    a:focus,
    a:hover {
        transform: scale(1.1);
    }


</style>

  
  
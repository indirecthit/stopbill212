<script>

    let { url, hashtag = '', quote } = $props();
  
    const FACEBOOK_BLUE = '#3b5998';
  
    const baseUrl = 'https://www.facebook.com/sharer/sharer.php';
    const parametersObject = {
      u: url,
      ...(quote !== '' ? { quote } : {}),
      ...(hashtag !== '' ? { hashtag } : {}),
    };
  
    const params = Object.entries(parametersObject)
      .filter(([, value]) => value ?? false)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');
  
    const urlWithParameters = params === '' ? baseUrl : `${baseUrl}?${params}`;
  
    function handleClick() {
      const config = {
        height: 550,
        width: 400,
        location: 'no',
        toolbar: 'no',
        status: 'no',
        directories: 'no',
        menubar: 'no',
        scrollbars: 'yes',
        resizable: 'no',
        centerscreen: 'yes',
        chrome: 'yes',
      };
      return window.open(
        urlWithParameters,
        '',
        Object.keys(config)
          .map((key) => `${key}=${config[key]}`)
          .join(','),
      );
    }
  </script>
  
  <button onclick={handleClick} class="btn-icon btn-icon-sm">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>  
  </button
  >
  
  <style>
    button {
        transition: all 0.2s ease-in-out;
    }
    @media (prefers-reduced-motion: reduce) {
        button {
            transition: all 2s ease-in-out;
        }
    }

    button:focus,
    button:hover {
        transform: scale(1.1);
    }


</style>

  
  
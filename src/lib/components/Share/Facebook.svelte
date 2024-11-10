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
  
  <button onclick={handleClick} class="btn-icon btn-icon-sm"  data-umami-event="social > Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path></svg>
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

  
  

     const checkURL = (inputText) => {
        console.log(" Running ", inputText);
        const check = new RegExp(
          /^((?:https?:\/\/)?[^.\/]+(?:\.[^.\/]+)+(?:\/.*)?)$/
        );
        return check.test(inputText);
      };

      export { checkURL };
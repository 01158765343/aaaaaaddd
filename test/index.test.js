import { checkURL } from "../src/client/js/checkURL";


test('truo or fauls', () => {
    const a ="https://www.meaningcloud.com/developer/account/subscriptions"
    expect(checkURL(a)).toBeDefined();
  });


  
const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada vehicula tincidunt. Nullam euismod, orci nec consectetur viverra, magna lectus lobortis ipsum, sed consectetur nibh leo eget risus. Sed quis pulvinar nisl, aliquam scelerisque nisi. Sed dolor velit, viverra ut feugiat eu, euismod ut odio. Donec a molestie ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nulla velit, aliquet sit amet arcu imperdiet, porta posuere turpis.

Integer tempus, ante quis scelerisque consectetur, ligula purus sodales mi, vel consequat odio lacus quis purus. Praesent mollis, est eu mollis pulvinar, eros lectus dignissim nisl, vel consectetur ipsum neque non ipsum. Fusce sed massa ac dui accumsan pulvinar consectetur et augue. Ut eu facilisis elit. Ut non odio volutpat, fermentum augue at, accumsan metus. Pellentesque tempor diam eu commodo sagittis. Donec molestie sit amet eros et tempus. Donec faucibus lacus id tortor sagittis, aliquam luctus turpis tempus. Cras interdum orci id tempus facilisis. Donec viverra dolor sit amet ullamcorper consequat. Curabitur ullamcorper sit amet magna eu facilisis. Donec facilisis, lectus vel egestas rutrum, elit arcu convallis ex, vel mattis ante enim eget purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non gravida arcu.
`;

export default async function getResponse(userEmail, prompt) {
  const delay = (millis) =>
    new Promise((resolve, reject) => {
      setTimeout((_) => resolve(), millis);
    });
  await delay(1000);

  return loremIpsum;
}

import routeMapper from './routeMap';

export default class CrumbMaker {
  static fromRelativePath(path) {
    const segments = path.split('/').filter(p => p !== '');

    const crumbs = segments.reduce((acc, segment) => {
      const lastsegment = acc.slice(-1)[0];
      if (!lastsegment)
        return [{ url: `/${segment}`, label: routeMapper[segment] || segment }];

      const nextCrumb = {
        url: `${lastsegment.url}/${segment}/`,
        label: routeMapper[segment] || segment
      };
      return [...acc, nextCrumb];
    }, []);
    return crumbs;
  }
}

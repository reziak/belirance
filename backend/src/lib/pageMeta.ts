interface PageMetaArgs {
  count: number;
  page: number;
  limit: number;
}

export const pageMeta = (endpoint: string, { count, page, limit }: PageMetaArgs) => {
  const total_pages = Math.ceil(count / limit);
  const previous_page = page > 1 
    ? `${process.env.APP_URL}:${process.env.APP_PORT}/api/${endpoint}?page=${page-1}&limit=${limit}` 
    : null;
  const next_page = page < total_pages
    ? `${process.env.APP_URL}:${process.env.APP_PORT}/api/${endpoint}?page=${page+1}&limit=${limit}`
    : null;

  return {
    total_items: count,
    total_pages,
    previous_page,
    next_page,
  }
}

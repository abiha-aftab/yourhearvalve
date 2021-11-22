exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
		query {
      pages: allKontentItemPage {
        nodes {
          system {
            name
            id
          }
          elements {
            title {
              value
            }
            pages {
              value {
                name
              }
            }
          }
        }
      }
		}
	`);

  data.pages.nodes.forEach(page => {
    const {
      system: { name: pageSlug, id: pageID }
    } = page;
    const {
      elements: {
        title: { value: title },
        pages: { value: [{ name: category }] }
      }
    } = page;
    const categorySlug = category.replace(/\s+/g, '-').toLowerCase();
    const path = categorySlug === pageSlug ? `/${pageSlug}` : `/${categorySlug}/${pageSlug}`;
    const item = {
      url: path,
      slug: pageSlug,
      title: title,
      id: pageID
    }
    actions.createPage({
      path: path,
      component: require.resolve(`./src/templates/page-template.js`),
      context: { item },
    });
  });
}

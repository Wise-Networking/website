const options = {
  renderBlock({ record, adapter: { renderNode } }) {
    return renderNode(
      "figure",
      {},
      renderNode("img", { src: record.image.url, alt: record.image.alt }),
      renderNode(
        "figcaption",
        { style: "text-align: center" },
        record.image.title
      )
    )
  },
}

export default options

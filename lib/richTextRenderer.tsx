import React from "react";
import Link from "next/link";

/**
 * Extract YouTube video ID from various YouTube URL formats
 * Supports: youtube.com/watch?v=, youtu.be/, youtube.com/embed/, youtube-nocookie.com/embed/
 */
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/watch\?.+&v=)([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
    /youtube-nocookie\.com\/embed\/([^?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

// Define the types of marks that can be applied to text
interface Mark {
  type: "bold" | "italic" | "underline" | "code" | "superscript" | "subscript";
}

// Interface for asset data (images, files)
interface Asset {
  sys: {
    id: string;
  };
  fields?: {
    title?: string;
    description?: string;
    file?: {
      url?: string;
      details?: {
        image?: {
          width?: number;
          height?: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
  };
}

// Interface for entry data (embedded entries)
interface Entry {
  sys: {
    id: string;
    contentType?: {
      sys: {
        id: string;
      };
    };
  };
  fields?: any;
}

// Define the content node structure
interface ContentNode {
  nodeType: string;
  content?: ContentNode[];
  value?: string;
  data?: {
    uri?: string;
    target?: {
      sys: {
        id: string;
        type?: string;
        linkType?: string;
        urn?: string;
      };
      fields?: any;
    };
  };
  marks?: Mark[];
}

// Interface for rendering options
interface RenderOptions {
  renderNode?: {
    [key: string]: (node: ContentNode) => React.ReactNode;
  };
  renderMark?: {
    [key: string]: (text: React.ReactNode) => React.ReactNode;
  };
  links?: {
    entries?: {
      block?: Entry[];
      inline?: Entry[];
      hyperlink?: Entry[];
    };
    assets?: {
      block?: Asset[];
      hyperlink?: Asset[];
    };
  };
}

// Default render options
const defaultOptions: RenderOptions = {
  renderNode: {},
  renderMark: {},
};

/**
 * Main function to render rich text content
 */
export function renderRichText(
  node: ContentNode,
  options: RenderOptions = defaultOptions
): React.ReactNode {
  if (!node) return null;

  // Custom node renderer
  if (options.renderNode && options.renderNode[node.nodeType]) {
    return options.renderNode[node.nodeType](node);
  }

  switch (node.nodeType) {
    case "document":
      return node.content?.map((content, i) => (
        <React.Fragment key={i}>
          {renderRichText(content, options)}
        </React.Fragment>
      ));

    case "paragraph":
      return (
        <p className="mb-4">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </p>
      );

    case "heading-1":
      return (
        <h1 className="text-3xl font-bold mb-4">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </h1>
      );

    case "heading-2":
      return (
        <h2 className="text-2xl font-bold mb-3">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </h2>
      );

    case "heading-3":
      return (
        <h3 className="text-xl font-bold mb-2">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </h3>
      );

    case "heading-4":
      return node.content?.map((content, i) => (
        <h4 key={i} className="text-lg font-bold mb-2">
          {renderRichText(content, options)}
        </h4>
      ));

    case "heading-5":
      return node.content?.map((content, i) => (
        <h5 key={i} className="text-base font-bold mb-1">
          {renderRichText(content, options)}
        </h5>
      ));

    case "heading-6":
      return node.content?.map((content, i) => (
        <h6 key={i} className="text-sm font-bold mb-1">
          {renderRichText(content, options)}
        </h6>
      ));

    case "unordered-list":
      return (
        <ul className="list-disc list-inside mb-4">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </ul>
      );

    case "ordered-list":
      return (
        <ol className="list-decimal list-inside mb-4">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </ol>
      );

    case "list-item":
      return (
        <li className="mb-1">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </li>
      );

    case "hyperlink":
      const url = node.data?.uri || "";

      // Check if it's a YouTube URL and render as embedded video
      const youtubeVideoId = getYouTubeVideoId(url);
      if (youtubeVideoId) {
        return (
          <div className="my-6">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        );
      }

      // Check if it's an internal link (webskeet.com)
      const isInternalLink = url.startsWith("https://www.webskeet.com/") ||
                             url.startsWith("https://webskeet.com/") ||
                             url.startsWith("/");

      if (isInternalLink) {
        // Internal links: dofollow, same tab
        const internalPath = url.startsWith("/")
          ? url
          : url.replace(/https:\/\/(www\.)?webskeet\.com/, "") || "/";
        return (
          <Link
            href={internalPath}
            className="text-webskeet-blue hover:underline"
          >
            {node.content?.map((content, i) => (
              <React.Fragment key={i}>
                {renderRichText(content, options)}
              </React.Fragment>
            ))}
          </Link>
        );
      }

      // External links: nofollow, new tab
      return (
        <a
          href={url}
          className="text-webskeet-blue hover:underline"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </a>
      );

    case "entry-hyperlink":
      // Entry hyperlinks should be handled with custom renderer in options
      return (
        <span className="entry-hyperlink">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </span>
      );

    case "asset-hyperlink":
      // Asset hyperlinks should be handled with custom renderer in options
      return (
        <span className="asset-hyperlink">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </span>
      );

    case "embedded-entry-block":
      // Embedded entries should be handled with custom renderer in options
      return (
        <div className="embedded-entry-block my-4">
          {/* Fallback content if no custom renderer is provided */}
          <div className="border border-gray-300 p-4 rounded bg-gray-50">
            <p className="text-gray-500">
              Embedded Entry (ID: {node.data?.target?.sys?.id})
            </p>
          </div>
        </div>
      );

    case "embedded-entry-inline":
      // Inline embedded entries should be handled with custom renderer in options
      return (
        <span className="embedded-entry-inline">
          {/* Fallback content if no custom renderer is provided */}
          <span className="text-webskeet-blue">[Embedded Entry]</span>
        </span>
      );

    case "embedded-asset-block":
      // Embedded assets should be handled with custom renderer in options
      return (
        <div className="embedded-asset-block my-4">
          {/* Fallback content if no custom renderer is provided */}
          <div className="border border-gray-300 p-4 rounded bg-gray-50">
            <p className="text-gray-500">
              Embedded Asset (ID: {node.data?.target?.sys?.id})
            </p>
          </div>
        </div>
      );

    case "embedded-resource-block":
      // Embedded resources should be handled with custom renderer in options
      return (
        <div className="embedded-resource-block my-4">
          {/* Fallback content if no custom renderer is provided */}
          <div className="border border-gray-300 p-4 rounded bg-gray-50">
            <p className="text-gray-500">Embedded Resource</p>
          </div>
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <tbody>
              {node.content?.map((row, i) => (
                <React.Fragment key={i}>
                  {renderRichText(row, options)}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "table-row":
      return (
        <tr className="border-b border-gray-300">
          {node.content?.map((cell, i) => (
            <React.Fragment key={i}>
              {renderRichText(cell, options)}
            </React.Fragment>
          ))}
        </tr>
      );

    case "table-cell":
      return (
        <td className="border px-4 py-2">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </td>
      );

    case "table-header-cell":
      return (
        <th className="border px-4 py-2 bg-gray-100 font-bold">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </th>
      );

    case "text":
      if (!node.marks || node.marks.length === 0) {
        return node.value;
      }

      return node.marks.reduce((acc: React.ReactNode, mark: Mark) => {
        // Use custom mark renderer if provided
        if (options.renderMark && options.renderMark[mark.type]) {
          return options.renderMark[mark.type](acc);
        }

        // Default mark renderers
        switch (mark.type) {
          case "bold":
            return <strong>{acc}</strong>;
          case "italic":
            return <em>{acc}</em>;
          case "underline":
            return <u>{acc}</u>;
          case "code":
            return <code className="bg-gray-100 px-2 py-1 rounded">{acc}</code>;
          case "superscript":
            return <sup>{acc}</sup>;
          case "subscript":
            return <sub>{acc}</sub>;
          default:
            return acc;
        }
      }, node.value);

    case "hr":
      return <hr className="my-6 border-gray-200" />;

    case "blockquote":
      return (
        <blockquote className="border-l-4 border-webskeet-blue pl-4 italic my-4">
          {node.content?.map((content, i) => (
            <React.Fragment key={i}>
              {renderRichText(content, options)}
            </React.Fragment>
          ))}
        </blockquote>
      );

    default:
      console.warn(`Unhandled node type: ${node.nodeType}`);
      return null;
  }
}

/**
 * Helper function to create options with custom renderers for embedded entries and assets
 */
export function createRichTextRenderOptions(links?: {
  entries?: { [key: string]: Entry[] };
  assets?: { [key: string]: Asset[] };
}): RenderOptions {
  // Create maps for entries and assets
  const entryMap = new Map<string, Entry>();
  const assetMap = new Map<string, Asset>();

  // Populate entry map
  if (links?.entries) {
    Object.keys(links.entries).forEach((type) => {
      links.entries?.[type]?.forEach((entry) => {
        if (entry?.sys?.id) {
          entryMap.set(entry.sys.id, entry);
        }
      });
    });
  }

  // Populate asset map
  if (links?.assets) {
    Object.keys(links.assets).forEach((type) => {
      links.assets?.[type]?.forEach((asset) => {
        if (asset?.sys?.id) {
          assetMap.set(asset.sys.id, asset);
        }
      });
    });
  }

  // Create custom renderers
  return {
    renderNode: {
      "embedded-asset-block": (node) => {
        const assetId = node.data?.target?.sys?.id;
        if (!assetId) return null;

        const asset = assetMap.get(assetId);
        if (!asset || !asset.fields?.file?.url) {
          return <div>Asset not found</div>;
        }

        const { title, description, file } = asset.fields;
        const imageUrl = `https:${file.url}`;

        // Check if this is an image
        if (file.contentType?.startsWith("image/")) {
          return (
            <figure className="my-4">
              <img
                src={imageUrl}
                alt={description || title || ""}
                width={file.details?.image?.width}
                height={file.details?.image?.height}
                className="max-w-full h-auto"
              />
              {title && (
                <figcaption className="text-sm text-gray-600 mt-2">
                  {title}
                </figcaption>
              )}
            </figure>
          );
        }

        // Return a link for other file types
        return (
          <div className="my-4">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 border rounded hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span>{title || file.fileName || "Download file"}</span>
            </a>
          </div>
        );
      },
      "embedded-entry-block": (node) => {
        const entryId = node.data?.target?.sys?.id;
        if (!entryId) return null;

        const entry = entryMap.get(entryId);
        if (!entry) {
          return <div>Entry not found</div>;
        }

        // Generic fallback renderer for entries
        return (
          <div className="embedded-entry my-4 p-4 border rounded bg-gray-50">
            <h4 className="font-bold mb-2">
              {entry.fields?.title || "Embedded Entry"}
            </h4>
            {entry.fields?.description && <p>{entry.fields.description}</p>}
          </div>
        );
      },
      "embedded-entry-inline": (node) => {
        const entryId = node.data?.target?.sys?.id;
        if (!entryId) return null;

        const entry = entryMap.get(entryId);
        if (!entry) {
          return <span>[Entry not found]</span>;
        }

        // Simple inline renderer
        return (
          <span className="inline-block bg-gray-100 px-2 py-1 rounded text-sm">
            {entry.fields?.title || "Embedded Entry"}
          </span>
        );
      },
      "entry-hyperlink": (node) => {
        const entryId = node.data?.target?.sys?.id;
        if (!entryId) return null;

        const entry = entryMap.get(entryId);
        if (!entry) {
          return (
            <span>
              {node.content?.map((content, i) => (
                <React.Fragment key={i}>
                  {renderRichText(content, { renderNode: {}, renderMark: {} })}
                </React.Fragment>
              ))}
            </span>
          );
        }

        // Create a link (route path would depend on your app structure)
        return (
          <a
            href={`#${entryId}`} // Replace with your actual linking logic
            className="text-webskeet-blue hover:underline"
          >
            {node.content?.map((content, i) => (
              <React.Fragment key={i}>
                {renderRichText(content, { renderNode: {}, renderMark: {} })}
              </React.Fragment>
            ))}
          </a>
        );
      },
    },
  };
}

/**
 * Helper function to extract plain text from rich text node
 */
export function extractPlainText(node: ContentNode): string {
  if (node.nodeType === "text") {
    return node.value || "";
  }
  let text = "";
  if (node.content) {
    node.content.forEach((child) => {
      text += extractPlainText(child);
    });
  }
  return text;
}

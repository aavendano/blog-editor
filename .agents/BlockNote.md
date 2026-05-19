# BlockNote

> BlockNote is a React-based notion-style rich text editor, based on Prosemirror and Tiptap.

Important Notes:
 - It has an opinionated approach to building a rich text editor, and a much simpler API than either Tiptap or Prosemirror, so while it may be based on them, their APIs are not compatible and rarely exposed.
 - BlockNote uses it's own document model for reading, editing and saving documents. It is called BlockNote JSON and information can be found in the Document Structure page.

## Project-specific (this repo)

- [Custom blocks guide](./custom-blocks.md): how to add new embed blocks (`productEmbed`, `collectionEmbed` pattern) — schema, View/Block components, Shopify enrich, export via `ServerBlockNoteEditor`.

# Docs
    

## undefined

- [Introduction](/docs.md): BlockNote is a block-based rich-text editor for React, focused on providing a great out-of-the-box experience with minimal setup.

## features

- [Extensions](/docs/features/extensions.md): Add extensions to the editor to add keyboard shortcuts, input rules, and more.
- [Localization (i18n)](/docs/features/localization.md): Learn how to localize BlockNote to support multiple languages and customize text strings
- [Server-side processing](/docs/features/server-processing.md): Use `ServerBlockNoteEditor` to process Blocks on the server.
- [Backend Integration](/docs/features/ai/backend-integration.md): Integrate BlockNote AI with your backend
- [Custom AI Commands](/docs/features/ai/custom-commands.md): Customize the AI menu items (commands) in your BlockNote rich text editor
- [Getting Started](/docs/features/ai/getting-started.md): Add AI functionality to your BlockNote rich text editor
- [AI Rich Text Editing](/docs/features/ai.md): Add AI functionality to your BlockNote rich text editor
- [BlockNote AI Reference](/docs/features/ai/reference.md): Reference documentation for the BlockNote AI extension
- [Code Blocks](/docs/features/blocks/code-blocks.md): How to add syntax highlighting to code blocks.
- [Custom](/docs/features/blocks/custom.md): How to create custom blocks, inline content and styles in BlockNote.
- [Embeds](/docs/features/blocks/embeds.md): How to use embeds in BlockNote.
- [Built-in Blocks](/docs/features/blocks.md): BlockNote supports a variety of built-in block and inline content types that are included in the editor by default.
- [Inline Content](/docs/features/blocks/inline-content.md): How to use inline content in BlockNote.
- [List Types](/docs/features/blocks/list-types.md): How to use list types in BlockNote.
- [Tables](/docs/features/blocks/tables.md): How to use tables in BlockNote.
- [Typography](/docs/features/blocks/typography.md): How to use typography blocks in BlockNote.
- [Comments](/docs/features/collaboration/comments.md): Learn how to enable comments in your BlockNote editor
- [Real-time Collaboration](/docs/features/collaboration.md): Learn how to create multiplayer experiences with BlockNote
- [Custom Blocks](/docs/features/custom-schemas/custom-blocks.md): Learn how to create custom block types for your BlockNote editor
- [Custom Inline Content](/docs/features/custom-schemas/custom-inline-content.md): Learn how to create custom inline content for your BlockNote editor
- [Custom Styles](/docs/features/custom-schemas/custom-styles.md): Learn how to create custom style schemas for your BlockNote editor
- [Custom Schemas](/docs/features/custom-schemas.md): Learn how to create custom schemas for your BlockNote editor
- [DOCX](/docs/features/export/docx.md): Export BlockNote documents to a docx word (Office Open XML) file.
- [Email Export](/docs/features/export/email.md): Export BlockNote documents to an email using React Email.
- [HTML](/docs/features/export/html.md): It's possible to export Blocks to HTML, completely client-side.
- [Markdown](/docs/features/export/markdown.md): It's possible to export Blocks to Markdown, completely client-side.
- [ODT](/docs/features/export/odt.md): Export BlockNote documents to an ODT (Open Document Text) file.
- [PDF](/docs/features/export/pdf.md): Export BlockNote documents to a PDF.
- [HTML](/docs/features/import/html.md): It's possible to export or import Blocks to and from HTML.
- [Import](/docs/features/import.md): It's possible to import content into BlockNote.
- [Markdown](/docs/features/import/markdown.md): It's possible to import Markdown content into BlockNote blocks, completely client-side.

## foundations

- [Document Structure](/docs/foundations/document-structure.md): Learn how documents (the content of the rich text editor) are structured to make the most out of BlockNote.
- [Manipulating Blocks](/docs/foundations/manipulating-content.md): Learn how to manipulate blocks in the editor.
- [Schemas](/docs/foundations/schemas.md): Learn about how content types are defined in the editor.
- [Format Interoperability](/docs/foundations/supported-formats.md): Learn about the formats BlockNote supports for importing and exporting content.

## getting-started

- [With Ariakit](/docs/getting-started/ariakit.md): Ariakit rich text editor with BlockNote
- [Editor Setup](/docs/getting-started/editor-setup.md): Learn how to set up the editor.
- [Getting Started](/docs/getting-started.md): Getting started with BlockNote is quick and easy. All you need to do is install the package and add the React component to your app!
- [With Mantine](/docs/getting-started/mantine.md): Mantine rich text editor using BlockNote
- [With Next.js](/docs/getting-started/nextjs.md): Details on integrating BlockNote with Next.js
- [With ShadCN](/docs/getting-started/shadcn.md): ShadCN rich text editor using BlockNote
- [With Vanilla JS](/docs/getting-started/vanilla-js.md): BlockNote is mainly designed as a quick and easy drop-in block-based editor for React apps, but can also be used in vanilla JavaScript apps.

## react

- [Overview](/docs/react/overview.md): Learn how to use BlockNote With React
- [Formatting Toolbar](/docs/react/components/formatting-toolbar.md): The Formatting Toolbar appears whenever you highlight text in the editor.
- [Grid Suggestion Menus](/docs/react/components/grid-suggestion-menus.md): In addition to displaying Suggestion Menus as stacks, BlockNote also supports displaying them as grids.
- [Link Toolbar](/docs/react/components/hyperlink-toolbar.md): The Link Toolbar appears whenever you hover a link in the editor.
- [File Panel](/docs/react/components/image-toolbar.md): The File Panel appears whenever you select an image that doesn't have a URL, or when you click the "Replace File" button in the Formatting Panel when an image is selected.
- [UI Components](/docs/react/components.md): BlockNote includes a number of UI Components (like menus and toolbars) that can be completely customized.
- [Block Side Menu](/docs/react/components/side-menu.md): The Block Side Menu appears on the left side whenever you hover a block.
- [Suggestion Menus](/docs/react/components/suggestion-menus.md): Suggestion Menus appear when the user enters a trigger character, and text after the character is used to filter the menu items.
- [Adding DOM Attributes](/docs/react/styling-theming/adding-dom-attributes.md): BlockNote allows you to change how the editor UI looks. You can change the theme of the default UI, or override its CSS styles.
- [Styling & Theming](/docs/react/styling-theming.md): You can completely change the look and feel of the BlockNote editor. Change basic styling quickly with theme CSS variables, or apply more complex styles with additional CSS rules.
- [Overriding CSS](/docs/react/styling-theming/overriding-css.md): You can change any styles applied to the editor by setting your own CSS styles.
- [Themes](/docs/react/styling-theming/themes.md): Themes let you quickly change the basic look of the editor UI, including colors, borders, shadows, and font.

## reference

- [Cursor & Selections](/docs/reference/editor/cursor-selections.md): Handle cursor positions and text selections in the editor
- [Events](/docs/reference/editor/events.md): BlockNote emits events when certain actions occur in the editor
- [Manipulating Content](/docs/reference/editor/manipulating-content.md): How to read, create, update, and remove blocks and inline content in the BlockNote editor
- [Overview](/docs/reference/editor/overview.md): An overview of the BlockNote editor API.
- [Paste Handling](/docs/reference/editor/paste-handling.md): This section explains how to handle paste events in BlockNote.
- [YJS Utilities](/docs/reference/editor/yjs-utilities.md): Utilities for converting between BlockNote blocks and YJS collaborative documents
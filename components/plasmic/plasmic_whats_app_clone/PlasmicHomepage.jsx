// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kzkatsDCvzPQVqDSnS1EKs
// Component: GshFf2VF0J
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Sidebar from "../../Sidebar"; // plasmic-import: WyjlcKXcQx/component
import Chat from "../../Chat"; // plasmic-import: InV2-Ayo-B/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_plasmic_whats_app_clone.module.css"; // plasmic-import: kzkatsDCvzPQVqDSnS1EKs/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: GshFf2VF0J/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"main"}
            data-plasmic-override={overrides.main}
            className={classNames(projectcss.all, sty.main)}
          >
            <Sidebar
              data-plasmic-name={"sidebar"}
              data-plasmic-override={overrides.sidebar}
              className={classNames("__wab_instance", sty.sidebar)}
            />

            <Chat
              data-plasmic-name={"chat"}
              data-plasmic-override={overrides.chat}
              className={classNames("__wab_instance", sty.chat)}
            />
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "main", "sidebar", "chat"],
  main: ["main", "sidebar", "chat"],
  sidebar: ["sidebar"],
  chat: ["chat"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    main: makeNodeComponent("main"),
    sidebar: makeNodeComponent("sidebar"),
    chat: makeNodeComponent("chat"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
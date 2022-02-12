// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kzkatsDCvzPQVqDSnS1EKs
// Component: zPGSfLbDk_
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
import sty from "./PlasmicHome.module.css"; // plasmic-import: zPGSfLbDk_/css

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

function PlasmicHome__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Plasmic WhatsApp Clone"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"Plasmic WhatsApp Clone"}
        />
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
              isEmpty={true}
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
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    main: makeNodeComponent("main"),
    sidebar: makeNodeComponent("sidebar"),
    chat: makeNodeComponent("chat"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */

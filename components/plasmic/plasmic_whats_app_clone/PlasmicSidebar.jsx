// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kzkatsDCvzPQVqDSnS1EKs
// Component: WyjlcKXcQx
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: gM35gl7eyM/component
import TextInput from "../../TextInput"; // plasmic-import: 6jNi7LUNkWm/component
import ChatList from "../../ChatList"; // plasmic-import: j3Hkwh0b7L/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_plasmic_whats_app_clone.module.css"; // plasmic-import: kzkatsDCvzPQVqDSnS1EKs/projectcss
import sty from "./PlasmicSidebar.module.css"; // plasmic-import: WyjlcKXcQx/css
import LogoutSvgrepoComsvgIcon from "./icons/PlasmicIcon__LogoutSvgrepoComsvg"; // plasmic-import: cwIzcUiPxM/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: gDSDq7tQF4t/icon

export const PlasmicSidebar__VariantProps = new Array();

export const PlasmicSidebar__ArgProps = new Array("username");

function PlasmicSidebar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        hasGap={true}
        className={classNames(projectcss.all, sty.header)}
      >
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"userProfileWrapper"}
            data-plasmic-override={overrides.userProfileWrapper}
            hasGap={true}
            className={classNames(projectcss.all, sty.userProfileWrapper)}
          >
            <Avatar
              data-plasmic-name={"userAvatar"}
              data-plasmic-override={overrides.userAvatar}
              className={classNames("__wab_instance", sty.userAvatar)}
              isEmpty={true}
              prefixText={"J"}
            />

            <div
              data-plasmic-name={"usernameWrapper"}
              data-plasmic-override={overrides.usernameWrapper}
              className={classNames(projectcss.all, sty.usernameWrapper)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "John Doe",
                value: args.username,
                className: classNames(sty.slotTargetUsername)
              })}
            </div>
          </p.Stack>
        ) : null}

        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <LogoutSvgrepoComsvgIcon
            data-plasmic-name={"logoutIcon"}
            data-plasmic-override={overrides.logoutIcon}
            className={classNames(projectcss.all, sty.logoutIcon)}
            role={"img"}
          />
        </div>
      </p.Stack>

      <div
        data-plasmic-name={"searchBar"}
        data-plasmic-override={overrides.searchBar}
        className={classNames(projectcss.all, sty.searchBar)}
      >
        <TextInput
          data-plasmic-name={"searchRoomInput"}
          data-plasmic-override={overrides.searchRoomInput}
          className={classNames("__wab_instance", sty.searchRoomInput)}
          placeholder={"Search Room by Name..."}
          showStartIcon={true}
          startIcon={
            <SearchsvgIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          }
        />
      </div>

      <div
        data-plasmic-name={"addNewChatWrapper"}
        data-plasmic-override={overrides.addNewChatWrapper}
        className={classNames(projectcss.all, sty.addNewChatWrapper)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Add New Room"}
        </div>
      </div>

      <ChatList
        data-plasmic-name={"chatList"}
        data-plasmic-override={overrides.chatList}
        className={classNames("__wab_instance", sty.chatList)}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "userProfileWrapper",
    "userAvatar",
    "usernameWrapper",
    "freeBox",
    "logoutIcon",
    "searchBar",
    "searchRoomInput",
    "svg",
    "addNewChatWrapper",
    "text",
    "chatList"
  ],

  header: [
    "header",
    "userProfileWrapper",
    "userAvatar",
    "usernameWrapper",
    "freeBox",
    "logoutIcon"
  ],

  userProfileWrapper: ["userProfileWrapper", "userAvatar", "usernameWrapper"],
  userAvatar: ["userAvatar"],
  usernameWrapper: ["usernameWrapper"],
  freeBox: ["freeBox", "logoutIcon"],
  logoutIcon: ["logoutIcon"],
  searchBar: ["searchBar", "searchRoomInput", "svg"],
  searchRoomInput: ["searchRoomInput", "svg"],
  svg: ["svg"],
  addNewChatWrapper: ["addNewChatWrapper", "text"],
  text: ["text"],
  chatList: ["chatList"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSidebar__ArgProps,
      internalVariantPropNames: PlasmicSidebar__VariantProps
    });

    return PlasmicSidebar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebar";
  } else {
    func.displayName = `PlasmicSidebar.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebar = Object.assign(
  // Top-level PlasmicSidebar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    userProfileWrapper: makeNodeComponent("userProfileWrapper"),
    userAvatar: makeNodeComponent("userAvatar"),
    usernameWrapper: makeNodeComponent("usernameWrapper"),
    freeBox: makeNodeComponent("freeBox"),
    logoutIcon: makeNodeComponent("logoutIcon"),
    searchBar: makeNodeComponent("searchBar"),
    searchRoomInput: makeNodeComponent("searchRoomInput"),
    svg: makeNodeComponent("svg"),
    addNewChatWrapper: makeNodeComponent("addNewChatWrapper"),
    text: makeNodeComponent("text"),
    chatList: makeNodeComponent("chatList"),
    // Metadata about props expected for PlasmicSidebar
    internalVariantProps: PlasmicSidebar__VariantProps,
    internalArgProps: PlasmicSidebar__ArgProps
  }
);

export default PlasmicSidebar;
/* prettier-ignore-end */

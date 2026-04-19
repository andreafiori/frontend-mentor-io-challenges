"use strict";

class ShareMenu {
  constructor({
    shareBtnSelector,
    hiddenShareBtnSelector,
    shareSectionSelector,
    shareLinkSelector,
    socialMediaSelector,
  }) {
    this.shareBtn = document.querySelector(shareBtnSelector);
    this.hiddenShareBtn = document.querySelector(hiddenShareBtnSelector);
    this.shareSection = document.querySelector(shareSectionSelector);
    this.shareLink = document.querySelector(shareLinkSelector);
    this.socialMediaSection = document.querySelector(socialMediaSelector);

    this.init();
  }

  init() {
    if (
      !this.shareBtn ||
      !this.hiddenShareBtn ||
      !this.shareSection ||
      !this.shareLink ||
      !this.socialMediaSection
    ) {
      console.warn("ShareMenu: one or more elements were not found.");
      return;
    }

    this.shareBtn.addEventListener("click", () => this.toggle());
    this.hiddenShareBtn.addEventListener("click", () => this.toggle());
    document.addEventListener("click", (e) => this.handleOutsideClick(e));
  }

  toggle() {
    this.shareSection.classList.toggle("shown");
  }

  hide() {
    this.shareSection.classList.remove("shown");
  }

  handleOutsideClick(event) {
    const clickedInside =
      this.shareBtn.contains(event.target) ||
      this.hiddenShareBtn.contains(event.target) ||
      this.shareLink.contains(event.target) ||
      this.socialMediaSection.contains(event.target);

    if (!clickedInside) {
      this.hide();
    }
  }
}

new ShareMenu({
  shareBtnSelector: ".share-btn",
  hiddenShareBtnSelector: ".hidden-share-btn",
  shareSectionSelector: ".share-section",
  shareLinkSelector: ".share-link",
  socialMediaSelector: ".social-icons",
});
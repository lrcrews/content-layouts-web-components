import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cl-two',
  styleUrl: 'cl-two.css',
  shadow: true,
})
/**
 * A flex container with a suplemental panel for smaller content, such
 * as ingredients|T.O.C.|about-X-blurb|etc., and a primary panel for the
 * main content.
 *
 * The secondary panel also has two image panels, one above the content,
 * and one below. Either could be omitted but the spacer would still be
 * present.
 *
 *
 * SLOTS
 *
 * `primary-content-panel`
 *    The main content of the page.
 *
 * `supplemental-content-panel`
 *    Additional content to support the main content.
 *
 * `image-panel`
 *    To show an image above the `supplemental-content-panel`, though
 *    the actual content could be anything you "slot" in.
 *
 * `additional-image-panel`
 *    To show an image below the `supplemental-content-panel`, though
 *    the actual content could be anything you "slot" in.
 */
export class ClTwo {
  /**
   * Optional value to override `'background-color': 'rgb(250, 235, 215)'`
   * on the content in `slot` "primary-content-panel"
   */
  @Prop() primaryBackgroundColor = 'rgb(250, 235, 215)';
  /**
   * Optional value to override `'background-color': 'rgb(222, 184, 135)'`
   * on the content in `slot` "supplemental-content-panel"
   */
  @Prop() supplementalBackgroundColor = 'rgb(222, 184, 135)';

  render() {
    return (
      <Host>
        <div class="secondary-pane">
          <div>
            <slot name="image-panel"></slot>
          </div>
          <div class="slot-divider" />
          <div style={{ 'background-color': this.supplementalBackgroundColor }}>
            <slot name="supplemental-content-panel"></slot>
          </div>
          <div class="slot-divider" />
          <div>
            <slot name="additional-image-panel"></slot>
          </div>
        </div>
        <div class="pane-divider"></div>
        <div class="primary-pane" style={{ 'background-color': this.primaryBackgroundColor }}>
          <slot name="primary-content-panel"></slot>
        </div>
      </Host>
    );
  }
}

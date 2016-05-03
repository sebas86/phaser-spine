module Fabrique {
    /**
     * Supporting class to load images from spine atlases as per spine spec.
     *
     * @class SpineTextureLoader
     * @uses EventTarget
     * @constructor
     * @param basePath {String} Tha base path where to look for the images to be loaded
     * @param crossorigin {Boolean} Whether requests should be treated as crossorigin
     */
    export class SpineTextureLoader {
        private game: Phaser.Game;
        private key: string;

        constructor(game: Phaser.Game, key: string) {
            this.game = game
            this.key = key;
        }

        /**
         * Starts loading a base texture as per spine specification
         *
         * @method load
         * @param page {spine.AtlasPage} Atlas page to which texture belongs
         * @param file {String} The file to load, this is just the file path relative to the base path configured in the constructor
         */
        public load = function (page:any, file:string) {
            var image = this.game.make.image(0, 0, this.key);

            page.rendererObject = image.texture.baseTexture;
        };

        /**
         * Unloads a previously loaded texture as per spine specification
         *
         * @method unload
         * @param texture {BaseTexture} Texture object to destroy
         */
        public unload = function (texture:PIXI.BaseTexture) {
            texture.destroy();
        };
    }
}

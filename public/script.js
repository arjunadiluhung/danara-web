(function () {
    var script = {
        start: "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
        horizontalAlign: "left",
        scrollBarOpacity: 0.5,
        id: "rootPlayer",
        children: [
            "this.MainViewer",
            "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
            "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
            "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
            "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
            "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
            "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
            "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
            "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
            "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
            "this.veilPopupPanorama",
            "this.zoomImagePopupPanorama",
            "this.closeButtonPopupPanorama",
        ],
        scrollBarVisible: "rollOver",
        overflow: "visible",
        width: "100%",
        scrollBarMargin: 2,
        borderRadius: 0,
        buttonToggleMute:
            "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
        paddingLeft: 0,
        paddingRight: 0,
        propagateClick: true,
        minHeight: 20,
        scrollBarWidth: 10,
        class: "Player",
        mobileMipmappingEnabled: false,
        vrPolyfillScale: 0.5,
        verticalAlign: "top",
        minWidth: 20,
        layout: "absolute",
        definitions: [
            {
                items: [
                    {
                        begin: "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
                        media: "this.video_A062980A_ADFF_E163_41D1_8686ED12D44C",
                        start: "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_468EDF84_5450_EE5D_41C4_B4D5ADC6FF78, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_468EDF84_5450_EE5D_41C4_B4D5ADC6FF78, 0)",
                        class: "VideoPlayListItem",
                        player: "this.MainViewerVideoPlayer",
                    },
                ],
                id: "playList_468EDF84_5450_EE5D_41C4_B4D5ADC6FF78",
                class: "PlayList",
            },
            {
                items: [
                    {
                        begin: "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
                        media: "this.panorama_412DE27B_4D70_1EE3_41C6_26A42E423369",
                        class: "PanoramaPlayListItem",
                        player: "this.MainViewerPanoramaPlayer",
                        camera: "this.panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_camera",
                    },
                    {
                        begin: "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
                        media: "this.panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1",
                        class: "PanoramaPlayListItem",
                        player: "this.MainViewerPanoramaPlayer",
                        camera: "this.panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_camera",
                    },
                    {
                        begin: "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
                        media: "this.panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C",
                        class: "PanoramaPlayListItem",
                        player: "this.MainViewerPanoramaPlayer",
                        camera: "this.panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_camera",
                    },
                    {
                        begin: "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 0)",
                        media: "this.panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE",
                        class: "PanoramaPlayListItem",
                        player: "this.MainViewerPanoramaPlayer",
                        camera: "this.panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_camera",
                    },
                ],
                id: "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
                class: "PlayList",
            },
            {
                items: [
                    {
                        begin: "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
                        media: "this.panorama_412DE27B_4D70_1EE3_41C6_26A42E423369",
                        class: "PanoramaPlayListItem",
                        player: "this.MainViewerPanoramaPlayer",
                        camera: "this.panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_camera",
                    },
                    {
                        begin: "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
                        media: "this.panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1",
                        class: "PanoramaPlayListItem",
                        player: "this.MainViewerPanoramaPlayer",
                        camera: "this.panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_camera",
                    },
                    {
                        begin: "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
                        media: "this.panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C",
                        class: "PanoramaPlayListItem",
                        player: "this.MainViewerPanoramaPlayer",
                        camera: "this.panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_camera",
                    },
                    {
                        begin: "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
                        media: "this.panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE",
                        end: "this.trigger('tourEnded')",
                        class: "PanoramaPlayListItem",
                        player: "this.MainViewerPanoramaPlayer",
                        camera: "this.panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_camera",
                    },
                ],
                id: "mainPlayList",
                class: "PlayList",
            },
            {
                frames: [
                    {
                        front: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/f/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/f/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/f/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/f/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        class: "CubicPanoramaFrame",
                        top: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/u/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/u/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/u/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/u/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        right: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/r/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/r/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/r/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/r/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        back: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/b/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/b/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/b/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/b/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        thumbnailUrl:
                            "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_t.jpg",
                        bottom: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/d/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/d/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/d/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/d/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        left: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/l/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/l/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/l/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/l/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                    },
                ],
                label: "cob1",
                hfovMin: "120%",
                id: "panorama_412DE27B_4D70_1EE3_41C6_26A42E423369",
                overlays: ["this.overlay_4236B002_4D77_FA1D_41B8_00767376DB89"],
                partial: false,
                adjacentPanoramas: [
                    {
                        class: "AdjacentPanorama",
                        panorama:
                            "this.panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1",
                    },
                ],
                hfov: 360,
                pitch: 0,
                vfov: 180,
                thumbnailUrl:
                    "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_t.jpg",
                class: "Panorama",
                hfovMax: 130,
            },
            {
                hideDuration: 500,
                rotationX: 0,
                yaw: 79.83,
                rotationZ: 0,
                showEasing: "cubic_in",
                rotationY: 0,
                showDuration: 500,
                id: "popup_44A82BE5_5470_95DE_41CF_8AE3384D4402",
                popupDistance: 100,
                popupMaxHeight: "95%",
                popupMaxWidth: "95%",
                class: "PopupPanoramaOverlay",
                image: {
                    class: "ImageResource",
                    levels: [
                        {
                            url: xBanner2,
                            width: 750,
                            class: "ImageResourceLevel",
                            height: 500,
                        },
                        {
                            url: xBanner2,
                            width: 512,
                            class: "ImageResourceLevel",
                            height: 341,
                        },
                    ],
                },
                pitch: -3.63,
                hideEasing: "cubic_out",
                hfov: 3.44,
            },
            {
                frames: [
                    {
                        front: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/f/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/f/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/f/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/f/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        class: "CubicPanoramaFrame",
                        top: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/u/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/u/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/u/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/u/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        right: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/r/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/r/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/r/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/r/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        back: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/b/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/b/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/b/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/b/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        thumbnailUrl:
                            "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_t.jpg",
                        bottom: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/d/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/d/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/d/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/d/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        left: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/l/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/l/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/l/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0/l/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                    },
                ],
                label: "cob4",
                hfovMin: "120%",
                id: "panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE",
                overlays: [
                    "this.overlay_451355E5_5451_9DDE_41B6_17F5918F03E3",
                    "this.popup_44C01C57_5450_92FA_41AA_D94B3043EB4F",
                    "this.overlay_453D80D9_5451_93F6_41C5_42C96F120D15",
                ],
                partial: false,
                adjacentPanoramas: [
                    {
                        yaw: -76.56,
                        class: "AdjacentPanorama",
                        backwardYaw: 79.6,
                        panorama:
                            "this.panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C",
                        distance: 1,
                    },
                ],
                hfov: 360,
                pitch: 0,
                vfov: 180,
                thumbnailUrl:
                    "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_t.jpg",
                class: "Panorama",
                hfovMax: 130,
            },
            {
                buttonCardboardView:
                    "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
                class: "PanoramaPlayer",
                buttonToggleHotspots:
                    "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
                touchControlMode: "drag_rotation",
                viewerArea: "this.MainViewer",
                gyroscopeVerticalDraggingEnabled: true,
                id: "MainViewerPanoramaPlayer",
                buttonToggleGyroscope:
                    "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
                mouseControlMode: "drag_acceleration",
                displayPlaybackBar: true,
            },
            {
                frames: [
                    {
                        front: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/f/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/f/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/f/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/f/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        class: "CubicPanoramaFrame",
                        top: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/u/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/u/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/u/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/u/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        right: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/r/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/r/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/r/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/r/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        back: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/b/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/b/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/b/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/b/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        thumbnailUrl:
                            "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_t.jpg",
                        bottom: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/d/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/d/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/d/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/d/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        left: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/l/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/l/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/l/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0/l/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                    },
                ],
                label: "cob2",
                hfovMin: "120%",
                id: "panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1",
                overlays: [
                    "this.overlay_5C7B136C_4D70_7EE5_41D0_4BF71A327272",
                    "this.overlay_5A2D0AB9_5450_B7B7_419E_C7B02EB957C5",
                    "this.overlay_449745A7_5450_F25A_41D1_F6786197524E",
                    "this.overlay_5B97303D_5451_B2AE_416A_E01FD04B3F17",
                    "this.overlay_45E8C4F6_5470_93BA_41A6_22DC2A832938",
                    "this.overlay_447F9EEE_5471_6FAA_41B6_E56FDF22C571",
                    "this.overlay_45AF1592_5470_9275_41D4_B57AF541D210",
                    "this.popup_4501499D_547F_926E_41CA_9083F9BB4BA4",
                    "this.popup_44A82BE5_5470_95DE_41CF_8AE3384D4402",
                    "this.overlay_444BE084_5471_925D_41CB_52B5DEC5F1C4",
                    "this.popup_456B901B_5471_B26B_41B9_2A7CACEEA08B",
                    "this.overlay_44500DFC_5470_ADAE_41D1_B50863C571B6",
                ],
                partial: false,
                adjacentPanoramas: [
                    {
                        class: "AdjacentPanorama",
                        panorama:
                            "this.panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C",
                    },
                ],
                hfov: 360,
                pitch: 0,
                vfov: 180,
                thumbnailUrl:
                    "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_t.jpg",
                class: "Panorama",
                hfovMax: 130,
            },
            {
                hideDuration: 500,
                rotationX: 0,
                yaw: 89.16,
                rotationZ: 0,
                showEasing: "cubic_in",
                rotationY: 0,
                showDuration: 500,
                id: "popup_44C272FD_5473_97AF_41D4_C731279D4811",
                popupDistance: 100,
                popupMaxHeight: "95%",
                popupMaxWidth: "95%",
                class: "PopupPanoramaOverlay",
                image: {
                    class: "ImageResource",
                    levels: [
                        {
                            url: path,
                            width: 740,
                            class: "ImageResourceLevel",
                            height: 400,
                        },
                        {
                            url: path,
                            width: 512,
                            class: "ImageResourceLevel",
                            height: 276,
                        },
                    ],
                },
                pitch: 6.38,
                hideEasing: "cubic_out",
                hfov: 16.41,
            },
            {
                initialPosition: {
                    yaw: 0,
                    class: "PanoramaCameraPosition",
                    pitch: 0,
                },
                class: "PanoramaCamera",
                initialSequence: {
                    movements: [
                        {
                            easing: "cubic_in",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "linear",
                            yawDelta: 323,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "cubic_out",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                    ],
                    class: "PanoramaCameraSequence",
                    restartMovementOnUserInteraction: false,
                },
                automaticZoomSpeed: 10,
                id: "panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_camera",
            },
            {
                hideDuration: 500,
                rotationX: 0,
                yaw: 88.23,
                rotationZ: 0,
                showEasing: "cubic_in",
                rotationY: 0,
                showDuration: 500,
                id: "popup_44C01C57_5450_92FA_41AA_D94B3043EB4F",
                popupDistance: 100,
                popupMaxHeight: "95%",
                popupMaxWidth: "95%",
                class: "PopupPanoramaOverlay",
                image: {
                    class: "ImageResource",
                    levels: [
                        {
                            url: path,
                            width: 740,
                            class: "ImageResourceLevel",
                            height: 400,
                        },
                        {
                            url: path,
                            width: 512,
                            class: "ImageResourceLevel",
                            height: 276,
                        },
                    ],
                },
                pitch: 24.94,
                hideEasing: "cubic_out",
                hfov: 29.49,
            },
            {
                hideDuration: 500,
                rotationX: 0,
                yaw: 66.28,
                rotationZ: 0,
                showEasing: "cubic_in",
                rotationY: 0,
                showDuration: 500,
                id: "popup_44A34E61_5471_6ED7_41D3_3D2DB270433A",
                popupDistance: 100,
                popupMaxHeight: "95%",
                popupMaxWidth: "95%",
                class: "PopupPanoramaOverlay",
                image: {
                    class: "ImageResource",
                    levels: [
                        {
                            url: xBanner1,
                            width: 630,
                            class: "ImageResourceLevel",
                            height: 360,
                        },
                        {
                            url: xBanner1,
                            width: 512,
                            class: "ImageResourceLevel",
                            height: 292,
                        },
                    ],
                },
                pitch: 0.04,
                hideEasing: "cubic_out",
                hfov: 10.4,
            },
            {
                hideDuration: 500,
                rotationX: 0,
                yaw: 66.45,
                rotationZ: 0,
                showEasing: "cubic_in",
                rotationY: 0,
                showDuration: 500,
                id: "popup_453E3D1E_5470_926D_4192_19F4B9A11F2C",
                popupDistance: 100,
                popupMaxHeight: "95%",
                popupMaxWidth: "95%",
                class: "PopupPanoramaOverlay",
                image: {
                    class: "ImageResource",
                    levels: [
                        {
                            url: xBanner2,
                            width: 750,
                            class: "ImageResourceLevel",
                            height: 500,
                        },
                        {
                            url: xBanner2,
                            width: 512,
                            class: "ImageResourceLevel",
                            height: 341,
                        },
                    ],
                },
                pitch: -8.67,
                hideEasing: "cubic_out",
                hfov: 9.98,
            },
            {
                hideDuration: 500,
                rotationX: 0,
                yaw: 87.03,
                rotationZ: 0,
                showEasing: "cubic_in",
                rotationY: 0,
                showDuration: 500,
                id: "popup_456B901B_5471_B26B_41B9_2A7CACEEA08B",
                popupDistance: 100,
                popupMaxHeight: "95%",
                popupMaxWidth: "95%",
                class: "PopupPanoramaOverlay",
                image: {
                    class: "ImageResource",
                    levels: [
                        {
                            url: path,
                            width: 740,
                            class: "ImageResourceLevel",
                            height: 400,
                        },
                        {
                            url: path,
                            width: 512,
                            class: "ImageResourceLevel",
                            height: 276,
                        },
                    ],
                },
                pitch: 1.54,
                hideEasing: "cubic_out",
                hfov: 5.95,
            },
            {
                initialPosition: {
                    yaw: -100.4,
                    class: "PanoramaCameraPosition",
                    pitch: 0,
                },
                class: "PanoramaCamera",
                initialSequence: {
                    movements: [
                        {
                            easing: "cubic_in",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "linear",
                            yawDelta: 323,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "cubic_out",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                    ],
                    class: "PanoramaCameraSequence",
                    restartMovementOnUserInteraction: false,
                },
                automaticZoomSpeed: 10,
                id: "camera_476C2F93_5450_EE7A_41B8_2CA43503F5D1",
            },
            {
                initialPosition: {
                    yaw: 0,
                    class: "PanoramaCameraPosition",
                    pitch: 0,
                },
                class: "PanoramaCamera",
                initialSequence: {
                    movements: [
                        {
                            easing: "cubic_in",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "linear",
                            yawDelta: 323,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "cubic_out",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                    ],
                    class: "PanoramaCameraSequence",
                    restartMovementOnUserInteraction: false,
                },
                automaticZoomSpeed: 10,
                id: "panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_camera",
            },
            {
                hideDuration: 500,
                rotationX: 0,
                yaw: 79.8,
                rotationZ: 0,
                showEasing: "cubic_in",
                rotationY: 0,
                showDuration: 500,
                id: "popup_4501499D_547F_926E_41CA_9083F9BB4BA4",
                popupDistance: 100,
                popupMaxHeight: "95%",
                popupMaxWidth: "95%",
                class: "PopupPanoramaOverlay",
                image: {
                    class: "ImageResource",
                    levels: [
                        {
                            url: xBanner1,
                            width: 630,
                            class: "ImageResourceLevel",
                            height: 360,
                        },
                        {
                            url: xBanner1,
                            width: 512,
                            class: "ImageResourceLevel",
                            height: 292,
                        },
                    ],
                },
                pitch: -1.24,
                hideEasing: "cubic_out",
                hfov: 3.13,
            },
            {
                viewerArea: "this.MainViewer",
                id: "MainViewerVideoPlayer",
                class: "VideoPlayer",
                displayPlaybackBar: true,
            },
            {
                thumbnailUrl:
                    "media/video_A062980A_ADFF_E163_41D1_8686ED12D44C_t.jpg",
                scaleMode: "fit_inside",
                width: 1280,
                label: "FILM PENDEK INSPIRATIF 1 MENIT - BATU",
                loop: false,
                id: "video_A062980A_ADFF_E163_41D1_8686ED12D44C",
                class: "Video",
                height: 720,
                video: {
                    width: 1280,
                    mp4Url: "media/video_A062980A_ADFF_E163_41D1_8686ED12D44C.mp4",
                    class: "VideoResource",
                    height: 720,
                },
            },
            {
                initialPosition: {
                    yaw: 0,
                    class: "PanoramaCameraPosition",
                    pitch: 0,
                },
                class: "PanoramaCamera",
                initialSequence: {
                    movements: [
                        {
                            easing: "cubic_in",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "linear",
                            yawDelta: 323,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "cubic_out",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                    ],
                    class: "PanoramaCameraSequence",
                    restartMovementOnUserInteraction: false,
                },
                automaticZoomSpeed: 10,
                id: "panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_camera",
            },
            {
                initialPosition: {
                    yaw: 103.44,
                    class: "PanoramaCameraPosition",
                    pitch: 0,
                },
                class: "PanoramaCamera",
                initialSequence: {
                    movements: [
                        {
                            easing: "cubic_in",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "linear",
                            yawDelta: 323,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "cubic_out",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                    ],
                    class: "PanoramaCameraSequence",
                    restartMovementOnUserInteraction: false,
                },
                automaticZoomSpeed: 10,
                id: "camera_4757CFB3_5450_EDBB_41C2_0AE53A827A90",
            },
            {
                frames: [
                    {
                        front: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/f/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/f/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/f/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/f/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        class: "CubicPanoramaFrame",
                        top: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/u/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/u/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/u/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/u/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        right: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/r/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/r/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/r/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/r/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        back: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/b/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/b/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/b/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/b/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        thumbnailUrl:
                            "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_t.jpg",
                        bottom: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/d/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/d/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/d/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/d/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                        left: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/l/0/{row}_{column}.jpg",
                                    colCount: 6,
                                    class: "TiledImageResourceLevel",
                                    width: 3072,
                                    tags: "ondemand",
                                    rowCount: 6,
                                    height: 3072,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/l/1/{row}_{column}.jpg",
                                    colCount: 3,
                                    class: "TiledImageResourceLevel",
                                    width: 1536,
                                    tags: "ondemand",
                                    rowCount: 3,
                                    height: 1536,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/l/2/{row}_{column}.jpg",
                                    colCount: 2,
                                    class: "TiledImageResourceLevel",
                                    width: 1024,
                                    tags: "ondemand",
                                    rowCount: 2,
                                    height: 1024,
                                },
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0/l/3/{row}_{column}.jpg",
                                    colCount: 1,
                                    class: "TiledImageResourceLevel",
                                    width: 512,
                                    tags: ["ondemand", "preload"],
                                    rowCount: 1,
                                    height: 512,
                                },
                            ],
                        },
                    },
                ],
                label: "cob3",
                hfovMin: "120%",
                id: "panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C",
                overlays: [
                    "this.overlay_5D34CD0A_4D70_6A2C_41D1_7F74395A1006",
                    "this.overlay_447F9080_5451_F256_41D0_350685B67490",
                    "this.overlay_45546679_5477_7EB7_41A8_B37DB2E731F5",
                    "this.overlay_44DD5D30_5470_B2A7_41BB_ACAC1A9FDABE",
                    "this.popup_44A34E61_5471_6ED7_41D3_3D2DB270433A",
                    "this.overlay_44958B05_5471_F659_41D0_A7CDB0A8A702",
                    "this.popup_453E3D1E_5470_926D_4192_19F4B9A11F2C",
                    "this.overlay_44D57419_5473_7277_41C9_F60841CEF148",
                    "this.popup_44C272FD_5473_97AF_41D4_C731279D4811",
                    "this.overlay_4447B8AA_5470_9255_41B1_DFA7A9B11AE0",
                    "this.overlay_44FAE37C_5471_96AD_41D2_460D74928393",
                    "this.overlay_44FBE0FA_5470_93AA_41C6_33306D2FA005",
                ],
                partial: false,
                adjacentPanoramas: [
                    {
                        yaw: 79.6,
                        class: "AdjacentPanorama",
                        backwardYaw: -76.56,
                        panorama:
                            "this.panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE",
                        distance: 1,
                    },
                ],
                hfov: 360,
                pitch: 0,
                vfov: 180,
                thumbnailUrl:
                    "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_t.jpg",
                class: "Panorama",
                hfovMax: 130,
            },
            {
                initialPosition: {
                    yaw: 0,
                    class: "PanoramaCameraPosition",
                    pitch: 0,
                },
                class: "PanoramaCamera",
                initialSequence: {
                    movements: [
                        {
                            easing: "cubic_in",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "linear",
                            yawDelta: 323,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                        {
                            easing: "cubic_out",
                            yawDelta: 18.5,
                            class: "DistancePanoramaCameraMovement",
                            yawSpeed: 7.96,
                        },
                    ],
                    class: "PanoramaCameraSequence",
                    restartMovementOnUserInteraction: false,
                },
                automaticZoomSpeed: 10,
                id: "panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_camera",
            },
            {
                progressBarBorderSize: 0,
                id: "MainViewer",
                left: 0,
                width: "100%",
                playbackBarProgressBorderRadius: 0,
                toolTipShadowOpacity: 0,
                playbackBarBorderRadius: 0,
                progressBarBorderRadius: 0,
                toolTipFontStyle: "normal",
                paddingLeft: 0,
                playbackBarProgressBorderColor: "#000000",
                minHeight: 50,
                toolTipFontFamily: "Georgia",
                propagateClick: true,
                toolTipTextShadowOpacity: 0,
                playbackBarHeadBorderRadius: 0,
                class: "ViewerArea",
                playbackBarHeadShadowHorizontalLength: 0,
                playbackBarHeadBorderSize: 0,
                playbackBarProgressOpacity: 1,
                progressLeft: 0,
                playbackBarBorderSize: 0,
                transitionDuration: 500,
                minWidth: 100,
                playbackBarBackgroundOpacity: 1,
                height: "100%",
                toolTipFontColor: "#FFFFFF",
                playbackBarHeadBorderColor: "#000000",
                vrPointerSelectionColor: "#FF6600",
                borderSize: 0,
                playbackBarHeadShadowColor: "#000000",
                toolTipBackgroundColor: "#000000",
                progressRight: 0,
                firstTransitionDuration: 0,
                progressOpacity: 1,
                playbackBarHeadBackgroundColor: ["#111111", "#666666"],
                vrPointerSelectionTime: 2000,
                progressBarBackgroundColorDirection: "vertical",
                progressBottom: 0,
                progressHeight: 10,
                playbackBarHeadShadow: true,
                shadow: false,
                playbackBarHeadBackgroundColorDirection: "vertical",
                progressBackgroundOpacity: 1,
                playbackBarProgressBackgroundColor: ["#3399FF"],
                playbackBarOpacity: 1,
                toolTipPaddingRight: 10,
                playbackBarHeadShadowOpacity: 0.7,
                toolTipBorderSize: 1,
                toolTipPaddingLeft: 10,
                toolTipPaddingTop: 7,
                vrPointerColor: "#FFFFFF",
                toolTipDisplayTime: 600,
                progressBarOpacity: 1,
                playbackBarBorderColor: "#FFFFFF",
                progressBorderSize: 0,
                transitionMode: "blending",
                displayTooltipInTouchScreens: true,
                toolTipBorderRadius: 3,
                paddingRight: 0,
                progressBorderRadius: 0,
                borderRadius: 0,
                playbackBarProgressBackgroundColorRatios: [0],
                playbackBarLeft: 0,
                progressBackgroundColorRatios: [0.01],
                playbackBarHeadHeight: 15,
                top: 0,
                playbackBarHeadShadowBlurRadius: 3,
                playbackBarHeadBackgroundColorRatios: [0, 1],
                progressBarBorderColor: "#0066FF",
                toolTipBorderColor: "#767676",
                progressBarBackgroundColorRatios: [0],
                progressBackgroundColorDirection: "vertical",
                toolTipShadowSpread: 0,
                toolTipShadowBlurRadius: 3,
                playbackBarBottom: 5,
                toolTipTextShadowColor: "#000000",
                toolTipOpacity: 0.5,
                playbackBarHeadOpacity: 1,
                progressBarBackgroundColor: ["#3399FF"],
                paddingTop: 0,
                progressBorderColor: "#FFFFFF",
                toolTipPaddingBottom: 7,
                paddingBottom: 0,
                toolTipFontSize: 13,
                toolTipTextShadowBlurRadius: 3,
                progressBackgroundColor: ["#FFFFFF"],
                playbackBarHeadShadowVerticalLength: 0,
                playbackBarProgressBackgroundColorDirection: "vertical",
                toolTipShadowColor: "#333333",
                playbackBarBackgroundColor: ["#FFFFFF"],
                data: {
                    name: "Main Viewer",
                },
                playbackBarHeight: 10,
                toolTipFontWeight: "normal",
                playbackBarBackgroundColorDirection: "vertical",
                playbackBarHeadWidth: 6,
                playbackBarProgressBorderSize: 0,
                playbackBarRight: 0,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
                left: "0%",
                width: 300,
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0,
                overflow: "scroll",
                children: [
                    "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
                    "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
                ],
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 1,
                propagateClick: false,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                height: "100%",
                minWidth: 1,
                layout: "absolute",
                scrollBarWidth: 10,
                paddingTop: 0,
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "--- LEFT PANEL",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
                backgroundOpacity: 0,
                width: 115.05,
                scrollBarVisible: "rollOver",
                right: "0%",
                children: [
                    "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
                    "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
                ],
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                overflow: "scroll",
                minHeight: 1,
                propagateClick: true,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                scrollBarWidth: 10,
                height: 641,
                minWidth: 1,
                layout: "absolute",
                paddingTop: 0,
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "-- SETTINGS",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
                left: 14,
                width: 372,
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0,
                overflow: "visible",
                children: [
                    "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
                    "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
                ],
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 1,
                propagateClick: true,
                class: "Container",
                top: 5,
                verticalAlign: "top",
                creationPolicy: "inAdvance",
                scrollBarWidth: 10,
                height: 131,
                minWidth: 1,
                layout: "absolute",
                paddingTop: 0,
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "--STICKER",
                },
                shadow: false,
                visible: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_062AB830_1140_E215_41AF_6C9D65345420",
                left: "0%",
                children: [
                    "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
                    "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
                ],
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0.6,
                right: "0%",
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "scroll",
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                creationPolicy: "inAdvance",
                bottom: "0%",
                backgroundColor: ["#000000", "#000000"],
                minWidth: 1,
                layout: "absolute",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "--INFO photo",
                },
                shadow: false,
                visible: false,
                click: "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
                left: "0%",
                children: [
                    "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
                ],
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0.6,
                right: "0%",
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "scroll",
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                creationPolicy: "inAdvance",
                bottom: "0%",
                backgroundColor: ["#000000", "#000000"],
                minWidth: 1,
                layout: "absolute",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "--PANORAMA LIST",
                },
                shadow: false,
                visible: false,
                click: "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
                left: "0%",
                children: [
                    "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
                    "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
                ],
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0.6,
                right: "0%",
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "scroll",
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                creationPolicy: "inAdvance",
                bottom: "0%",
                backgroundColor: ["#000000", "#000000"],
                minWidth: 1,
                layout: "absolute",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "--LOCATION",
                },
                shadow: false,
                visible: false,
                click: "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
                left: "0%",
                children: [
                    "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
                ],
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0.6,
                right: "0%",
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "scroll",
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                creationPolicy: "inAdvance",
                bottom: "0%",
                backgroundColor: ["#000000", "#000000"],
                minWidth: 1,
                layout: "absolute",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "--FLOORPLAN",
                },
                shadow: false,
                visible: false,
                click: "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
                left: "0%",
                children: [
                    "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
                ],
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0.6,
                right: "0%",
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "scroll",
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                creationPolicy: "inAdvance",
                bottom: "0%",
                backgroundColor: ["#000000", "#000000"],
                minWidth: 1,
                layout: "absolute",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "--PHOTOALBUM",
                },
                shadow: false,
                visible: false,
                click: "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
                left: "0%",
                children: [
                    "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
                    "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
                ],
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0.6,
                right: "0%",
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "scroll",
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                creationPolicy: "inAdvance",
                bottom: "0%",
                backgroundColor: ["#000000", "#000000"],
                minWidth: 1,
                layout: "absolute",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#04A3E1",
                data: {
                    name: "--REALTOR",
                },
                shadow: false,
                visible: false,
                click: "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
            },
            {
                id: "veilPopupPanorama",
                left: 0,
                backgroundOpacity: 0.55,
                right: 0,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                backgroundColorRatios: [0],
                propagateClick: false,
                minHeight: 0,
                class: "UIComponent",
                top: 0,
                bottom: 0,
                backgroundColor: ["#000000"],
                minWidth: 0,
                showEffect: {
                    duration: 350,
                    class: "FadeInEffect",
                    easing: "cubic_in_out",
                },
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                data: {
                    name: "UIComponent17886",
                },
                shadow: false,
                visible: false,
            },
            {
                id: "zoomImagePopupPanorama",
                left: 0,
                backgroundOpacity: 1,
                right: 0,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                backgroundColorRatios: [],
                propagateClick: false,
                minHeight: 0,
                class: "ZoomImage",
                top: 0,
                bottom: 0,
                backgroundColor: [],
                minWidth: 0,
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                scaleMode: "custom",
                data: {
                    name: "ZoomImage17887",
                },
                shadow: false,
                visible: false,
            },
            {
                textDecoration: "none",
                fontFamily: "Arial",
                horizontalAlign: "center",
                id: "closeButtonPopupPanorama",
                backgroundOpacity: 0.3,
                shadowColor: "#000000",
                right: 10,
                iconHeight: 20,
                paddingRight: 5,
                paddingLeft: 5,
                borderRadius: 0,
                iconColor: "#000000",
                backgroundColorRatios: [0, 0.1, 1],
                propagateClick: false,
                minHeight: 0,
                class: "CloseButton",
                top: 10,
                verticalAlign: "middle",
                rollOverIconColor: "#666666",
                pressedIconColor: "#888888",
                iconBeforeLabel: true,
                backgroundColor: ["#DDDDDD", "#EEEEEE", "#FFFFFF"],
                borderColor: "#000000",
                minWidth: 0,
                mode: "push",
                showEffect: {
                    duration: 350,
                    class: "FadeInEffect",
                    easing: "cubic_in_out",
                },
                paddingTop: 5,
                backgroundColorDirection: "vertical",
                paddingBottom: 5,
                label: "",
                fontStyle: "normal",
                borderSize: 0,
                iconLineWidth: 5,
                gap: 5,
                layout: "horizontal",
                data: {
                    name: "CloseButton17888",
                },
                fontSize: "1.29vmin",
                shadow: false,
                iconWidth: 20,
                visible: false,
                shadowBlurRadius: 6,
                shadowSpread: 1,
                cursor: "hand",
                fontColor: "#FFFFFF",
                fontWeight: "normal",
            },
            {
                horizontalAlign: "center",
                maxWidth: 58,
                id: "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
                backgroundOpacity: 0,
                maxHeight: 58,
                width: 58,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: true,
                class: "IconButton",
                verticalAlign: "middle",
                height: 58,
                minWidth: 1,
                mode: "toggle",
                transparencyActive: true,
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
                paddingBottom: 0,
                borderSize: 0,
                data: {
                    name: "IconButton MUTE",
                },
                shadow: false,
                iconURL:
                    "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
                cursor: "hand",
            },
            {
                horizontalAlign: "center",
                maxWidth: 58,
                id: "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
                backgroundOpacity: 0,
                maxHeight: 58,
                width: 58,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: true,
                class: "IconButton",
                verticalAlign: "middle",
                height: 58,
                minWidth: 1,
                mode: "toggle",
                transparencyActive: true,
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
                paddingBottom: 0,
                borderSize: 0,
                data: {
                    name: "IconButton FULLSCREEN",
                },
                shadow: false,
                iconURL:
                    "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
                cursor: "hand",
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 10.15,
                        yaw: 91.41,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0_HS_0_0_0_map.gif",
                                    width: 26,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -22.45,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.mainPlayList.set('selectedIndex', 1)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        distance: 100,
                        image: "this.AnimatedImageResource_5DBEE5D7_4D70_3A23_41C5_848FABD36483",
                        pitch: -22.45,
                        hfov: 10.15,
                        yaw: 91.41,
                        class: "HotspotPanoramaOverlayImage",
                    },
                ],
                id: "overlay_4236B002_4D77_FA1D_41B8_00767376DB89",
                data: {
                    label: "Arrow 02c",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 29.49,
                        yaw: 88.23,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0_HS_0_0_0_map.gif",
                                    width: 29,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: 24.94,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.showPopupPanoramaOverlay(this.popup_44C01C57_5450_92FA_41AA_D94B3043EB4F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 29.49,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: path,
                                    width: 740,
                                    class: "ImageResourceLevel",
                                    height: 400,
                                },
                            ],
                        },
                        pitch: 24.94,
                        yaw: 88.23,
                        distance: 50,
                    },
                ],
                id: "overlay_451355E5_5451_9DDE_41B6_17F5918F03E3",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 9.33,
                        yaw: -76.56,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0_HS_1_0_0_map.gif",
                                    width: 29,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -33.41,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.startPanoramaWithCamera(this.panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C, this.camera_476C2F93_5450_EE7A_41B8_2CA43503F5D1); this.mainPlayList.set('selectedIndex', 2)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        distance: 100,
                        image: "this.AnimatedImageResource_46C05F16_5450_AE7A_41C1_9B5984E9B5AE",
                        pitch: -33.41,
                        hfov: 9.33,
                        yaw: -76.56,
                        class: "HotspotPanoramaOverlayImage",
                    },
                ],
                id: "overlay_453D80D9_5451_93F6_41C5_42C96F120D15",
                data: {
                    label: "Arrow 01b",
                },
            },
            {
                horizontalAlign: "center",
                maxWidth: 58,
                id: "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
                backgroundOpacity: 0,
                maxHeight: 58,
                width: 58,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                rollOverIconURL:
                    "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
                propagateClick: true,
                class: "IconButton",
                verticalAlign: "middle",
                height: 58,
                minWidth: 1,
                mode: "push",
                transparencyActive: true,
                paddingTop: 0,
                paddingBottom: 0,
                borderSize: 0,
                data: {
                    name: "IconButton VR",
                },
                shadow: false,
                visible: false,
                iconURL:
                    "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
                cursor: "hand",
            },
            {
                horizontalAlign: "center",
                maxWidth: 58,
                id: "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
                backgroundOpacity: 0,
                maxHeight: 58,
                width: 58,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: true,
                class: "IconButton",
                verticalAlign: "middle",
                height: 58,
                minWidth: 1,
                mode: "toggle",
                transparencyActive: true,
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
                paddingBottom: 0,
                borderSize: 0,
                data: {
                    name: "IconButton HS ",
                },
                shadow: false,
                iconURL:
                    "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
                cursor: "hand",
            },
            {
                horizontalAlign: "center",
                maxWidth: 58,
                id: "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
                backgroundOpacity: 0,
                maxHeight: 58,
                width: 58,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: true,
                class: "IconButton",
                verticalAlign: "middle",
                height: 58,
                minWidth: 1,
                mode: "toggle",
                transparencyActive: true,
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
                paddingBottom: 0,
                borderSize: 0,
                data: {
                    name: "IconButton GYRO",
                },
                shadow: false,
                iconURL:
                    "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
                cursor: "hand",
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 10.37,
                        yaw: 89.4,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_0_0_0_map.gif",
                                    width: 26,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -19.31,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.mainPlayList.set('selectedIndex', 2)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        distance: 100,
                        image: "this.AnimatedImageResource_5DBD25D7_4D70_3A23_41CC_9F384F05220F",
                        pitch: -19.31,
                        hfov: 10.37,
                        yaw: 89.4,
                        class: "HotspotPanoramaOverlayImage",
                    },
                ],
                id: "overlay_5C7B136C_4D70_7EE5_41D0_4BF71A327272",
                data: {
                    label: "Arrow 02a",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 32.32,
                        yaw: 90.83,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_1_0_0_map.gif",
                                    width: 74,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: 11.06,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 32.32,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: logoPath,
                                    width: 124.8333333333333,
                                    class: "ImageResourceLevel",
                                    height: 26.66666666666667,
                                },
                            ],
                        },
                        pitch: 11.06,
                        yaw: 90.83,
                        distance: 50,
                    },
                ],
                id: "overlay_5A2D0AB9_5450_B7B7_419E_C7B02EB957C5",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 1.62,
                        yaw: 98.39,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_2_0_0_map.gif",
                                    width: 19,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -2.05,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.openLink('files/file_4580FE9A_5473_EE75_41CB_1BAC3B533283.pdf', '_blank')",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 1.62,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_2_0.png",
                                    width: 36,
                                    class: "ImageResourceLevel",
                                    height: 29,
                                },
                            ],
                        },
                        pitch: -2.05,
                        yaw: 98.39,
                        distance: 50,
                    },
                ],
                id: "overlay_449745A7_5450_F25A_41D1_F6786197524E",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 1.04,
                        yaw: 99.84,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_3_0_0_map.gif",
                                    width: 18,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -2.04,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.openLink('http://wa.me/82115048065', '_blank')",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 1.04,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_3_0.png",
                                    width: 23,
                                    class: "ImageResourceLevel",
                                    height: 20,
                                },
                            ],
                        },
                        pitch: -2.04,
                        yaw: 99.84,
                        distance: 50,
                    },
                ],
                id: "overlay_5B97303D_5451_B2AE_416A_E01FD04B3F17",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 1.56,
                        yaw: 101.4,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_4_0_0_map.gif",
                                    width: 16,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -2.04,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.openLink('https://www.inkindo.org/profil/organisasi/inkindo-provinsi/jawa-timur', '_blank')",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 1.56,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_4_0.png",
                                    width: 35,
                                    class: "ImageResourceLevel",
                                    height: 33,
                                },
                            ],
                        },
                        pitch: -2.04,
                        yaw: 101.4,
                        distance: 50,
                    },
                ],
                id: "overlay_45E8C4F6_5470_93BA_41A6_22DC2A832938",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 3.13,
                        yaw: 79.8,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_5_0_0_map.gif",
                                    width: 16,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -1.24,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.showPopupPanoramaOverlay(this.popup_4501499D_547F_926E_41CA_9083F9BB4BA4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 3.13,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: xBanner1,
                                    width: 71,
                                    class: "ImageResourceLevel",
                                    height: 68,
                                },
                            ],
                        },
                        pitch: -1.24,
                        yaw: 79.8,
                        distance: 50,
                    },
                ],
                id: "overlay_447F9EEE_5471_6FAA_41B6_E56FDF22C571",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 3.44,
                        yaw: 79.83,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_6_0_0_map.gif",
                                    width: 27,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -3.63,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.showPopupPanoramaOverlay(this.popup_44A82BE5_5470_95DE_41CF_8AE3384D4402, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 3.44,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: xBanner2,
                                    width: 78,
                                    class: "ImageResourceLevel",
                                    height: 46,
                                },
                            ],
                        },
                        pitch: -3.63,
                        yaw: 79.83,
                        distance: 50,
                    },
                ],
                id: "overlay_45AF1592_5470_9275_41D4_B57AF541D210",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 5.95,
                        yaw: 87.03,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_7_0_0_map.gif",
                                    width: 19,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: 1.54,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.showPopupPanoramaOverlay(this.popup_456B901B_5471_B26B_41B9_2A7CACEEA08B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 5.95,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: path,
                                    width: 135,
                                    class: "ImageResourceLevel",
                                    height: 110,
                                },
                            ],
                        },
                        pitch: 1.54,
                        yaw: 87.03,
                        distance: 50,
                    },
                ],
                id: "overlay_444BE084_5471_925D_41CB_52B5DEC5F1C4",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 0.89,
                        yaw: 98.24,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_8_0_0_map.gif",
                                    width: 20,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -7.38,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 0.89,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: statusPath,
                                    width: 20,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -7.38,
                        yaw: 98.24,
                        distance: 50,
                    },
                ],
                id: "overlay_44500DFC_5470_ADAE_41D1_B50863C571B6",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 8.56,
                        yaw: 79.6,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_0_0_0_map.gif",
                                    width: 26,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -38.78,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.startPanoramaWithCamera(this.panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE, this.camera_4757CFB3_5450_EDBB_41C2_0AE53A827A90); this.mainPlayList.set('selectedIndex', 3)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        distance: 100,
                        image: "this.AnimatedImageResource_5A888DE1_5451_6DD6_41B7_DA694433CAC5",
                        pitch: -38.78,
                        hfov: 8.56,
                        yaw: 79.6,
                        class: "HotspotPanoramaOverlayImage",
                    },
                ],
                id: "overlay_5D34CD0A_4D70_6A2C_41D1_7F74395A1006",
                data: {
                    label: "Arrow 02a",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 26.38,
                        yaw: 97.75,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_1_0_0_map.gif",
                                    width: 19,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: 36.73,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 26.38,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: logoPath,
                                    width: 749,
                                    class: "ImageResourceLevel",
                                    height: 630,
                                },
                            ],
                        },
                        pitch: 36.73,
                        yaw: 97.75,
                        distance: 50,
                    },
                ],
                id: "overlay_447F9080_5451_F256_41D0_350685B67490",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 2.95,
                        yaw: 126,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_2_0_0_map.gif",
                                    width: 17,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -17.57,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 2.95,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: statusPath,
                                    width: 70,
                                    class: "ImageResourceLevel",
                                    height: 63,
                                },
                            ],
                        },
                        pitch: -17.57,
                        yaw: 126,
                        distance: 50,
                    },
                ],
                id: "overlay_45546679_5477_7EB7_41A8_B37DB2E731F5",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 10.4,
                        yaw: 66.28,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_3_0_0_map.gif",
                                    width: 16,
                                    class: "ImageResourceLevel",
                                    height: 18,
                                },
                            ],
                        },
                        pitch: 0.04,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.showPopupPanoramaOverlay(this.popup_44A34E61_5471_6ED7_41D3_3D2DB270433A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 10.4,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: xBanner1,
                                    width: 236,
                                    class: "ImageResourceLevel",
                                    height: 268,
                                },
                            ],
                        },
                        pitch: 0.04,
                        yaw: 66.28,
                        distance: 50,
                    },
                ],
                id: "overlay_44DD5D30_5470_B2A7_41BB_ACAC1A9FDABE",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 9.98,
                        yaw: 66.45,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_4_0_0_map.gif",
                                    width: 20,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -8.67,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.showPopupPanoramaOverlay(this.popup_453E3D1E_5470_926D_4192_19F4B9A11F2C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 9.98,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: xBanner2,
                                    width: 229,
                                    class: "ImageResourceLevel",
                                    height: 182,
                                },
                            ],
                        },
                        pitch: -8.67,
                        yaw: 66.45,
                        distance: 50,
                    },
                ],
                id: "overlay_44958B05_5471_F659_41D0_A7CDB0A8A702",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 16.41,
                        yaw: 89.16,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_5_0_0_map.gif",
                                    width: 32,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: 6.38,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.showPopupPanoramaOverlay(this.popup_44C272FD_5473_97AF_41D4_C731279D4811, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 16.41,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: path,
                                    width: 375,
                                    class: "ImageResourceLevel",
                                    height: 185,
                                },
                            ],
                        },
                        pitch: 6.38,
                        yaw: 89.16,
                        distance: 50,
                    },
                ],
                id: "overlay_44D57419_5473_7277_41C9_F60841CEF148",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 3.87,
                        yaw: 125.6,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_6_0_0_map.gif",
                                    width: 16,
                                    class: "ImageResourceLevel",
                                    height: 17,
                                },
                            ],
                        },
                        pitch: -2.09,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.openLink('files/file_45F746D7_5450_9FFB_41A9_A75E679E2F1D.pdf', '_blank')",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 3.87,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_6_0.png",
                                    width: 88,
                                    class: "ImageResourceLevel",
                                    height: 94,
                                },
                            ],
                        },
                        pitch: -2.09,
                        yaw: 125.6,
                        distance: 50,
                    },
                ],
                id: "overlay_4447B8AA_5470_9255_41B1_DFA7A9B11AE0",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 2.46,
                        yaw: 129.18,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_7_0_0_map.gif",
                                    width: 16,
                                    class: "ImageResourceLevel",
                                    height: 17,
                                },
                            ],
                        },
                        pitch: -2.15,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.openLink('http://wa.me/82115048065', '_blank')",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 2.46,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_7_0.png",
                                    width: 56,
                                    class: "ImageResourceLevel",
                                    height: 60,
                                },
                            ],
                        },
                        pitch: -2.15,
                        yaw: 129.18,
                        distance: 50,
                    },
                ],
                id: "overlay_44FAE37C_5471_96AD_41D2_460D74928393",
                data: {
                    label: "Image",
                },
            },
            {
                useHandCursor: true,
                maps: [
                    {
                        hfov: 3.56,
                        yaw: 132.46,
                        class: "HotspotPanoramaOverlayMap",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_8_0_0_map.gif",
                                    width: 16,
                                    class: "ImageResourceLevel",
                                    height: 16,
                                },
                            ],
                        },
                        pitch: -1.96,
                    },
                ],
                class: "HotspotPanoramaOverlay",
                areas: [
                    {
                        click: "this.openLink('https://www.inkindo.org/profil/organisasi/inkindo-provinsi/jawa-timur', '_blank')",
                        class: "HotspotPanoramaOverlayArea",
                        mapColor: "#FF0000",
                    },
                ],
                rollOverDisplay: false,
                enabledInCardboard: true,
                items: [
                    {
                        hfov: 3.56,
                        class: "HotspotPanoramaOverlayImage",
                        image: {
                            class: "ImageResource",
                            levels: [
                                {
                                    url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_8_0.png",
                                    width: 81,
                                    class: "ImageResourceLevel",
                                    height: 84,
                                },
                            ],
                        },
                        pitch: -1.96,
                        yaw: 132.46,
                        distance: 50,
                    },
                ],
                id: "overlay_44FBE0FA_5470_93AA_41C6_33306D2FA005",
                data: {
                    label: "Image",
                },
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
                left: "0%",
                width: 66,
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0,
                overflow: "scroll",
                children: [
                    "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
                    "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
                ],
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 1,
                propagateClick: true,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                creationPolicy: "inAdvance",
                height: "100%",
                minWidth: 1,
                layout: "absolute",
                scrollBarWidth: 10,
                paddingTop: 0,
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "- COLLAPSE",
                },
                shadow: false,
                visible: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
                backgroundOpacity: 0.7,
                width: 300,
                scrollBarVisible: "rollOver",
                right: "0%",
                children: [
                    "this.Image_7592CFF8_7B41_24FB_41D6_A6C895D14FF2",
                    "this.Image_74347C70_7B41_2B0C_41D2_AFC5DCC36EBA",
                    "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
                    "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
                ],
                scrollBarMargin: 2,
                paddingRight: 40,
                paddingLeft: 40,
                borderRadius: 0,
                overflow: "scroll",
                backgroundColorRatios: [0],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                backgroundColor: ["#000000"],
                minWidth: 1,
                layout: "absolute",
                height: "100%",
                borderSize: 0,
                paddingTop: 40,
                backgroundColorDirection: "vertical",
                paddingBottom: 40,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "- EXPANDED",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                scrollBarOpacity: 0.5,
                id: "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
                backgroundOpacity: 0,
                width: 110,
                scrollBarVisible: "rollOver",
                right: "0%",
                children: [
                    "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
                ],
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                overflow: "visible",
                minHeight: 1,
                propagateClick: true,
                class: "Container",
                top: "0%",
                verticalAlign: "middle",
                scrollBarWidth: 10,
                height: 110,
                minWidth: 1,
                layout: "horizontal",
                paddingTop: 0,
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "button menu sup",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                scrollBarOpacity: 0.5,
                id: "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
                backgroundOpacity: 0,
                children: [
                    "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
                    "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
                    "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
                    "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
                    "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
                    "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
                    "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
                ],
                scrollBarVisible: "rollOver",
                right: "0%",
                width: "91.304%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                overflow: "scroll",
                minHeight: 1,
                propagateClick: true,
                class: "Container",
                bottom: "0%",
                height: "85.959%",
                verticalAlign: "top",
                minWidth: 1,
                layout: "vertical",
                scrollBarWidth: 10,
                paddingBottom: 0,
                gap: 3,
                paddingTop: 0,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "-button set",
                },
                shadow: false,
                visible: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
                left: "0%",
                width: 366,
                scrollBarVisible: "rollOver",
                shadowColor: "#000000",
                backgroundOpacity: 1,
                overflow: "scroll",
                shadowOpacity: 0.3,
                children: ["this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"],
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                class: "Container",
                top: 2,
                verticalAlign: "top",
                shadowHorizontalLength: 0,
                scrollBarWidth: 10,
                shadowVerticalLength: 0,
                height: 78,
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                shadow: true,
                data: {
                    name: "white block",
                },
                shadowBlurRadius: 8,
                shadowSpread: 1,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
                left: 0,
                width: 366,
                scrollBarVisible: "rollOver",
                shadowColor: "#000000",
                backgroundOpacity: 1,
                overflow: "scroll",
                shadowOpacity: 0.3,
                children: ["this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"],
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 1,
                backgroundColorRatios: [0.01],
                propagateClick: true,
                class: "Container",
                top: 86,
                verticalAlign: "top",
                shadowHorizontalLength: 0,
                scrollBarWidth: 10,
                shadowVerticalLength: 0,
                height: 46,
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#5CA1DE"],
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                shadow: true,
                data: {
                    name: "blue block",
                },
                shadowBlurRadius: 7,
                shadowSpread: 1,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
                left: "15%",
                children: [
                    "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
                    "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79",
                ],
                scrollBarVisible: "rollOver",
                shadowColor: "#000000",
                backgroundOpacity: 1,
                right: "15%",
                shadowOpacity: 0.3,
                shadowHorizontalLength: 0,
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "scroll",
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                class: "Container",
                top: "10%",
                verticalAlign: "top",
                bottom: "10%",
                scrollBarWidth: 10,
                shadowVerticalLength: 0,
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                minWidth: 1,
                layout: "horizontal",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                shadow: true,
                data: {
                    name: "Global",
                },
                shadowBlurRadius: 25,
                shadowSpread: 1,
            },
            {
                horizontalAlign: "right",
                scrollBarOpacity: 0.5,
                id: "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
                left: "15%",
                children: [
                    "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
                ],
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0,
                right: "15%",
                scrollBarMargin: 2,
                paddingRight: 20,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "visible",
                minHeight: 1,
                propagateClick: false,
                class: "Container",
                top: "10%",
                verticalAlign: "top",
                bottom: "80%",
                scrollBarWidth: 10,
                minWidth: 1,
                layout: "vertical",
                paddingBottom: 0,
                gap: 10,
                paddingTop: 20,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "Container X global",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                scrollBarOpacity: 0.5,
                id: "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
                left: "15%",
                children: [
                    "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
                    "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
                ],
                scrollBarVisible: "rollOver",
                shadowColor: "#000000",
                backgroundOpacity: 1,
                right: "15%",
                shadowOpacity: 0.3,
                shadowHorizontalLength: 0,
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "visible",
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                class: "Container",
                top: "10%",
                verticalAlign: "top",
                bottom: "10%",
                scrollBarWidth: 10,
                shadowVerticalLength: 0,
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                minWidth: 1,
                layout: "absolute",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                shadow: true,
                data: {
                    name: "Global",
                },
                shadowBlurRadius: 25,
                shadowSpread: 1,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
                left: "15%",
                children: [
                    "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
                ],
                scrollBarVisible: "rollOver",
                shadowColor: "#000000",
                backgroundOpacity: 1,
                right: "15%",
                shadowOpacity: 0.3,
                shadowHorizontalLength: 0,
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "scroll",
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                class: "Container",
                top: "10%",
                verticalAlign: "top",
                bottom: "10%",
                scrollBarWidth: 10,
                shadowVerticalLength: 0,
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                minWidth: 1,
                layout: "horizontal",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                shadow: true,
                data: {
                    name: "Global",
                },
                shadowBlurRadius: 25,
                shadowSpread: 1,
            },
            {
                horizontalAlign: "right",
                scrollBarOpacity: 0.5,
                id: "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
                left: "15%",
                children: [
                    "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
                ],
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0,
                right: "15%",
                scrollBarMargin: 2,
                paddingRight: 20,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "visible",
                minHeight: 1,
                propagateClick: false,
                class: "Container",
                top: "10%",
                verticalAlign: "top",
                bottom: "80%",
                scrollBarWidth: 10,
                minWidth: 1,
                layout: "vertical",
                paddingBottom: 0,
                gap: 10,
                paddingTop: 20,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "Container X global",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                scrollBarOpacity: 0.5,
                id: "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
                left: "15%",
                children: [
                    "this.MapViewer",
                    "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
                ],
                scrollBarVisible: "rollOver",
                shadowColor: "#000000",
                backgroundOpacity: 1,
                right: "15%",
                shadowOpacity: 0.3,
                shadowHorizontalLength: 0,
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "visible",
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                class: "Container",
                top: "10%",
                verticalAlign: "top",
                bottom: "10%",
                scrollBarWidth: 10,
                shadowVerticalLength: 0,
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                minWidth: 1,
                layout: "absolute",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                shadow: true,
                data: {
                    name: "Global",
                },
                shadowBlurRadius: 25,
                shadowSpread: 1,
            },
            {
                horizontalAlign: "center",
                scrollBarOpacity: 0.5,
                id: "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
                left: "15%",
                children: [
                    "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
                ],
                scrollBarVisible: "rollOver",
                shadowColor: "#000000",
                backgroundOpacity: 1,
                right: "15%",
                shadowOpacity: 0.3,
                shadowHorizontalLength: 0,
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "visible",
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                class: "Container",
                top: "10%",
                verticalAlign: "top",
                bottom: "10%",
                scrollBarWidth: 10,
                shadowVerticalLength: 0,
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                minWidth: 1,
                layout: "vertical",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                shadow: true,
                data: {
                    name: "Global",
                },
                shadowBlurRadius: 25,
                shadowSpread: 1,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
                left: "15%",
                children: [
                    "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
                    "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
                ],
                scrollBarVisible: "rollOver",
                shadowColor: "#000000",
                backgroundOpacity: 1,
                right: "15%",
                shadowOpacity: 0.3,
                shadowHorizontalLength: 0,
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "scroll",
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                class: "Container",
                top: "10%",
                verticalAlign: "top",
                bottom: "10%",
                scrollBarWidth: 10,
                shadowVerticalLength: 0,
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                minWidth: 1,
                layout: "horizontal",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                shadow: true,
                data: {
                    name: "Global",
                },
                shadowBlurRadius: 25,
                shadowSpread: 1,
            },
            {
                horizontalAlign: "right",
                scrollBarOpacity: 0.5,
                id: "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
                left: "15%",
                children: [
                    "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
                ],
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0,
                right: "15%",
                scrollBarMargin: 2,
                paddingRight: 20,
                paddingLeft: 0,
                borderRadius: 0,
                overflow: "visible",
                minHeight: 1,
                propagateClick: false,
                class: "Container",
                top: "10%",
                verticalAlign: "top",
                bottom: "80%",
                scrollBarWidth: 10,
                minWidth: 1,
                layout: "vertical",
                paddingBottom: 0,
                gap: 10,
                paddingTop: 20,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "Container X global",
                },
                shadow: false,
            },
            {
                colCount: 4,
                class: "AnimatedImageResource",
                frameDuration: 41,
                levels: [
                    {
                        url: "media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0_HS_0_0.png",
                        width: 400,
                        class: "ImageResourceLevel",
                        height: 360,
                    },
                ],
                id: "AnimatedImageResource_5DBEE5D7_4D70_3A23_41C5_848FABD36483",
                rowCount: 6,
                frameCount: 24,
            },
            {
                colCount: 3,
                class: "AnimatedImageResource",
                frameDuration: 62,
                levels: [
                    {
                        url: "media/panorama_46C9B694_4D70_2624_41BB_E46F2012CCDE_0_HS_1_0.png",
                        width: 330,
                        class: "ImageResourceLevel",
                        height: 180,
                    },
                ],
                id: "AnimatedImageResource_46C05F16_5450_AE7A_41C1_9B5984E9B5AE",
                rowCount: 3,
                frameCount: 9,
            },
            {
                colCount: 4,
                class: "AnimatedImageResource",
                frameDuration: 41,
                levels: [
                    {
                        url: "media/panorama_46DAAE5F_4D70_6623_41CC_AB768FAF34F1_0_HS_0_0.png",
                        width: 400,
                        class: "ImageResourceLevel",
                        height: 360,
                    },
                ],
                id: "AnimatedImageResource_5DBD25D7_4D70_3A23_41CC_9F384F05220F",
                rowCount: 6,
                frameCount: 24,
            },
            {
                colCount: 4,
                class: "AnimatedImageResource",
                frameDuration: 41,
                levels: [
                    {
                        url: "media/panorama_46CC7A91_4D70_6E3F_41D1_6D485096D73C_0_HS_0_0.png",
                        width: 400,
                        class: "ImageResourceLevel",
                        height: 360,
                    },
                ],
                id: "AnimatedImageResource_5A888DE1_5451_6DD6_41B7_DA694433CAC5",
                rowCount: 6,
                frameCount: 24,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
                left: "0%",
                width: 36,
                scrollBarVisible: "rollOver",
                backgroundOpacity: 0.4,
                overflow: "scroll",
                scrollBarMargin: 2,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                backgroundColorRatios: [0],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                top: "0%",
                verticalAlign: "top",
                backgroundColor: ["#000000"],
                minWidth: 1,
                layout: "absolute",
                height: "100%",
                borderSize: 0,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "Container black",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                maxWidth: 80,
                id: "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
                left: 10,
                maxHeight: 80,
                backgroundOpacity: 0,
                width: 50,
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 1,
                rollOverIconURL:
                    "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
                propagateClick: true,
                class: "IconButton",
                top: "40%",
                verticalAlign: "middle",
                bottom: "40%",
                minWidth: 1,
                mode: "push",
                transparencyActive: true,
                paddingTop: 0,
                paddingBottom: 0,
                click: "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
                borderSize: 0,
                data: {
                    name: "IconButton arrow",
                },
                shadow: false,
                iconURL:
                    "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
                cursor: "hand",
            },
            {
                horizontalAlign: "center",
                maxHeight: 600,
                maxWidth: 600,
                id: "Image_7592CFF8_7B41_24FB_41D6_A6C895D14FF2",
                left: "0%",
                backgroundOpacity: 0,
                width: "100%",
                borderRadius: 0,
                url: "skin/Image_7592CFF8_7B41_24FB_41D6_A6C895D14FF2.png",
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: false,
                class: "Image",
                top: "0.01%",
                height: "26.602%",
                verticalAlign: "middle",
                minWidth: 1,
                paddingTop: 0,
                paddingBottom: 0,
                borderSize: 0,
                scaleMode: "fit_inside",
                data: {
                    name: "Image2946",
                },
                shadow: false,
                visible: false,
            },
            {
                horizontalAlign: "center",
                maxHeight: 600,
                maxWidth: 600,
                id: "Image_74347C70_7B41_2B0C_41D2_AFC5DCC36EBA",
                left: "0%",
                backgroundOpacity: 0,
                right: "0%",
                borderRadius: 0,
                url: "skin/Image_74347C70_7B41_2B0C_41D2_AFC5DCC36EBA.jpg",
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: false,
                class: "Image",
                top: "4.84%",
                verticalAlign: "middle",
                height: "33.555%",
                minWidth: 1,
                paddingTop: 0,
                paddingBottom: 0,
                borderSize: 0,
                scaleMode: "fit_inside",
                data: {
                    name: "Image3594",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
                backgroundOpacity: 0,
                children: [
                    "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
                    "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
                    "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
                    "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
                    "this.Container_7DB32382_7065_343F_419E_6594814C420F",
                    "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
                    "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
                    "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
                    "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
                    "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
                    "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
                    "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
                    "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
                ],
                scrollBarVisible: "rollOver",
                right: "0%",
                width: "100%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                overflow: "scroll",
                minHeight: 1,
                propagateClick: true,
                class: "Container",
                top: "25%",
                bottom: "25%",
                scrollBarWidth: 10,
                verticalAlign: "middle",
                minWidth: 1,
                layout: "vertical",
                paddingTop: 0,
                paddingBottom: 0,
                gap: 0,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "-Container buttons",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
                backgroundOpacity: 0,
                children: [
                    "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
                    "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
                    "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
                ],
                scrollBarVisible: "rollOver",
                right: "0%",
                width: "100%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                overflow: "scroll",
                minHeight: 1,
                propagateClick: true,
                class: "Container",
                bottom: "0%",
                height: "26.316%",
                verticalAlign: "bottom",
                minWidth: 1,
                layout: "vertical",
                scrollBarWidth: 10,
                paddingBottom: 0,
                gap: 10,
                paddingTop: 0,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "-Container footer",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                maxWidth: 60,
                id: "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
                backgroundOpacity: 0,
                maxHeight: 60,
                width: 60,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: true,
                class: "IconButton",
                verticalAlign: "middle",
                height: 60,
                minWidth: 1,
                mode: "toggle",
                transparencyActive: true,
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
                paddingBottom: 0,
                click: "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
                borderSize: 0,
                data: {
                    name: "image button menu",
                },
                shadow: false,
                iconURL:
                    "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
                cursor: "hand",
            },
            {
                horizontalAlign: "center",
                maxWidth: 58,
                id: "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
                backgroundOpacity: 0,
                maxHeight: 58,
                width: 58,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                rollOverIconURL:
                    "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
                propagateClick: true,
                class: "IconButton",
                verticalAlign: "middle",
                height: 58,
                minWidth: 1,
                mode: "push",
                transparencyActive: true,
                paddingTop: 0,
                paddingBottom: 0,
                click: "this.shareTwitter(window.location.href)",
                borderSize: 0,
                data: {
                    name: "IconButton TWITTER",
                },
                shadow: false,
                iconURL:
                    "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
                cursor: "hand",
            },
            {
                horizontalAlign: "center",
                maxWidth: 58,
                id: "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
                backgroundOpacity: 0,
                maxHeight: 58,
                width: 58,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                rollOverIconURL:
                    "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
                propagateClick: true,
                class: "IconButton",
                verticalAlign: "middle",
                height: 58,
                minWidth: 1,
                mode: "push",
                transparencyActive: true,
                paddingTop: 0,
                paddingBottom: 0,
                click: "this.shareFacebook(window.location.href)",
                borderSize: 0,
                data: {
                    name: "IconButton FB",
                },
                shadow: false,
                iconURL:
                    "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
                cursor: "hand",
            },
            {
                fontFamily: "Oswald",
                horizontalAlign: "left",
                id: "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
                backgroundOpacity: 0,
                width: 379,
                right: -12.5,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                text: "VIRTUAL TOUR",
                minHeight: 1,
                propagateClick: true,
                class: "Label",
                top: -4,
                verticalAlign: "top",
                height: 75,
                minWidth: 1,
                fontSize: 61,
                paddingTop: 0,
                paddingBottom: 0,
                fontStyle: "italic",
                borderSize: 0,
                data: {
                    name: "text 1",
                },
                shadow: false,
                fontWeight: "bold",
                textDecoration: "none",
                fontColor: "#000000",
            },
            {
                textShadowBlurRadius: 10,
                fontFamily: "Oswald",
                horizontalAlign: "center",
                id: "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
                backgroundOpacity: 0,
                width: 385,
                textShadowColor: "#000000",
                right: "-5.05%",
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                text: "DPP INKINDO JAWA TIMUR",
                minHeight: 1,
                propagateClick: true,
                class: "Label",
                verticalAlign: "top",
                textShadowOpacity: 1,
                bottom: "0%",
                height: 44,
                minWidth: 1,
                fontSize: 28,
                textShadowVerticalLength: 0,
                paddingBottom: 0,
                fontStyle: "italic",
                paddingTop: 0,
                borderSize: 0,
                data: {
                    name: "text 2",
                },
                shadow: false,
                fontWeight: "normal",
                textDecoration: "none",
                fontColor: "#FFFFFF",
                textShadowHorizontalLength: 0,
            },
            {
                horizontalAlign: "center",
                scrollBarOpacity: 0.5,
                id: "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
                backgroundOpacity: 1,
                children: ["this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"],
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                width: "85%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0],
                propagateClick: false,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                backgroundColor: ["#000000"],
                verticalAlign: "middle",
                minWidth: 1,
                layout: "absolute",
                height: "100%",
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "-left",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.51,
                id: "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
                backgroundOpacity: 1,
                children: [
                    "this.Container_062A3830_1140_E215_4195_1698933FE51C",
                    "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
                    "this.Container_062AE830_1140_E215_4180_196ED689F4BD",
                ],
                scrollBarVisible: "rollOver",
                overflow: "visible",
                width: "50%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 50,
                paddingRight: 50,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                verticalAlign: "top",
                minWidth: 460,
                layout: "vertical",
                height: "100%",
                paddingTop: 20,
                backgroundColorDirection: "vertical",
                paddingBottom: 20,
                gap: 0,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#0069A3",
                data: {
                    name: "-right",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                maxHeight: 60,
                maxWidth: 60,
                id: "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
                backgroundOpacity: 0,
                width: "25%",
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 50,
                rollOverIconURL:
                    "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
                propagateClick: false,
                class: "IconButton",
                height: "75%",
                verticalAlign: "middle",
                minWidth: 50,
                mode: "push",
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
                paddingBottom: 0,
                click: "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
                borderSize: 0,
                iconURL:
                    "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
                transparencyActive: false,
                shadow: false,
                data: {
                    name: "X",
                },
                cursor: "hand",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
                backgroundOpacity: 0.3,
                children: [
                    "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3",
                ],
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                width: "100%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                height: 140,
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "header",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                itemLabelPosition: "bottom",
                id: "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
                left: 0,
                rollOverItemThumbnailShadowHorizontalLength: 8,
                width: "100%",
                selectedItemThumbnailShadowBlurRadius: 16,
                itemBorderRadius: 0,
                backgroundOpacity: 0,
                rollOverItemThumbnailShadowVerticalLength: 0,
                itemMinHeight: 50,
                scrollBarMargin: 2,
                rollOverItemLabelFontColor: "#04A3E1",
                itemVerticalAlign: "top",
                paddingLeft: 70,
                itemPaddingLeft: 3,
                minHeight: 1,
                propagateClick: false,
                scrollBarWidth: 10,
                class: "ThumbnailGrid",
                itemOpacity: 1,
                height: "92%",
                playList:
                    "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
                verticalAlign: "middle",
                minWidth: 1,
                itemMinWidth: 50,
                itemBackgroundColor: [],
                itemThumbnailOpacity: 1,
                selectedItemThumbnailShadowVerticalLength: 0,
                itemBackgroundColorRatios: [],
                itemPaddingTop: 3,
                borderSize: 0,
                itemPaddingRight: 3,
                scrollBarColor: "#04A3E1",
                itemHeight: 160,
                shadow: false,
                itemLabelTextDecoration: "none",
                itemBackgroundOpacity: 0,
                selectedItemLabelFontColor: "#04A3E1",
                scrollBarOpacity: 0.5,
                itemLabelFontWeight: "normal",
                itemThumbnailHeight: 125,
                rollOverItemThumbnailShadow: true,
                scrollBarVisible: "rollOver",
                itemThumbnailScaleMode: "fit_outside",
                itemLabelFontSize: 16,
                rollOverItemThumbnailShadowBlurRadius: 0,
                paddingRight: 70,
                itemLabelGap: 7,
                borderRadius: 5,
                itemBackgroundColorDirection: "vertical",
                itemThumbnailShadow: false,
                bottom: -0.2,
                itemThumbnailWidth: 220,
                itemLabelFontColor: "#666666",
                selectedItemThumbnailShadow: true,
                itemHorizontalAlign: "center",
                gap: 26,
                itemMaxHeight: 1000,
                selectedItemLabelFontWeight: "bold",
                paddingBottom: 70,
                itemPaddingBottom: 3,
                itemMaxWidth: 1000,
                itemLabelHorizontalAlign: "center",
                itemLabelFontStyle: "italic",
                itemWidth: 220,
                itemMode: "normal",
                paddingTop: 10,
                selectedItemThumbnailShadowHorizontalLength: 0,
                data: {
                    name: "ThumbnailList",
                },
                itemThumbnailBorderRadius: 0,
                rollOverItemThumbnailShadowColor: "#04A3E1",
                itemLabelFontFamily: "Oswald",
            },
            {
                id: "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
                backgroundOpacity: 1,
                width: "100%",
                borderRadius: 0,
                insetBorder: false,
                paddingLeft: 0,
                paddingRight: 0,
                url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
                backgroundColorRatios: [0],
                propagateClick: false,
                minHeight: 1,
                class: "WebFrame",
                backgroundColor: ["#FFFFFF"],
                minWidth: 1,
                height: "100%",
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                borderSize: 0,
                scrollEnabled: true,
                data: {
                    name: "WebFrame48191",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                maxHeight: 60,
                maxWidth: 60,
                id: "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
                backgroundOpacity: 0,
                width: "25%",
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 50,
                rollOverIconURL:
                    "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
                propagateClick: false,
                class: "IconButton",
                height: "75%",
                verticalAlign: "middle",
                minWidth: 50,
                mode: "push",
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
                paddingBottom: 0,
                click: "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
                borderSize: 0,
                iconURL:
                    "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
                transparencyActive: false,
                shadow: false,
                data: {
                    name: "X",
                },
                cursor: "hand",
            },
            {
                progressBarBorderSize: 0,
                id: "MapViewer",
                left: 0,
                width: "100%",
                playbackBarProgressBorderRadius: 0,
                toolTipShadowOpacity: 1,
                playbackBarBorderRadius: 0,
                progressBarBorderRadius: 0,
                toolTipFontStyle: "normal",
                paddingLeft: 0,
                playbackBarProgressBorderColor: "#000000",
                minHeight: 1,
                toolTipFontFamily: "Arial",
                propagateClick: false,
                toolTipTextShadowOpacity: 0,
                playbackBarHeadBorderRadius: 0,
                class: "ViewerArea",
                playbackBarHeadShadowHorizontalLength: 0,
                playbackBarHeadBorderSize: 0,
                playbackBarProgressOpacity: 1,
                progressLeft: 0,
                playbackBarBorderSize: 0,
                transitionDuration: 500,
                toolTipShadowVerticalLength: 0,
                minWidth: 1,
                playbackBarBackgroundOpacity: 1,
                height: "99.975%",
                toolTipFontColor: "#606060",
                playbackBarHeadBorderColor: "#000000",
                vrPointerSelectionColor: "#FF6600",
                borderSize: 0,
                toolTipShadowHorizontalLength: 0,
                playbackBarHeadShadowColor: "#000000",
                toolTipBackgroundColor: "#F6F6F6",
                progressRight: 0,
                firstTransitionDuration: 0,
                progressOpacity: 1,
                playbackBarHeadBackgroundColor: ["#111111", "#666666"],
                vrPointerSelectionTime: 2000,
                progressBarBackgroundColorDirection: "vertical",
                progressBottom: 2,
                progressHeight: 10,
                playbackBarHeadShadow: true,
                shadow: false,
                playbackBarHeadBackgroundColorDirection: "vertical",
                progressBackgroundOpacity: 1,
                playbackBarProgressBackgroundColor: ["#3399FF"],
                playbackBarOpacity: 1,
                toolTipPaddingRight: 6,
                playbackBarHeadShadowOpacity: 0.7,
                toolTipBorderSize: 1,
                toolTipPaddingLeft: 6,
                toolTipPaddingTop: 4,
                vrPointerColor: "#FFFFFF",
                toolTipDisplayTime: 600,
                progressBarOpacity: 1,
                playbackBarBorderColor: "#FFFFFF",
                progressBorderSize: 0,
                transitionMode: "blending",
                displayTooltipInTouchScreens: true,
                toolTipBorderRadius: 3,
                paddingRight: 0,
                progressBorderRadius: 0,
                borderRadius: 0,
                playbackBarProgressBackgroundColorRatios: [0],
                playbackBarLeft: 0,
                progressBackgroundColorRatios: [0.01],
                playbackBarHeadHeight: 15,
                top: 0,
                playbackBarHeadShadowBlurRadius: 3,
                playbackBarHeadBackgroundColorRatios: [0, 1],
                progressBarBorderColor: "#0066FF",
                toolTipBorderColor: "#767676",
                progressBarBackgroundColorRatios: [0],
                progressBackgroundColorDirection: "vertical",
                toolTipShadowSpread: 0,
                toolTipShadowBlurRadius: 3,
                playbackBarBottom: 0,
                toolTipTextShadowColor: "#000000",
                toolTipOpacity: 1,
                playbackBarHeadOpacity: 1,
                progressBarBackgroundColor: ["#3399FF"],
                paddingTop: 0,
                progressBorderColor: "#FFFFFF",
                toolTipPaddingBottom: 4,
                paddingBottom: 0,
                toolTipFontSize: 12,
                toolTipTextShadowBlurRadius: 3,
                progressBackgroundColor: ["#FFFFFF"],
                playbackBarHeadShadowVerticalLength: 0,
                playbackBarProgressBackgroundColorDirection: "vertical",
                toolTipShadowColor: "#333333",
                playbackBarBackgroundColor: ["#FFFFFF"],
                data: {
                    name: "Floor Plan",
                },
                playbackBarHeight: 10,
                toolTipFontWeight: "normal",
                playbackBarBackgroundColorDirection: "vertical",
                playbackBarHeadWidth: 6,
                playbackBarProgressBorderSize: 0,
                playbackBarRight: 0,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
                backgroundOpacity: 0,
                children: [
                    "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
                ],
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                width: "100%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                scrollBarWidth: 10,
                propagateClick: false,
                class: "Container",
                height: 140,
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                paddingTop: 0,
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "header",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
                backgroundOpacity: 0.3,
                children: [
                    "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
                    "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
                    "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
                    "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
                ],
                scrollBarVisible: "rollOver",
                overflow: "visible",
                width: "100%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                height: "100%",
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "Container photo",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                scrollBarOpacity: 0.5,
                id: "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
                backgroundOpacity: 1,
                children: ["this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"],
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                width: "55%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0],
                propagateClick: false,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                backgroundColor: ["#000000"],
                verticalAlign: "middle",
                minWidth: 1,
                layout: "absolute",
                height: "100%",
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "-left",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.51,
                id: "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
                backgroundOpacity: 1,
                children: [
                    "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
                    "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
                    "this.Container_06C42BA5_1140_A63F_4195_037A0687532F",
                ],
                scrollBarVisible: "rollOver",
                overflow: "visible",
                width: "45%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 60,
                paddingRight: 60,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                verticalAlign: "top",
                minWidth: 460,
                layout: "vertical",
                height: "100%",
                paddingTop: 20,
                backgroundColorDirection: "vertical",
                paddingBottom: 20,
                gap: 0,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#0069A3",
                data: {
                    name: "-right",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                maxHeight: 60,
                maxWidth: 60,
                id: "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
                backgroundOpacity: 0,
                width: "25%",
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 50,
                rollOverIconURL:
                    "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
                propagateClick: false,
                class: "IconButton",
                height: "75%",
                verticalAlign: "middle",
                minWidth: 50,
                mode: "push",
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
                paddingBottom: 0,
                click: "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
                borderSize: 0,
                iconURL:
                    "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
                transparencyActive: false,
                shadow: false,
                data: {
                    name: "X",
                },
                cursor: "hand",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
                backgroundOpacity: 0.3,
                width: "100%",
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                height: 1,
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "line",
                },
                shadow: false,
            },
            {
                textDecoration: "none",
                fontFamily: "Oswald",
                horizontalAlign: "left",
                id: "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
                backgroundOpacity: 0,
                width: 220,
                shadowColor: "#000000",
                rollOverBackgroundColor: ["#5CA1DE"],
                click: "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
                iconHeight: 32,
                borderRadius: 0,
                paddingLeft: 10,
                paddingRight: 0,
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                class: "Button",
                verticalAlign: "middle",
                layout: "horizontal",
                iconBeforeLabel: true,
                height: 50,
                borderColor: "#000000",
                minWidth: 1,
                mode: "push",
                backgroundColor: ["#000000", "#000000"],
                fontSize: 18,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                label: "Tour Information",
                fontStyle: "italic",
                borderSize: 0,
                rollOverBackgroundColorRatios: [0],
                gap: 5,
                pressedBackgroundOpacity: 1,
                rollOverBackgroundOpacity: 0.8,
                data: {
                    name: "Button Tour Info",
                },
                shadow: false,
                iconWidth: 32,
                shadowBlurRadius: 6,
                shadowSpread: 1,
                cursor: "hand",
                fontColor: "#FFFFFF",
                fontWeight: "normal",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
                backgroundOpacity: 0.3,
                width: "100%",
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                height: 1,
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "line",
                },
                shadow: false,
            },
            {
                textDecoration: "none",
                fontFamily: "Oswald",
                horizontalAlign: "left",
                id: "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
                backgroundOpacity: 0,
                width: "100%",
                shadowColor: "#000000",
                rollOverBackgroundColor: ["#5CA1DE"],
                click: "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
                iconHeight: 32,
                borderRadius: 0,
                paddingLeft: 10,
                paddingRight: 0,
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                class: "Button",
                layout: "horizontal",
                iconBeforeLabel: true,
                height: 50,
                verticalAlign: "middle",
                minWidth: 1,
                mode: "push",
                backgroundColor: ["#000000", "#000000"],
                fontSize: 18,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                label: "Panorama List",
                fontStyle: "italic",
                borderSize: 0,
                rollOverBackgroundColorRatios: [0],
                gap: 23,
                pressedBackgroundOpacity: 1,
                rollOverBackgroundOpacity: 0.8,
                data: {
                    name: "Button Panorama List",
                },
                borderColor: "#000000",
                shadow: false,
                iconWidth: 32,
                shadowBlurRadius: 6,
                shadowSpread: 1,
                visible: false,
                cursor: "hand",
                fontColor: "#FFFFFF",
                fontWeight: "normal",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DB32382_7065_343F_419E_6594814C420F",
                backgroundOpacity: 0.3,
                width: "100%",
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                height: 1,
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "line",
                },
                shadow: false,
            },
            {
                textDecoration: "none",
                fontFamily: "Oswald",
                horizontalAlign: "left",
                pressedLabel: "Location",
                id: "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
                backgroundOpacity: 0,
                width: "100%",
                shadowColor: "#000000",
                rollOverBackgroundColor: ["#5CA1DE"],
                click: "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
                iconHeight: 32,
                borderRadius: 0,
                paddingLeft: 10,
                paddingRight: 0,
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                class: "Button",
                layout: "horizontal",
                iconBeforeLabel: true,
                height: 50,
                verticalAlign: "middle",
                minWidth: 1,
                mode: "push",
                backgroundColor: ["#000000", "#000000"],
                fontSize: 18,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                label: "Location",
                fontStyle: "italic",
                borderSize: 0,
                rollOverBackgroundColorRatios: [0],
                gap: 5,
                pressedBackgroundOpacity: 1,
                rollOverBackgroundOpacity: 0.8,
                data: {
                    name: "Button Location",
                },
                borderColor: "#000000",
                shadow: false,
                iconWidth: 32,
                shadowBlurRadius: 6,
                shadowSpread: 1,
                visible: false,
                cursor: "hand",
                fontColor: "#FFFFFF",
                fontWeight: "normal",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
                backgroundOpacity: 0.3,
                width: "100%",
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                height: 1,
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "line",
                },
                shadow: false,
            },
            {
                textDecoration: "none",
                fontFamily: "Oswald",
                horizontalAlign: "left",
                id: "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
                backgroundOpacity: 0,
                width: "100%",
                shadowColor: "#000000",
                rollOverBackgroundColor: ["#5CA1DE"],
                click: "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
                iconHeight: 32,
                borderRadius: 0,
                paddingLeft: 10,
                paddingRight: 0,
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                class: "Button",
                layout: "horizontal",
                iconBeforeLabel: true,
                height: 50,
                verticalAlign: "middle",
                minWidth: 1,
                mode: "push",
                backgroundColor: ["#000000", "#000000"],
                fontSize: 18,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                label: "Floorplan",
                fontStyle: "italic",
                borderSize: 0,
                rollOverBackgroundColorRatios: [0],
                gap: 5,
                pressedBackgroundOpacity: 1,
                rollOverBackgroundOpacity: 0.8,
                data: {
                    name: "Button Floorplan",
                },
                borderColor: "#000000",
                shadow: false,
                iconWidth: 32,
                shadowBlurRadius: 6,
                shadowSpread: 1,
                visible: false,
                cursor: "hand",
                fontColor: "#FFFFFF",
                fontWeight: "normal",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
                backgroundOpacity: 0.3,
                width: "100%",
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                height: 1,
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "line",
                },
                shadow: false,
            },
            {
                textDecoration: "none",
                fontFamily: "Oswald",
                horizontalAlign: "left",
                id: "Button_7DBC8382_7065_343F_4183_17B44518DB40",
                backgroundOpacity: 0,
                width: "100%",
                shadowColor: "#000000",
                rollOverBackgroundColor: ["#5CA1DE"],
                click: "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
                iconHeight: 32,
                borderRadius: 0,
                paddingLeft: 10,
                paddingRight: 0,
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                class: "Button",
                layout: "horizontal",
                iconBeforeLabel: true,
                height: 50,
                verticalAlign: "middle",
                minWidth: 1,
                mode: "push",
                backgroundColor: ["#000000", "#000000"],
                fontSize: 18,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                label: "Photoalbum",
                fontStyle: "italic",
                borderSize: 0,
                rollOverBackgroundColorRatios: [0],
                gap: 5,
                pressedBackgroundOpacity: 1,
                rollOverBackgroundOpacity: 0.8,
                data: {
                    name: "Button Photoalbum",
                },
                borderColor: "#000000",
                shadow: false,
                iconWidth: 32,
                shadowBlurRadius: 6,
                shadowSpread: 1,
                visible: false,
                cursor: "hand",
                fontColor: "#FFFFFF",
                fontWeight: "normal",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DBCB382_7065_343F_41D8_AB382D384291",
                backgroundOpacity: 0.3,
                width: "100%",
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                height: 1,
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "line",
                },
                shadow: false,
            },
            {
                textDecoration: "none",
                fontFamily: "Oswald",
                horizontalAlign: "left",
                id: "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
                backgroundOpacity: 0,
                width: "100%",
                shadowColor: "#000000",
                rollOverBackgroundColor: ["#5CA1DE"],
                click: "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
                iconHeight: 32,
                borderRadius: 0,
                paddingLeft: 10,
                paddingRight: 0,
                minHeight: 1,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                class: "Button",
                layout: "horizontal",
                iconBeforeLabel: true,
                height: 50,
                verticalAlign: "middle",
                minWidth: 1,
                mode: "push",
                backgroundColor: ["#000000", "#000000"],
                fontSize: 18,
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                label: "Contact Information",
                fontStyle: "italic",
                borderSize: 0,
                rollOverBackgroundColorRatios: [0],
                gap: 5,
                pressedBackgroundOpacity: 1,
                rollOverBackgroundOpacity: 0.8,
                data: {
                    name: "Button Contact",
                },
                borderColor: "#000000",
                shadow: false,
                iconWidth: 32,
                shadowBlurRadius: 6,
                shadowSpread: 1,
                cursor: "hand",
                fontColor: "#FFFFFF",
                fontWeight: "normal",
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
                backgroundOpacity: 0.3,
                width: "100%",
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                height: 1,
                verticalAlign: "top",
                minWidth: 1,
                layout: "absolute",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "line",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
                backgroundOpacity: 1,
                width: 40,
                scrollBarVisible: "rollOver",
                overflow: "visible",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0],
                propagateClick: true,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                verticalAlign: "top",
                height: 2,
                minWidth: 1,
                layout: "horizontal",
                backgroundColor: ["#5CA1DE"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "blue line",
                },
                shadow: false,
            },
            {
                scrollBarOpacity: 0.5,
                id: "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
                backgroundOpacity: 0,
                width: "100%",
                scrollBarVisible: "rollOver",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                scrollBarWidth: 10,
                propagateClick: true,
                class: "HTMLText",
                height: 78,
                minWidth: 1,
                paddingTop: 0,
                paddingBottom: 0,
                borderSize: 0,
                html: '<div style="text-align:left; color:#000; "><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="color:#ffffff;font-size:14px;font-family:\'Oswald Regular\';"><I>DPP INKINDO JAWA TIMUR</I></SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="color:#ffffff;font-size:14px;font-family:\'Oswald Regular\';"><I>www.inkindo.org</I></SPAN></SPAN></DIV></div>',
                scrollBarColor: "#000000",
                data: {
                    name: "HTMLText47602",
                },
                shadow: false,
            },
            {
                horizontalAlign: "center",
                maxWidth: 80,
                id: "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
                backgroundOpacity: 0,
                maxHeight: 80,
                width: 42,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                rollOverIconURL:
                    "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
                propagateClick: true,
                class: "IconButton",
                verticalAlign: "middle",
                height: 42,
                minWidth: 1,
                mode: "push",
                transparencyActive: true,
                paddingTop: 0,
                paddingBottom: 0,
                click: "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
                borderSize: 0,
                data: {
                    name: "IconButton collapse",
                },
                shadow: false,
                iconURL:
                    "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
                cursor: "hand",
            },
            {
                horizontalAlign: "center",
                maxHeight: 1000,
                maxWidth: 2000,
                id: "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
                left: "0%",
                backgroundOpacity: 0,
                width: "100%",
                borderRadius: 0,
                url: "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: false,
                class: "Image",
                top: "0%",
                height: "100%",
                verticalAlign: "middle",
                minWidth: 1,
                paddingTop: 0,
                paddingBottom: 0,
                borderSize: 0,
                scaleMode: "fit_outside",
                data: {
                    name: "Image",
                },
                shadow: false,
            },
            {
                horizontalAlign: "right",
                scrollBarOpacity: 0.5,
                id: "Container_062A3830_1140_E215_4195_1698933FE51C",
                backgroundOpacity: 0.3,
                width: "100%",
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 0,
                scrollBarWidth: 10,
                class: "Container",
                height: 50,
                verticalAlign: "top",
                minWidth: 1,
                layout: "horizontal",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 20,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 0,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "Container space",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.79,
                id: "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
                backgroundOpacity: 0.3,
                children: [
                    "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
                    "this.Button_062AF830_1140_E215_418D_D2FC11B12C47",
                ],
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                width: "100%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 300,
                scrollBarWidth: 10,
                class: "Container",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                verticalAlign: "top",
                minWidth: 100,
                layout: "vertical",
                height: "100%",
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 10,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#E73B2C",
                data: {
                    name: "Container text",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_062AE830_1140_E215_4180_196ED689F4BD",
                backgroundOpacity: 0.3,
                width: 370,
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                verticalAlign: "top",
                height: 30,
                minWidth: 1,
                layout: "horizontal",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "Container space",
                },
                shadow: false,
            },
            {
                horizontalAlign: "right",
                maxHeight: 60,
                maxWidth: 60,
                id: "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
                backgroundOpacity: 0,
                right: 20,
                width: "100%",
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 50,
                rollOverIconURL:
                    "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
                propagateClick: false,
                class: "IconButton",
                top: 20,
                height: "36.14%",
                verticalAlign: "top",
                minWidth: 50,
                mode: "push",
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
                paddingBottom: 0,
                click: "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
                borderSize: 0,
                transparencyActive: false,
                shadow: false,
                iconURL:
                    "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
                data: {
                    name: "IconButton X",
                },
                cursor: "hand",
            },
            {
                horizontalAlign: "right",
                maxHeight: 60,
                maxWidth: 60,
                id: "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
                backgroundOpacity: 0,
                right: 20,
                width: "100%",
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 50,
                rollOverIconURL:
                    "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
                propagateClick: false,
                class: "IconButton",
                top: 20,
                height: "36.14%",
                verticalAlign: "top",
                minWidth: 50,
                mode: "push",
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
                paddingBottom: 0,
                click: "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
                borderSize: 0,
                transparencyActive: false,
                shadow: false,
                iconURL:
                    "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
                data: {
                    name: "IconButton X",
                },
                cursor: "hand",
            },
            {
                progressBarBorderSize: 0,
                id: "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
                left: "0%",
                width: "100%",
                playbackBarProgressBorderRadius: 0,
                toolTipShadowOpacity: 1,
                playbackBarBorderRadius: 0,
                progressBarBorderRadius: 0,
                toolTipFontStyle: "normal",
                paddingLeft: 0,
                playbackBarProgressBorderColor: "#000000",
                minHeight: 1,
                toolTipFontFamily: "Arial",
                propagateClick: false,
                toolTipTextShadowOpacity: 0,
                playbackBarHeadBorderRadius: 0,
                class: "ViewerArea",
                playbackBarHeadShadowHorizontalLength: 0,
                playbackBarHeadBorderSize: 0,
                playbackBarProgressOpacity: 1,
                progressLeft: 0,
                playbackBarBorderSize: 0,
                transitionDuration: 500,
                toolTipShadowVerticalLength: 0,
                minWidth: 1,
                playbackBarBackgroundOpacity: 1,
                height: "100%",
                toolTipFontColor: "#606060",
                playbackBarHeadBorderColor: "#000000",
                vrPointerSelectionColor: "#FF6600",
                borderSize: 0,
                toolTipShadowHorizontalLength: 0,
                playbackBarHeadShadowColor: "#000000",
                toolTipBackgroundColor: "#F6F6F6",
                progressRight: 0,
                firstTransitionDuration: 0,
                progressOpacity: 1,
                playbackBarHeadBackgroundColor: ["#111111", "#666666"],
                vrPointerSelectionTime: 2000,
                progressBarBackgroundColorDirection: "vertical",
                progressBottom: 2,
                progressHeight: 10,
                playbackBarHeadShadow: true,
                shadow: false,
                playbackBarHeadBackgroundColorDirection: "vertical",
                progressBackgroundOpacity: 1,
                playbackBarProgressBackgroundColor: ["#3399FF"],
                playbackBarOpacity: 1,
                toolTipPaddingRight: 6,
                playbackBarHeadShadowOpacity: 0.7,
                toolTipBorderSize: 1,
                toolTipPaddingLeft: 6,
                toolTipPaddingTop: 4,
                vrPointerColor: "#FFFFFF",
                toolTipDisplayTime: 600,
                progressBarOpacity: 1,
                playbackBarBorderColor: "#FFFFFF",
                progressBorderSize: 0,
                transitionMode: "blending",
                displayTooltipInTouchScreens: true,
                toolTipBorderRadius: 3,
                paddingRight: 0,
                progressBorderRadius: 0,
                borderRadius: 0,
                playbackBarProgressBackgroundColorRatios: [0],
                playbackBarLeft: 0,
                progressBackgroundColorRatios: [0.01],
                playbackBarHeadHeight: 15,
                top: "0%",
                playbackBarHeadShadowBlurRadius: 3,
                playbackBarHeadBackgroundColorRatios: [0, 1],
                progressBarBorderColor: "#0066FF",
                toolTipBorderColor: "#767676",
                progressBarBackgroundColorRatios: [0],
                progressBackgroundColorDirection: "vertical",
                toolTipShadowSpread: 0,
                toolTipShadowBlurRadius: 3,
                playbackBarBottom: 0,
                toolTipTextShadowColor: "#000000",
                toolTipOpacity: 1,
                playbackBarHeadOpacity: 1,
                progressBarBackgroundColor: ["#3399FF"],
                paddingTop: 0,
                progressBorderColor: "#FFFFFF",
                toolTipPaddingBottom: 4,
                paddingBottom: 0,
                toolTipFontSize: 12,
                toolTipTextShadowBlurRadius: 3,
                progressBackgroundColor: ["#FFFFFF"],
                playbackBarHeadShadowVerticalLength: 0,
                playbackBarProgressBackgroundColorDirection: "vertical",
                toolTipShadowColor: "#333333",
                playbackBarBackgroundColor: ["#FFFFFF"],
                data: {
                    name: "Viewer photoalbum 1",
                },
                playbackBarHeight: 10,
                toolTipFontWeight: "normal",
                playbackBarBackgroundColorDirection: "vertical",
                playbackBarHeadWidth: 6,
                playbackBarProgressBorderSize: 0,
                playbackBarRight: 0,
            },
            {
                horizontalAlign: "center",
                maxHeight: 60,
                maxWidth: 60,
                id: "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
                left: 10,
                backgroundOpacity: 0,
                width: "14.22%",
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 50,
                rollOverIconURL:
                    "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
                propagateClick: true,
                class: "IconButton",
                top: "20%",
                bottom: "20%",
                verticalAlign: "middle",
                minWidth: 50,
                mode: "push",
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
                paddingBottom: 0,
                borderSize: 0,
                transparencyActive: false,
                shadow: false,
                iconURL:
                    "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
                data: {
                    name: "IconButton <",
                },
                cursor: "hand",
            },
            {
                horizontalAlign: "center",
                maxHeight: 60,
                maxWidth: 60,
                id: "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
                backgroundOpacity: 0,
                right: 10,
                width: "14.22%",
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 50,
                rollOverIconURL:
                    "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
                propagateClick: true,
                class: "IconButton",
                top: "20%",
                bottom: "20%",
                verticalAlign: "middle",
                minWidth: 50,
                mode: "push",
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
                paddingBottom: 0,
                borderSize: 0,
                transparencyActive: false,
                shadow: false,
                iconURL:
                    "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
                data: {
                    name: "IconButton >",
                },
                cursor: "hand",
            },
            {
                horizontalAlign: "right",
                maxHeight: 60,
                maxWidth: 60,
                id: "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
                backgroundOpacity: 0,
                right: 20,
                width: "10%",
                paddingRight: 0,
                paddingLeft: 0,
                borderRadius: 0,
                minHeight: 50,
                rollOverIconURL:
                    "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
                propagateClick: true,
                class: "IconButton",
                top: 20,
                height: "10%",
                verticalAlign: "top",
                minWidth: 50,
                mode: "push",
                paddingTop: 0,
                pressedIconURL:
                    "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
                paddingBottom: 0,
                click: "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
                borderSize: 0,
                transparencyActive: false,
                shadow: false,
                iconURL:
                    "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
                data: {
                    name: "IconButton X",
                },
                cursor: "hand",
            },
            {
                horizontalAlign: "center",
                maxHeight: 1000,
                maxWidth: 2000,
                id: "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
                left: "0%",
                backgroundOpacity: 0,
                width: "100%",
                borderRadius: 0,
                url: "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: false,
                class: "Image",
                top: "0%",
                height: "100%",
                verticalAlign: "bottom",
                minWidth: 1,
                paddingTop: 0,
                paddingBottom: 0,
                borderSize: 0,
                scaleMode: "fit_outside",
                data: {
                    name: "Image40635",
                },
                shadow: false,
            },
            {
                horizontalAlign: "right",
                scrollBarOpacity: 0.5,
                id: "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
                backgroundOpacity: 0.3,
                width: "100%",
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 0,
                scrollBarWidth: 10,
                class: "Container",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                verticalAlign: "top",
                minWidth: 1,
                layout: "horizontal",
                height: "5%",
                paddingTop: 20,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 0,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "Container space",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.79,
                id: "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
                backgroundOpacity: 0.3,
                children: [
                    "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
                    "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
                ],
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                width: "100%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 520,
                scrollBarWidth: 10,
                class: "Container",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                verticalAlign: "top",
                minWidth: 100,
                layout: "vertical",
                height: "100%",
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 30,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#E73B2C",
                data: {
                    name: "Container text",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_06C42BA5_1140_A63F_4195_037A0687532F",
                backgroundOpacity: 0.3,
                width: 370,
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                verticalAlign: "top",
                height: 40,
                minWidth: 1,
                layout: "horizontal",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "Container space",
                },
                shadow: false,
            },
            {
                scrollBarOpacity: 0.5,
                id: "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
                backgroundOpacity: 0,
                width: "100%",
                scrollBarVisible: "rollOver",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 10,
                paddingRight: 10,
                minHeight: 1,
                scrollBarWidth: 10,
                propagateClick: false,
                class: "HTMLText",
                height: "100%",
                minWidth: 1,
                paddingTop: 0,
                paddingBottom: 20,
                borderSize: 0,
                html: '<div style="text-align:left; color:#000; "><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="color:#04a3e1;font-size:8.38vh;font-family:\'Bebas Neue Bold\';">___</SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="font-size:4.3vh;font-family:\'Oswald\';"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="font-size:4.3vh;font-family:\'Oswald\';"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="color:#04a3e1;font-size:2.54vh;font-family:\'Oswald\';"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE="margin:0; line-height:1.1vh;"><BR STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"/></p><p STYLE="margin:0; line-height:1.1vh;"><BR STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"/></p><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE="margin:0; line-height:1.1vh;"><BR STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"/></p><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE="margin:0; line-height:2.54vh;"><BR STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"/></p><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="font-size:2.54vh;font-family:\'Oswald\';"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="font-size:0.33vh;"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>',
                scrollBarColor: "#04A3E1",
                data: {
                    name: "HTMLText",
                },
                shadow: false,
            },
            {
                textDecoration: "none",
                fontFamily: "Oswald",
                horizontalAlign: "center",
                id: "Button_062AF830_1140_E215_418D_D2FC11B12C47",
                backgroundOpacity: 0.7,
                width: 180,
                shadowColor: "#000000",
                iconHeight: 32,
                paddingRight: 0,
                pressedBackgroundColor: ["#000000"],
                paddingLeft: 0,
                borderRadius: 50,
                backgroundColorRatios: [0],
                propagateClick: false,
                minHeight: 1,
                class: "Button",
                verticalAlign: "middle",
                layout: "horizontal",
                iconBeforeLabel: true,
                height: 50,
                borderColor: "#000000",
                minWidth: 1,
                mode: "push",
                backgroundColor: ["#04A3E1"],
                fontSize: "2.39vh",
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                label: "LOREM IPSUM",
                fontStyle: "italic",
                borderSize: 0,
                gap: 5,
                pressedBackgroundOpacity: 1,
                rollOverBackgroundOpacity: 1,
                data: {
                    name: "Button31015",
                },
                shadow: false,
                iconWidth: 32,
                shadowBlurRadius: 6,
                shadowSpread: 1,
                pressedBackgroundColorRatios: [0],
                cursor: "hand",
                fontColor: "#FFFFFF",
                fontWeight: "bold",
            },
            {
                scrollBarOpacity: 0,
                id: "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
                backgroundOpacity: 0,
                width: "100%",
                scrollBarVisible: "rollOver",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                scrollBarWidth: 10,
                propagateClick: false,
                class: "HTMLText",
                height: "46%",
                minWidth: 1,
                paddingTop: 0,
                paddingBottom: 10,
                borderSize: 0,
                html: '<div style="text-align:left; color:#000; "><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="color:#04a3e1;font-size:8.38vh;font-family:\'Bebas Neue Bold\';">___</SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="font-size:4.3vh;font-family:\'Oswald\';"><B><I>DPP INKINDO </I></B></SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="font-size:4.3vh;font-family:\'Oswald\';"><B><I>JAWA TIMUR</I></B></SPAN></SPAN></DIV></div>',
                scrollBarColor: "#04A3E1",
                data: {
                    name: "HTMLText18899",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                scrollBarOpacity: 0.5,
                id: "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
                backgroundOpacity: 0.3,
                children: [
                    "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
                    "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
                ],
                scrollBarVisible: "rollOver",
                overflow: "scroll",
                width: "100%",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                backgroundColorRatios: [0, 1],
                propagateClick: false,
                minHeight: 1,
                scrollBarWidth: 10,
                class: "Container",
                backgroundColor: ["#FFFFFF", "#FFFFFF"],
                verticalAlign: "top",
                minWidth: 1,
                layout: "horizontal",
                height: "75%",
                paddingTop: 0,
                backgroundColorDirection: "vertical",
                paddingBottom: 0,
                gap: 10,
                borderSize: 0,
                contentOpaque: false,
                scrollBarColor: "#000000",
                data: {
                    name: "- content",
                },
                shadow: false,
            },
            {
                horizontalAlign: "left",
                maxHeight: 200,
                maxWidth: 200,
                id: "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
                backgroundOpacity: 0,
                width: "25%",
                borderRadius: 0,
                url: "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
                paddingLeft: 0,
                paddingRight: 0,
                minHeight: 1,
                propagateClick: false,
                class: "Image",
                height: "100%",
                verticalAlign: "top",
                minWidth: 1,
                paddingTop: 0,
                paddingBottom: 0,
                borderSize: 0,
                scaleMode: "fit_inside",
                data: {
                    name: "agent photo",
                },
                shadow: false,
            },
            {
                scrollBarOpacity: 0.5,
                id: "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
                backgroundOpacity: 0,
                width: "75%",
                scrollBarVisible: "rollOver",
                scrollBarMargin: 2,
                borderRadius: 0,
                paddingLeft: 10,
                paddingRight: 10,
                minHeight: 1,
                scrollBarWidth: 10,
                propagateClick: false,
                class: "HTMLText",
                height: "100%",
                minWidth: 1,
                paddingTop: 0,
                paddingBottom: 10,
                borderSize: 0,
                html: '<div style="text-align:left; color:#000; "><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="color:#04a3e1;font-size:2.54vh;font-family:\'Oswald\';"><B><I>INKINDO JAWA TIMUR</I></B></SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="font-size:2.43vh;font-family:\'Oswald\';"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE="margin:0; line-height:0.55vh;"><BR STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"/></p><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="color:#999999;font-size:0.55vh;font-family:\'Oswald\';"><I>Tlf.: (031) 8715438,</I></SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="color:#999999;font-size:0.55vh;font-family:\'Oswald\';"><I>inkindojawatimur@gmail.com</I></SPAN></SPAN></DIV><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;"><SPAN STYLE="color:#999999;font-size:0.55vh;font-family:\'Oswald\';"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE="margin:0; line-height:1.1vh;"><BR STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;"/></p><DIV STYLE="text-align:left;"><SPAN STYLE="letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>',
                scrollBarColor: "#04A3E1",
                data: {
                    name: "HTMLText19460",
                },
                shadow: false,
            },
        ],
        desktopMipmappingEnabled: false,
        backgroundPreloadEnabled: true,
        paddingTop: 0,
        paddingBottom: 0,
        gap: 10,
        borderSize: 0,
        height: "100%",
        contentOpaque: false,
        scripts: {
            showPopupPanoramaOverlay: function (
                popupPanoramaOverlay,
                closeButtonProperties,
                imageHD,
                toggleImage,
                toggleImageHD,
                autoCloseMilliSeconds,
                audio,
                stopBackgroundAudio
            ) {
                var self = this;
                this.MainViewer.set("toolTipEnabled", false);
                var cardboardEnabled = this.isCardboardViewMode();
                if (!cardboardEnabled) {
                    var zoomImage = this.zoomImagePopupPanorama;
                    var showDuration = popupPanoramaOverlay.get("showDuration");
                    var hideDuration = popupPanoramaOverlay.get("hideDuration");
                    var playersPaused = this.pauseCurrentPlayers(
                        audio == null || !stopBackgroundAudio
                    );
                    var popupMaxWidthBackup =
                        popupPanoramaOverlay.get("popupMaxWidth");
                    var popupMaxHeightBackup =
                        popupPanoramaOverlay.get("popupMaxHeight");
                    var showEndFunction = function () {
                        var loadedFunction = function () {
                            if (!self.isCardboardViewMode())
                                popupPanoramaOverlay.set("visible", false);
                        };
                        popupPanoramaOverlay.unbind(
                            "showEnd",
                            showEndFunction,
                            self
                        );
                        popupPanoramaOverlay.set("showDuration", 1);
                        popupPanoramaOverlay.set("hideDuration", 1);
                        self.showPopupImage(
                            imageHD,
                            toggleImageHD,
                            popupPanoramaOverlay.get("popupMaxWidth"),
                            popupPanoramaOverlay.get("popupMaxHeight"),
                            null,
                            null,
                            closeButtonProperties,
                            autoCloseMilliSeconds,
                            audio,
                            stopBackgroundAudio,
                            loadedFunction,
                            hideFunction
                        );
                    };
                    var hideFunction = function () {
                        var restoreShowDurationFunction = function () {
                            popupPanoramaOverlay.unbind(
                                "showEnd",
                                restoreShowDurationFunction,
                                self
                            );
                            popupPanoramaOverlay.set("visible", false);
                            popupPanoramaOverlay.set(
                                "showDuration",
                                showDuration
                            );
                            popupPanoramaOverlay.set(
                                "popupMaxWidth",
                                popupMaxWidthBackup
                            );
                            popupPanoramaOverlay.set(
                                "popupMaxHeight",
                                popupMaxHeightBackup
                            );
                        };
                        self.resumePlayers(
                            playersPaused,
                            audio == null || !stopBackgroundAudio
                        );
                        var currentWidth = zoomImage.get("imageWidth");
                        var currentHeight = zoomImage.get("imageHeight");
                        popupPanoramaOverlay.bind(
                            "showEnd",
                            restoreShowDurationFunction,
                            self,
                            true
                        );
                        popupPanoramaOverlay.set("showDuration", 1);
                        popupPanoramaOverlay.set("hideDuration", hideDuration);
                        popupPanoramaOverlay.set("popupMaxWidth", currentWidth);
                        popupPanoramaOverlay.set(
                            "popupMaxHeight",
                            currentHeight
                        );
                        if (popupPanoramaOverlay.get("visible"))
                            restoreShowDurationFunction();
                        else popupPanoramaOverlay.set("visible", true);
                        self.MainViewer.set("toolTipEnabled", true);
                    };
                    if (!imageHD) {
                        imageHD = popupPanoramaOverlay.get("image");
                    }
                    if (!toggleImageHD && toggleImage) {
                        toggleImageHD = toggleImage;
                    }
                    popupPanoramaOverlay.bind(
                        "showEnd",
                        showEndFunction,
                        this,
                        true
                    );
                } else {
                    var hideEndFunction = function () {
                        self.resumePlayers(
                            playersPaused,
                            audio == null || stopBackgroundAudio
                        );
                        if (audio) {
                            if (stopBackgroundAudio) {
                                self.resumeGlobalAudios();
                            }
                            self.stopGlobalAudio(audio);
                        }
                        popupPanoramaOverlay.unbind(
                            "hideEnd",
                            hideEndFunction,
                            self
                        );
                        self.MainViewer.set("toolTipEnabled", true);
                    };
                    var playersPaused = this.pauseCurrentPlayers(
                        audio == null || !stopBackgroundAudio
                    );
                    if (audio) {
                        if (stopBackgroundAudio) {
                            this.pauseGlobalAudios();
                        }
                        this.playGlobalAudio(audio);
                    }
                    popupPanoramaOverlay.bind(
                        "hideEnd",
                        hideEndFunction,
                        this,
                        true
                    );
                }
                popupPanoramaOverlay.set("visible", true);
            },
            showPopupImage: function (
                image,
                toggleImage,
                customWidth,
                customHeight,
                showEffect,
                hideEffect,
                closeButtonProperties,
                autoCloseMilliSeconds,
                audio,
                stopBackgroundAudio,
                loadedCallback,
                hideCallback
            ) {
                var self = this;
                var closed = false;
                var playerClickFunction = function () {
                    zoomImage.unbind("loaded", loadedFunction, self);
                    hideFunction();
                };
                var clearAutoClose = function () {
                    zoomImage.unbind("click", clearAutoClose, this);
                    if (timeoutID != undefined) {
                        clearTimeout(timeoutID);
                    }
                };
                var resizeFunction = function () {
                    setTimeout(setCloseButtonPosition, 0);
                };
                var loadedFunction = function () {
                    self.unbind("click", playerClickFunction, self);
                    veil.set("visible", true);
                    setCloseButtonPosition();
                    closeButton.set("visible", true);
                    zoomImage.unbind("loaded", loadedFunction, this);
                    zoomImage.bind(
                        "userInteractionStart",
                        userInteractionStartFunction,
                        this
                    );
                    zoomImage.bind(
                        "userInteractionEnd",
                        userInteractionEndFunction,
                        this
                    );
                    zoomImage.bind("resize", resizeFunction, this);
                    timeoutID = setTimeout(timeoutFunction, 200);
                };
                var timeoutFunction = function () {
                    timeoutID = undefined;
                    if (autoCloseMilliSeconds) {
                        var autoCloseFunction = function () {
                            hideFunction();
                        };
                        zoomImage.bind("click", clearAutoClose, this);
                        timeoutID = setTimeout(
                            autoCloseFunction,
                            autoCloseMilliSeconds
                        );
                    }
                    zoomImage.bind("backgroundClick", hideFunction, this);
                    if (toggleImage) {
                        zoomImage.bind("click", toggleFunction, this);
                        zoomImage.set("imageCursor", "hand");
                    }
                    closeButton.bind("click", hideFunction, this);
                    if (loadedCallback) loadedCallback();
                };
                var hideFunction = function () {
                    self.MainViewer.set("toolTipEnabled", true);
                    closed = true;
                    if (timeoutID) clearTimeout(timeoutID);
                    if (timeoutUserInteractionID)
                        clearTimeout(timeoutUserInteractionID);
                    if (autoCloseMilliSeconds) clearAutoClose();
                    if (hideCallback) hideCallback();
                    zoomImage.set("visible", false);
                    if (hideEffect && hideEffect.get("duration") > 0) {
                        hideEffect.bind("end", endEffectFunction, this);
                    } else {
                        zoomImage.set("image", null);
                    }
                    closeButton.set("visible", false);
                    veil.set("visible", false);
                    self.unbind("click", playerClickFunction, self);
                    zoomImage.unbind("backgroundClick", hideFunction, this);
                    zoomImage.unbind(
                        "userInteractionStart",
                        userInteractionStartFunction,
                        this
                    );
                    zoomImage.unbind(
                        "userInteractionEnd",
                        userInteractionEndFunction,
                        this,
                        true
                    );
                    zoomImage.unbind("resize", resizeFunction, this);
                    if (toggleImage) {
                        zoomImage.unbind("click", toggleFunction, this);
                        zoomImage.set("cursor", "default");
                    }
                    closeButton.unbind("click", hideFunction, this);
                    self.resumePlayers(
                        playersPaused,
                        audio == null || stopBackgroundAudio
                    );
                    if (audio) {
                        if (stopBackgroundAudio) {
                            self.resumeGlobalAudios();
                        }
                        self.stopGlobalAudio(audio);
                    }
                };
                var endEffectFunction = function () {
                    zoomImage.set("image", null);
                    hideEffect.unbind("end", endEffectFunction, this);
                };
                var toggleFunction = function () {
                    zoomImage.set(
                        "image",
                        isToggleVisible() ? image : toggleImage
                    );
                };
                var isToggleVisible = function () {
                    return zoomImage.get("image") == toggleImage;
                };
                var setCloseButtonPosition = function () {
                    var right =
                        zoomImage.get("actualWidth") -
                        zoomImage.get("imageLeft") -
                        zoomImage.get("imageWidth") +
                        10;
                    var top = zoomImage.get("imageTop") + 10;
                    if (right < 10) right = 10;
                    if (top < 10) top = 10;
                    closeButton.set("right", right);
                    closeButton.set("top", top);
                };
                var userInteractionStartFunction = function () {
                    if (timeoutUserInteractionID) {
                        clearTimeout(timeoutUserInteractionID);
                        timeoutUserInteractionID = undefined;
                    } else {
                        closeButton.set("visible", false);
                    }
                };
                var userInteractionEndFunction = function () {
                    if (!closed) {
                        timeoutUserInteractionID = setTimeout(
                            userInteractionTimeoutFunction,
                            300
                        );
                    }
                };
                var userInteractionTimeoutFunction = function () {
                    timeoutUserInteractionID = undefined;
                    closeButton.set("visible", true);
                    setCloseButtonPosition();
                };
                this.MainViewer.set("toolTipEnabled", false);
                var veil = this.veilPopupPanorama;
                var zoomImage = this.zoomImagePopupPanorama;
                var closeButton = this.closeButtonPopupPanorama;
                if (closeButtonProperties) {
                    for (var key in closeButtonProperties) {
                        closeButton.set(key, closeButtonProperties[key]);
                    }
                }
                var playersPaused = this.pauseCurrentPlayers(
                    audio == null || !stopBackgroundAudio
                );
                if (audio) {
                    if (stopBackgroundAudio) {
                        this.pauseGlobalAudios();
                    }
                    this.playGlobalAudio(audio);
                }
                var timeoutID = undefined;
                var timeoutUserInteractionID = undefined;
                zoomImage.bind("loaded", loadedFunction, this);
                setTimeout(function () {
                    self.bind("click", playerClickFunction, self, false);
                }, 0);
                zoomImage.set("image", image);
                zoomImage.set("customWidth", customWidth);
                zoomImage.set("customHeight", customHeight);
                zoomImage.set("showEffect", showEffect);
                zoomImage.set("hideEffect", hideEffect);
                zoomImage.set("visible", true);
                return zoomImage;
            },
            setOverlayBehaviour: function (overlay, media, action) {
                var executeFunc = function () {
                    switch (action) {
                        case "triggerClick":
                            this.triggerOverlay(overlay, "click");
                            break;
                        case "stop":
                        case "play":
                        case "pause":
                            overlay[action]();
                            break;
                        case "togglePlayPause":
                        case "togglePlayStop":
                            if (overlay.get("state") == "playing")
                                overlay[
                                    action == "togglePlayPause"
                                        ? "pause"
                                        : "stop"
                                ]();
                            else overlay.play();
                            break;
                    }
                    if (window.overlaysDispatched == undefined)
                        window.overlaysDispatched = {};
                    var id = overlay.get("id");
                    window.overlaysDispatched[id] = true;
                    setTimeout(function () {
                        delete window.overlaysDispatched[id];
                    }, 2000);
                };
                if (
                    window.overlaysDispatched != undefined &&
                    overlay.get("id") in window.overlaysDispatched
                )
                    return;
                var playList = this.getPlayListWithMedia(media, true);
                if (playList != undefined) {
                    var item = this.getPlayListItemByMedia(playList, media);
                    if (
                        playList.get("items").indexOf(item) !=
                        playList.get("selectedIndex")
                    ) {
                        var beginFunc = function (e) {
                            item.unbind("begin", beginFunc, this);
                            executeFunc.call(this);
                        };
                        item.bind("begin", beginFunc, this);
                        return;
                    }
                }
                executeFunc.call(this);
            },
            fixTogglePlayPauseButton: function (player) {
                var state = player.get("state");
                var buttons = player.get("buttonPlayPause");
                if (
                    typeof buttons !== "undefined" &&
                    player.get("state") == "playing"
                ) {
                    if (!Array.isArray(buttons)) buttons = [buttons];
                    for (var i = 0; i < buttons.length; ++i)
                        buttons[i].set("pressed", true);
                }
            },
            setMediaBehaviour: function (playList, index, mediaDispatcher) {
                var self = this;
                var stateChangeFunction = function (event) {
                    if (event.data.state == "stopped") {
                        dispose.call(this, true);
                    }
                };
                var onBeginFunction = function () {
                    item.unbind("begin", onBeginFunction, self);
                    var media = item.get("media");
                    if (
                        media.get("class") != "Panorama" ||
                        (media.get("camera") != undefined &&
                            media.get("camera").get("initialSequence") !=
                                undefined)
                    ) {
                        player.bind("stateChange", stateChangeFunction, self);
                    }
                };
                var changeFunction = function () {
                    var index = playListDispatcher.get("selectedIndex");
                    if (index != -1) {
                        indexDispatcher = index;
                        dispose.call(this, false);
                    }
                };
                var disposeCallback = function () {
                    dispose.call(this, false);
                };
                var dispose = function (forceDispose) {
                    if (!playListDispatcher) return;
                    var media = item.get("media");
                    if (
                        (media.get("class") == "Video360" ||
                            media.get("class") == "Video") &&
                        media.get("loop") == true &&
                        !forceDispose
                    )
                        return;
                    playList.set("selectedIndex", -1);
                    if (panoramaSequence && panoramaSequenceIndex != -1) {
                        if (panoramaSequence) {
                            if (
                                panoramaSequenceIndex > 0 &&
                                panoramaSequence
                                    .get("movements")
                                    [panoramaSequenceIndex - 1].get("class") ==
                                    "TargetPanoramaCameraMovement"
                            ) {
                                var initialPosition =
                                    camera.get("initialPosition");
                                var oldYaw = initialPosition.get("yaw");
                                var oldPitch = initialPosition.get("pitch");
                                var oldHfov = initialPosition.get("hfov");
                                var previousMovement =
                                    panoramaSequence.get("movements")[
                                        panoramaSequenceIndex - 1
                                    ];
                                initialPosition.set(
                                    "yaw",
                                    previousMovement.get("targetYaw")
                                );
                                initialPosition.set(
                                    "pitch",
                                    previousMovement.get("targetPitch")
                                );
                                initialPosition.set(
                                    "hfov",
                                    previousMovement.get("targetHfov")
                                );
                                var restoreInitialPositionFunction = function (
                                    event
                                ) {
                                    initialPosition.set("yaw", oldYaw);
                                    initialPosition.set("pitch", oldPitch);
                                    initialPosition.set("hfov", oldHfov);
                                    itemDispatcher.unbind(
                                        "end",
                                        restoreInitialPositionFunction,
                                        this
                                    );
                                };
                                itemDispatcher.bind(
                                    "end",
                                    restoreInitialPositionFunction,
                                    this
                                );
                            }
                            panoramaSequence.set(
                                "movementIndex",
                                panoramaSequenceIndex
                            );
                        }
                    }
                    if (player) {
                        item.unbind("begin", onBeginFunction, this);
                        player.unbind("stateChange", stateChangeFunction, this);
                        for (var i = 0; i < buttons.length; ++i) {
                            buttons[i].unbind("click", disposeCallback, this);
                        }
                    }
                    if (sameViewerArea) {
                        var currentMedia = this.getMediaFromPlayer(player);
                        if (
                            currentMedia == undefined ||
                            currentMedia == item.get("media")
                        ) {
                            playListDispatcher.set(
                                "selectedIndex",
                                indexDispatcher
                            );
                        }
                        if (playList != playListDispatcher)
                            playListDispatcher.unbind(
                                "change",
                                changeFunction,
                                this
                            );
                    } else {
                        viewerArea.set("visible", viewerVisibility);
                    }
                    playListDispatcher = undefined;
                };
                var mediaDispatcherByParam = mediaDispatcher != undefined;
                if (!mediaDispatcher) {
                    var currentIndex = playList.get("selectedIndex");
                    var currentPlayer =
                        currentIndex != -1
                            ? playList
                                  .get("items")
                                  [playList.get("selectedIndex")].get("player")
                            : this.getActivePlayerWithViewer(this.MainViewer);
                    if (currentPlayer) {
                        mediaDispatcher =
                            this.getMediaFromPlayer(currentPlayer);
                    }
                }
                var playListDispatcher = mediaDispatcher
                    ? this.getPlayListWithMedia(mediaDispatcher, true)
                    : undefined;
                if (!playListDispatcher) {
                    playList.set("selectedIndex", index);
                    return;
                }
                var indexDispatcher = playListDispatcher.get("selectedIndex");
                if (
                    playList.get("selectedIndex") == index ||
                    indexDispatcher == -1
                ) {
                    return;
                }
                var item = playList.get("items")[index];
                var itemDispatcher =
                    playListDispatcher.get("items")[indexDispatcher];
                var player = item.get("player");
                var viewerArea = player.get("viewerArea");
                var viewerVisibility = viewerArea.get("visible");
                var sameViewerArea =
                    viewerArea ==
                    itemDispatcher.get("player").get("viewerArea");
                if (sameViewerArea) {
                    if (playList != playListDispatcher) {
                        playListDispatcher.set("selectedIndex", -1);
                        playListDispatcher.bind("change", changeFunction, this);
                    }
                } else {
                    viewerArea.set("visible", true);
                }
                var panoramaSequenceIndex = -1;
                var panoramaSequence = undefined;
                var camera = itemDispatcher.get("camera");
                if (camera) {
                    panoramaSequence = camera.get("initialSequence");
                    if (panoramaSequence) {
                        panoramaSequenceIndex =
                            panoramaSequence.get("movementIndex");
                    }
                }
                playList.set("selectedIndex", index);
                var buttons = [];
                var addButtons = function (property) {
                    var value = player.get(property);
                    if (value == undefined) return;
                    if (Array.isArray(value)) buttons = buttons.concat(value);
                    else buttons.push(value);
                };
                addButtons("buttonStop");
                for (var i = 0; i < buttons.length; ++i) {
                    buttons[i].bind("click", disposeCallback, this);
                }
                if (
                    player != itemDispatcher.get("player") ||
                    !mediaDispatcherByParam
                ) {
                    item.bind("begin", onBeginFunction, self);
                }
                this.executeFunctionWhenChange(
                    playList,
                    index,
                    disposeCallback
                );
            },
            getPlayListItemByMedia: function (playList, media) {
                var items = playList.get("items");
                for (var j = 0, countJ = items.length; j < countJ; ++j) {
                    var item = items[j];
                    if (item.get("media") == media) return item;
                }
                return undefined;
            },
            showPopupMedia: function (
                w,
                media,
                playList,
                popupMaxWidth,
                popupMaxHeight,
                autoCloseWhenFinished,
                stopAudios
            ) {
                var self = this;
                var closeFunction = function () {
                    playList.set("selectedIndex", -1);
                    self.MainViewer.set("toolTipEnabled", true);
                    if (stopAudios) {
                        self.resumeGlobalAudios();
                    }
                    this.resumePlayers(playersPaused, !stopAudios);
                    if (isVideo) {
                        this.unbind("resize", resizeFunction, this);
                    }
                    w.unbind("close", closeFunction, this);
                };
                var endFunction = function () {
                    w.hide();
                };
                var resizeFunction = function () {
                    var getWinValue = function (property) {
                        return w.get(property) || 0;
                    };
                    var parentWidth = self.get("actualWidth");
                    var parentHeight = self.get("actualHeight");
                    var mediaWidth = self.getMediaWidth(media);
                    var mediaHeight = self.getMediaHeight(media);
                    var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;
                    var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;
                    var windowWidth = popupMaxWidthNumber * parentWidth;
                    var windowHeight = popupMaxHeightNumber * parentHeight;
                    var footerHeight = getWinValue("footerHeight");
                    var headerHeight = getWinValue("headerHeight");
                    if (!headerHeight) {
                        var closeButtonHeight =
                            getWinValue("closeButtonIconHeight") +
                            getWinValue("closeButtonPaddingTop") +
                            getWinValue("closeButtonPaddingBottom");
                        var titleHeight =
                            self.getPixels(getWinValue("titleFontSize")) +
                            getWinValue("titlePaddingTop") +
                            getWinValue("titlePaddingBottom");
                        headerHeight =
                            closeButtonHeight > titleHeight
                                ? closeButtonHeight
                                : titleHeight;
                        headerHeight +=
                            getWinValue("headerPaddingTop") +
                            getWinValue("headerPaddingBottom");
                    }
                    var contentWindowWidth =
                        windowWidth -
                        getWinValue("bodyPaddingLeft") -
                        getWinValue("bodyPaddingRight") -
                        getWinValue("paddingLeft") -
                        getWinValue("paddingRight");
                    var contentWindowHeight =
                        windowHeight -
                        headerHeight -
                        footerHeight -
                        getWinValue("bodyPaddingTop") -
                        getWinValue("bodyPaddingBottom") -
                        getWinValue("paddingTop") -
                        getWinValue("paddingBottom");
                    var parentAspectRatio =
                        contentWindowWidth / contentWindowHeight;
                    var mediaAspectRatio = mediaWidth / mediaHeight;
                    if (parentAspectRatio > mediaAspectRatio) {
                        windowWidth =
                            contentWindowHeight * mediaAspectRatio +
                            getWinValue("bodyPaddingLeft") +
                            getWinValue("bodyPaddingRight") +
                            getWinValue("paddingLeft") +
                            getWinValue("paddingRight");
                    } else {
                        windowHeight =
                            contentWindowWidth / mediaAspectRatio +
                            headerHeight +
                            footerHeight +
                            getWinValue("bodyPaddingTop") +
                            getWinValue("bodyPaddingBottom") +
                            getWinValue("paddingTop") +
                            getWinValue("paddingBottom");
                    }
                    if (windowWidth > parentWidth * popupMaxWidthNumber) {
                        windowWidth = parentWidth * popupMaxWidthNumber;
                    }
                    if (windowHeight > parentHeight * popupMaxHeightNumber) {
                        windowHeight = parentHeight * popupMaxHeightNumber;
                    }
                    w.set("width", windowWidth);
                    w.set("height", windowHeight);
                    w.set(
                        "x",
                        (parentWidth - getWinValue("actualWidth")) * 0.5
                    );
                    w.set(
                        "y",
                        (parentHeight - getWinValue("actualHeight")) * 0.5
                    );
                };
                if (autoCloseWhenFinished) {
                    this.executeFunctionWhenChange(playList, 0, endFunction);
                }
                var mediaClass = media.get("class");
                var isVideo = mediaClass == "Video" || mediaClass == "Video360";
                playList.set("selectedIndex", 0);
                if (isVideo) {
                    this.bind("resize", resizeFunction, this);
                    resizeFunction();
                    playList.get("items")[0].get("player").play();
                } else {
                    w.set("width", popupMaxWidth);
                    w.set("height", popupMaxHeight);
                }
                this.MainViewer.set("toolTipEnabled", false);
                if (stopAudios) {
                    this.pauseGlobalAudios();
                }
                var playersPaused = this.pauseCurrentPlayers(!stopAudios);
                w.bind("close", closeFunction, this);
                w.show(this, true);
            },
            getMediaHeight: function (media) {
                switch (media.get("class")) {
                    case "Video360":
                        var res = media.get("video");
                        if (res instanceof Array) {
                            var maxH = 0;
                            for (var i = 0; i < res.length; i++) {
                                var r = res[i];
                                if (r.get("height") > maxH)
                                    maxH = r.get("height");
                            }
                            return maxH;
                        } else {
                            return r.get("height");
                        }
                    default:
                        return media.get("height");
                }
            },
            getMediaFromPlayer: function (player) {
                switch (player.get("class")) {
                    case "PanoramaPlayer":
                        return player.get("panorama") || player.get("video");
                    case "VideoPlayer":
                    case "Video360Player":
                        return player.get("video");
                    case "PhotoAlbumPlayer":
                        return player.get("photoAlbum");
                    case "MapPlayer":
                        return player.get("map");
                }
            },
            executeFunctionWhenChange: function (
                playList,
                index,
                endFunction,
                changeFunction
            ) {
                var endObject = undefined;
                var changePlayListFunction = function (event) {
                    if (event.data.previousSelectedIndex == index) {
                        if (changeFunction) changeFunction.call(this);
                        if (endFunction && endObject)
                            endObject.unbind("end", endFunction, this);
                        playList.unbind("change", changePlayListFunction, this);
                    }
                };
                if (endFunction) {
                    var playListItem = playList.get("items")[index];
                    if (playListItem.get("class") == "PanoramaPlayListItem") {
                        var camera = playListItem.get("camera");
                        if (camera != undefined)
                            endObject = camera.get("initialSequence");
                        if (endObject == undefined)
                            endObject = camera.get("idleSequence");
                    } else {
                        endObject = playListItem.get("media");
                    }
                    if (endObject) {
                        endObject.bind("end", endFunction, this);
                    }
                }
                playList.bind("change", changePlayListFunction, this);
            },
            getCurrentPlayers: function () {
                var players = this.getByClassName("PanoramaPlayer");
                players = players.concat(this.getByClassName("VideoPlayer"));
                players = players.concat(this.getByClassName("Video360Player"));
                players = players.concat(
                    this.getByClassName("PhotoAlbumPlayer")
                );
                return players;
            },
            loadFromCurrentMediaPlayList: function (playList, delta) {
                var currentIndex = playList.get("selectedIndex");
                var totalItems = playList.get("items").length;
                var newIndex = (currentIndex + delta) % totalItems;
                while (newIndex < 0) {
                    newIndex = totalItems + newIndex;
                }
                if (currentIndex != newIndex) {
                    playList.set("selectedIndex", newIndex);
                }
            },
            registerKey: function (key, value) {
                window[key] = value;
            },
            getPlayListItems: function (media, player) {
                var itemClass = (function () {
                    switch (media.get("class")) {
                        case "Panorama":
                        case "LivePanorama":
                        case "HDRPanorama":
                            return "PanoramaPlayListItem";
                        case "Video360":
                            return "Video360PlayListItem";
                        case "PhotoAlbum":
                            return "PhotoAlbumPlayListItem";
                        case "Map":
                            return "MapPlayListItem";
                        case "Video":
                            return "VideoPlayListItem";
                    }
                })();
                if (itemClass != undefined) {
                    var items = this.getByClassName(itemClass);
                    for (var i = items.length - 1; i >= 0; --i) {
                        var item = items[i];
                        if (
                            item.get("media") != media ||
                            (player != undefined &&
                                item.get("player") != player)
                        ) {
                            items.splice(i, 1);
                        }
                    }
                    return items;
                } else {
                    return [];
                }
            },
            getKey: function (key) {
                return window[key];
            },
            setMainMediaByIndex: function (index) {
                var item = undefined;
                if (
                    index >= 0 &&
                    index < this.mainPlayList.get("items").length
                ) {
                    this.mainPlayList.set("selectedIndex", index);
                    item = this.mainPlayList.get("items")[index];
                }
                return item;
            },
            getCurrentPlayerWithMedia: function (media) {
                var playerClass = undefined;
                var mediaPropertyName = undefined;
                switch (media.get("class")) {
                    case "Panorama":
                    case "LivePanorama":
                    case "HDRPanorama":
                        playerClass = "PanoramaPlayer";
                        mediaPropertyName = "panorama";
                        break;
                    case "Video360":
                        playerClass = "PanoramaPlayer";
                        mediaPropertyName = "video";
                        break;
                    case "PhotoAlbum":
                        playerClass = "PhotoAlbumPlayer";
                        mediaPropertyName = "photoAlbum";
                        break;
                    case "Map":
                        playerClass = "MapPlayer";
                        mediaPropertyName = "map";
                        break;
                    case "Video":
                        playerClass = "VideoPlayer";
                        mediaPropertyName = "video";
                        break;
                }
                if (playerClass != undefined) {
                    var players = this.getByClassName(playerClass);
                    for (var i = 0; i < players.length; ++i) {
                        var player = players[i];
                        if (player.get(mediaPropertyName) == media) {
                            return player;
                        }
                    }
                } else {
                    return undefined;
                }
            },
            shareTwitter: function (url) {
                window.open(
                    "https://twitter.com/intent/tweet?source=webclient&url=" +
                        url,
                    "_blank"
                );
            },
            isCardboardViewMode: function () {
                var players = this.getByClassName("PanoramaPlayer");
                return (
                    players.length > 0 &&
                    players[0].get("viewMode") == "cardboard"
                );
            },
            getPlayListWithMedia: function (media, onlySelected) {
                var playLists = this.getByClassName("PlayList");
                for (var i = 0, count = playLists.length; i < count; ++i) {
                    var playList = playLists[i];
                    if (onlySelected && playList.get("selectedIndex") == -1)
                        continue;
                    if (
                        this.getPlayListItemByMedia(playList, media) !=
                        undefined
                    )
                        return playList;
                }
                return undefined;
            },
            getActivePlayerWithViewer: function (viewerArea) {
                var players = this.getByClassName("PanoramaPlayer");
                players = players.concat(this.getByClassName("VideoPlayer"));
                players = players.concat(this.getByClassName("Video360Player"));
                players = players.concat(
                    this.getByClassName("PhotoAlbumPlayer")
                );
                players = players.concat(this.getByClassName("MapPlayer"));
                var i = players.length;
                while (i-- > 0) {
                    var player = players[i];
                    if (player.get("viewerArea") == viewerArea) {
                        var playerClass = player.get("class");
                        if (
                            playerClass == "PanoramaPlayer" &&
                            (player.get("panorama") != undefined ||
                                player.get("video") != undefined)
                        )
                            return player;
                        else if (
                            (playerClass == "VideoPlayer" ||
                                playerClass == "Video360Player") &&
                            player.get("video") != undefined
                        )
                            return player;
                        else if (
                            playerClass == "PhotoAlbumPlayer" &&
                            player.get("photoAlbum") != undefined
                        )
                            return player;
                        else if (
                            playerClass == "MapPlayer" &&
                            player.get("map") != undefined
                        )
                            return player;
                    }
                }
                return undefined;
            },
            setMainMediaByName: function (name) {
                var items = this.mainPlayList.get("items");
                for (var i = 0; i < items.length; ++i) {
                    var item = items[i];
                    if (item.get("media").get("label") == name) {
                        this.mainPlayList.set("selectedIndex", i);
                        return item;
                    }
                }
            },
            shareWhatsapp: function (url) {
                window.open(
                    "https://api.whatsapp.com/send/?text=" +
                        encodeURIComponent(url),
                    "_blank"
                );
            },
            initGA: function () {
                var sendFunc = function (category, event, label) {
                    ga("send", "event", category, event, label);
                };
                var media = this.getByClassName("Panorama");
                media = media.concat(this.getByClassName("Video360"));
                media = media.concat(this.getByClassName("Map"));
                for (var i = 0, countI = media.length; i < countI; ++i) {
                    var m = media[i];
                    var mediaLabel = m.get("label");
                    var overlays = this.getOverlays(m);
                    for (var j = 0, countJ = overlays.length; j < countJ; ++j) {
                        var overlay = overlays[j];
                        var overlayLabel =
                            overlay.get("data") != undefined
                                ? mediaLabel +
                                  " - " +
                                  overlay.get("data")["label"]
                                : mediaLabel;
                        switch (overlay.get("class")) {
                            case "HotspotPanoramaOverlay":
                            case "HotspotMapOverlay":
                                var areas = overlay.get("areas");
                                for (var z = 0; z < areas.length; ++z) {
                                    areas[z].bind(
                                        "click",
                                        sendFunc.bind(
                                            this,
                                            "Hotspot",
                                            "click",
                                            overlayLabel
                                        ),
                                        this
                                    );
                                }
                                break;
                            case "CeilingCapPanoramaOverlay":
                            case "TripodCapPanoramaOverlay":
                                overlay.bind(
                                    "click",
                                    sendFunc.bind(
                                        this,
                                        "Cap",
                                        "click",
                                        overlayLabel
                                    ),
                                    this
                                );
                                break;
                        }
                    }
                }
                var components = this.getByClassName("Button");
                components = components.concat(
                    this.getByClassName("IconButton")
                );
                for (var i = 0, countI = components.length; i < countI; ++i) {
                    var c = components[i];
                    var componentLabel = c.get("data")["name"];
                    c.bind(
                        "click",
                        sendFunc.bind(this, "Skin", "click", componentLabel),
                        this
                    );
                }
                var items = this.getByClassName("PlayListItem");
                var media2Item = {};
                for (var i = 0, countI = items.length; i < countI; ++i) {
                    var item = items[i];
                    var media = item.get("media");
                    if (!(media.get("id") in media2Item)) {
                        item.bind(
                            "begin",
                            sendFunc.bind(
                                this,
                                "Media",
                                "play",
                                media.get("label")
                            ),
                            this
                        );
                        media2Item[media.get("id")] = item;
                    }
                }
            },
            setEndToItemIndex: function (playList, fromIndex, toIndex) {
                var endFunction = function () {
                    if (playList.get("selectedIndex") == fromIndex)
                        playList.set("selectedIndex", toIndex);
                };
                this.executeFunctionWhenChange(
                    playList,
                    fromIndex,
                    endFunction
                );
            },
            shareFacebook: function (url) {
                window.open(
                    "https://www.facebook.com/sharer/sharer.php?u=" + url,
                    "_blank"
                );
            },
            getPixels: function (value) {
                var result = new RegExp(
                    "((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?",
                    "i"
                ).exec(value);
                if (result == undefined) {
                    return 0;
                }
                var num = parseFloat(result[1]);
                var unit = result[4];
                var vw = this.rootPlayer.get("actualWidth") / 100;
                var vh = this.rootPlayer.get("actualHeight") / 100;
                switch (unit) {
                    case "vw":
                        return num * vw;
                    case "vh":
                        return num * vh;
                    case "vmin":
                        return num * Math.min(vw, vh);
                    case "vmax":
                        return num * Math.max(vw, vh);
                    default:
                        return num;
                }
            },
            setComponentVisibility: function (
                component,
                visible,
                applyAt,
                effect,
                propertyEffect,
                ignoreClearTimeout
            ) {
                var keepVisibility = this.getKey(
                    "keepVisibility_" + component.get("id")
                );
                if (keepVisibility) return;
                this.unregisterKey("visibility_" + component.get("id"));
                var changeVisibility = function () {
                    if (effect && propertyEffect) {
                        component.set(propertyEffect, effect);
                    }
                    component.set("visible", visible);
                    if (component.get("class") == "ViewerArea") {
                        try {
                            if (visible) component.restart();
                            else if (
                                component.get("playbackState") == "playing"
                            )
                                component.pause();
                        } catch (e) {}
                    }
                };
                var effectTimeoutName = "effectTimeout_" + component.get("id");
                if (
                    !ignoreClearTimeout &&
                    window.hasOwnProperty(effectTimeoutName)
                ) {
                    var effectTimeout = window[effectTimeoutName];
                    if (effectTimeout instanceof Array) {
                        for (var i = 0; i < effectTimeout.length; i++) {
                            clearTimeout(effectTimeout[i]);
                        }
                    } else {
                        clearTimeout(effectTimeout);
                    }
                    delete window[effectTimeoutName];
                } else if (
                    visible == component.get("visible") &&
                    !ignoreClearTimeout
                )
                    return;
                if (applyAt && applyAt > 0) {
                    var effectTimeout = setTimeout(function () {
                        if (window[effectTimeoutName] instanceof Array) {
                            var arrayTimeoutVal = window[effectTimeoutName];
                            var index = arrayTimeoutVal.indexOf(effectTimeout);
                            arrayTimeoutVal.splice(index, 1);
                            if (arrayTimeoutVal.length == 0) {
                                delete window[effectTimeoutName];
                            }
                        } else {
                            delete window[effectTimeoutName];
                        }
                        changeVisibility();
                    }, applyAt);
                    if (window.hasOwnProperty(effectTimeoutName)) {
                        window[effectTimeoutName] = [
                            window[effectTimeoutName],
                            effectTimeout,
                        ];
                    } else {
                        window[effectTimeoutName] = effectTimeout;
                    }
                } else {
                    changeVisibility();
                }
            },
            visibleComponentsIfPlayerFlagEnabled: function (
                components,
                playerFlag
            ) {
                var enabled = this.get(playerFlag);
                for (var i in components) {
                    components[i].set("visible", enabled);
                }
            },
            setStartTimeVideoSync: function (video, player) {
                this.setStartTimeVideo(video, player.get("currentTime"));
            },
            existsKey: function (key) {
                return key in window;
            },
            setCameraSameSpotAsMedia: function (camera, media) {
                var player = this.getCurrentPlayerWithMedia(media);
                if (player != undefined) {
                    var position = camera.get("initialPosition");
                    position.set("yaw", player.get("yaw"));
                    position.set("pitch", player.get("pitch"));
                    position.set("hfov", player.get("hfov"));
                }
            },
            updateVideoCues: function (playList, index) {
                var playListItem = playList.get("items")[index];
                var video = playListItem.get("media");
                if (video.get("cues").length == 0) return;
                var player = playListItem.get("player");
                var cues = [];
                var changeFunction = function () {
                    if (playList.get("selectedIndex") != index) {
                        video.unbind("cueChange", cueChangeFunction, this);
                        playList.unbind("change", changeFunction, this);
                    }
                };
                var cueChangeFunction = function (event) {
                    var activeCues = event.data.activeCues;
                    for (var i = 0, count = cues.length; i < count; ++i) {
                        var cue = cues[i];
                        if (
                            activeCues.indexOf(cue) == -1 &&
                            (cue.get("startTime") > player.get("currentTime") ||
                                cue.get("endTime") <
                                    player.get("currentTime") + 0.5)
                        ) {
                            cue.trigger("end");
                        }
                    }
                    cues = activeCues;
                };
                video.bind("cueChange", cueChangeFunction, this);
                playList.bind("change", changeFunction, this);
            },
            setStartTimeVideo: function (video, time) {
                var items = this.getPlayListItems(video);
                var startTimeBackup = [];
                var restoreStartTimeFunc = function () {
                    for (var i = 0; i < items.length; ++i) {
                        var item = items[i];
                        item.set("startTime", startTimeBackup[i]);
                        item.unbind("stop", restoreStartTimeFunc, this);
                    }
                };
                for (var i = 0; i < items.length; ++i) {
                    var item = items[i];
                    var player = item.get("player");
                    if (
                        player.get("video") == video &&
                        player.get("state") == "playing"
                    ) {
                        player.seek(time);
                    } else {
                        startTimeBackup.push(item.get("startTime"));
                        item.set("startTime", time);
                        item.bind("stop", restoreStartTimeFunc, this);
                    }
                }
            },
            stopGlobalAudio: function (audio) {
                var audios = window.currentGlobalAudios;
                if (audios) {
                    audio = audios[audio.get("id")];
                    if (audio) {
                        delete audios[audio.get("id")];
                        if (Object.keys(audios).length == 0) {
                            window.currentGlobalAudios = undefined;
                        }
                    }
                }
                if (audio) audio.stop();
            },
            init: function () {
                if (!Object.hasOwnProperty("values")) {
                    Object.values = function (o) {
                        return Object.keys(o).map(function (e) {
                            return o[e];
                        });
                    };
                }
                var history = this.get("data")["history"];
                var playListChangeFunc = function (e) {
                    var playList = e.source;
                    var index = playList.get("selectedIndex");
                    if (index < 0) return;
                    var id = playList.get("id");
                    if (!history.hasOwnProperty(id))
                        history[id] = new HistoryData(playList);
                    history[id].add(index);
                };
                var playLists = this.getByClassName("PlayList");
                for (var i = 0, count = playLists.length; i < count; ++i) {
                    var playList = playLists[i];
                    playList.bind("change", playListChangeFunc, this);
                }
            },
            getComponentByName: function (name) {
                var list = this.getByClassName("UIComponent");
                for (var i = 0, count = list.length; i < count; ++i) {
                    var component = list[i];
                    var data = component.get("data");
                    if (data != undefined && data.name == name) {
                        return component;
                    }
                }
                return undefined;
            },
            unregisterKey: function (key) {
                delete window[key];
            },
            updateMediaLabelFromPlayList: function (
                playList,
                htmlText,
                playListItemStopToDispose
            ) {
                var changeFunction = function () {
                    var index = playList.get("selectedIndex");
                    if (index >= 0) {
                        var beginFunction = function () {
                            playListItem.unbind("begin", beginFunction);
                            setMediaLabel(index);
                        };
                        var setMediaLabel = function (index) {
                            var media = playListItem.get("media");
                            var text = media.get("data");
                            if (!text) text = media.get("label");
                            setHtml(text);
                        };
                        var setHtml = function (text) {
                            if (text !== undefined) {
                                htmlText.set(
                                    "html",
                                    '<div style="text-align:left"><SPAN STYLE="color:#FFFFFF;font-size:12px;font-family:Verdana"><span color="white" font-family="Verdana" font-size="12px">' +
                                        text +
                                        "</SPAN></div>"
                                );
                            } else {
                                htmlText.set("html", "");
                            }
                        };
                        var playListItem = playList.get("items")[index];
                        if (htmlText.get("html")) {
                            setHtml("Loading...");
                            playListItem.bind("begin", beginFunction);
                        } else {
                            setMediaLabel(index);
                        }
                    }
                };
                var disposeFunction = function () {
                    htmlText.set("html", undefined);
                    playList.unbind("change", changeFunction, this);
                    playListItemStopToDispose.unbind(
                        "stop",
                        disposeFunction,
                        this
                    );
                };
                if (playListItemStopToDispose) {
                    playListItemStopToDispose.bind(
                        "stop",
                        disposeFunction,
                        this
                    );
                }
                playList.bind("change", changeFunction, this);
                changeFunction();
            },
            pauseCurrentPlayers: function (onlyPauseCameraIfPanorama) {
                var players = this.getCurrentPlayers();
                var i = players.length;
                while (i-- > 0) {
                    var player = players[i];
                    if (player.get("state") == "playing") {
                        if (
                            onlyPauseCameraIfPanorama &&
                            player.get("class") == "PanoramaPlayer" &&
                            typeof player.get("video") === "undefined"
                        ) {
                            player.pauseCamera();
                        } else {
                            player.pause();
                        }
                    } else {
                        players.splice(i, 1);
                    }
                }
                return players;
            },
            historyGoForward: function (playList) {
                var history = this.get("data")["history"][playList.get("id")];
                if (history != undefined) {
                    history.forward();
                }
            },
            loopAlbum: function (playList, index) {
                var playListItem = playList.get("items")[index];
                var player = playListItem.get("player");
                var loopFunction = function () {
                    player.play();
                };
                this.executeFunctionWhenChange(playList, index, loopFunction);
            },
            getMediaByName: function (name) {
                var list = this.getByClassName("Media");
                for (var i = 0, count = list.length; i < count; ++i) {
                    var media = list[i];
                    if (
                        (media.get("class") == "Audio" &&
                            media.get("data").label == name) ||
                        media.get("label") == name
                    ) {
                        return media;
                    }
                }
                return undefined;
            },
            pauseGlobalAudios: function (caller, exclude) {
                if (window.pauseGlobalAudiosState == undefined)
                    window.pauseGlobalAudiosState = {};
                if (window.pauseGlobalAudiosList == undefined)
                    window.pauseGlobalAudiosList = [];
                if (caller in window.pauseGlobalAudiosState) {
                    return;
                }
                var audios = this.getByClassName("Audio").concat(
                    this.getByClassName("VideoPanoramaOverlay")
                );
                if (window.currentGlobalAudios != undefined)
                    audios = audios.concat(
                        Object.values(window.currentGlobalAudios)
                    );
                var audiosPaused = [];
                var values = Object.values(window.pauseGlobalAudiosState);
                for (var i = 0, count = values.length; i < count; ++i) {
                    var objAudios = values[i];
                    for (var j = 0; j < objAudios.length; ++j) {
                        var a = objAudios[j];
                        if (audiosPaused.indexOf(a) == -1) audiosPaused.push(a);
                    }
                }
                window.pauseGlobalAudiosState[caller] = audiosPaused;
                for (var i = 0, count = audios.length; i < count; ++i) {
                    var a = audios[i];
                    if (
                        a.get("state") == "playing" &&
                        (exclude == undefined || exclude.indexOf(a) == -1)
                    ) {
                        a.pause();
                        audiosPaused.push(a);
                    }
                }
            },
            getMediaWidth: function (media) {
                switch (media.get("class")) {
                    case "Video360":
                        var res = media.get("video");
                        if (res instanceof Array) {
                            var maxW = 0;
                            for (var i = 0; i < res.length; i++) {
                                var r = res[i];
                                if (r.get("width") > maxW)
                                    maxW = r.get("width");
                            }
                            return maxW;
                        } else {
                            return r.get("width");
                        }
                    default:
                        return media.get("width");
                }
            },
            setPanoramaCameraWithSpot: function (playListItem, yaw, pitch) {
                var panorama = playListItem.get("media");
                var newCamera = this.cloneCamera(playListItem.get("camera"));
                var initialPosition = newCamera.get("initialPosition");
                initialPosition.set("yaw", yaw);
                initialPosition.set("pitch", pitch);
                this.startPanoramaWithCamera(panorama, newCamera);
            },
            resumeGlobalAudios: function (caller) {
                if (
                    window.pauseGlobalAudiosState == undefined ||
                    !(caller in window.pauseGlobalAudiosState)
                )
                    return;
                var audiosPaused = window.pauseGlobalAudiosState[caller];
                delete window.pauseGlobalAudiosState[caller];
                var values = Object.values(window.pauseGlobalAudiosState);
                for (var i = 0, count = values.length; i < count; ++i) {
                    var objAudios = values[i];
                    for (var j = audiosPaused.length - 1; j >= 0; --j) {
                        var a = audiosPaused[j];
                        if (objAudios.indexOf(a) != -1)
                            audiosPaused.splice(j, 1);
                    }
                }
                for (var i = 0, count = audiosPaused.length; i < count; ++i) {
                    var a = audiosPaused[i];
                    if (a.get("state") == "paused") a.play();
                }
            },
            showComponentsWhileMouseOver: function (
                parentComponent,
                components,
                durationVisibleWhileOut
            ) {
                var setVisibility = function (visible) {
                    for (
                        var i = 0, length = components.length;
                        i < length;
                        i++
                    ) {
                        var component = components[i];
                        if (
                            component.get("class") == "HTMLText" &&
                            (component.get("html") == "" ||
                                component.get("html") == undefined)
                        ) {
                            continue;
                        }
                        component.set("visible", visible);
                    }
                };
                if (this.rootPlayer.get("touchDevice") == true) {
                    setVisibility(true);
                } else {
                    var timeoutID = -1;
                    var rollOverFunction = function () {
                        setVisibility(true);
                        if (timeoutID >= 0) clearTimeout(timeoutID);
                        parentComponent.unbind(
                            "rollOver",
                            rollOverFunction,
                            this
                        );
                        parentComponent.bind("rollOut", rollOutFunction, this);
                    };
                    var rollOutFunction = function () {
                        var timeoutFunction = function () {
                            setVisibility(false);
                            parentComponent.unbind(
                                "rollOver",
                                rollOverFunction,
                                this
                            );
                        };
                        parentComponent.unbind(
                            "rollOut",
                            rollOutFunction,
                            this
                        );
                        parentComponent.bind(
                            "rollOver",
                            rollOverFunction,
                            this
                        );
                        timeoutID = setTimeout(
                            timeoutFunction,
                            durationVisibleWhileOut
                        );
                    };
                    parentComponent.bind("rollOver", rollOverFunction, this);
                }
            },
            cloneCamera: function (camera) {
                var newCamera = this.rootPlayer.createInstance(
                    camera.get("class")
                );
                newCamera.set("id", camera.get("id") + "_copy");
                newCamera.set("idleSequence", camera.get("initialSequence"));
                return newCamera;
            },
            triggerOverlay: function (overlay, eventName) {
                if (overlay.get("areas") != undefined) {
                    var areas = overlay.get("areas");
                    for (var i = 0; i < areas.length; ++i) {
                        areas[i].trigger(eventName);
                    }
                } else {
                    overlay.trigger(eventName);
                }
            },
            resumePlayers: function (players, onlyResumeCameraIfPanorama) {
                for (var i = 0; i < players.length; ++i) {
                    var player = players[i];
                    if (
                        onlyResumeCameraIfPanorama &&
                        player.get("class") == "PanoramaPlayer" &&
                        typeof player.get("video") === "undefined"
                    ) {
                        player.resumeCamera();
                    } else {
                        player.play();
                    }
                }
            },
            historyGoBack: function (playList) {
                var history = this.get("data")["history"][playList.get("id")];
                if (history != undefined) {
                    history.back();
                }
            },
            setPanoramaCameraWithCurrentSpot: function (playListItem) {
                var currentPlayer = this.getActivePlayerWithViewer(
                    this.MainViewer
                );
                if (currentPlayer == undefined) {
                    return;
                }
                var playerClass = currentPlayer.get("class");
                if (
                    playerClass != "PanoramaPlayer" &&
                    playerClass != "Video360Player"
                ) {
                    return;
                }
                var fromMedia = currentPlayer.get("panorama");
                if (fromMedia == undefined) {
                    fromMedia = currentPlayer.get("video");
                }
                var panorama = playListItem.get("media");
                var newCamera = this.cloneCamera(playListItem.get("camera"));
                this.setCameraSameSpotAsMedia(newCamera, fromMedia);
                this.startPanoramaWithCamera(panorama, newCamera);
            },
            setMapLocation: function (panoramaPlayListItem, mapPlayer) {
                var resetFunction = function () {
                    panoramaPlayListItem.unbind("stop", resetFunction, this);
                    player.set("mapPlayer", null);
                };
                panoramaPlayListItem.bind("stop", resetFunction, this);
                var player = panoramaPlayListItem.get("player");
                player.set("mapPlayer", mapPlayer);
            },
            playGlobalAudio: function (audio, endCallback) {
                var endFunction = function () {
                    audio.unbind("end", endFunction, this);
                    this.stopGlobalAudio(audio);
                    if (endCallback) endCallback();
                };
                audio = this.getGlobalAudio(audio);
                var audios = window.currentGlobalAudios;
                if (!audios) {
                    audios = window.currentGlobalAudios = {};
                }
                audios[audio.get("id")] = audio;
                if (audio.get("state") == "playing") {
                    return audio;
                }
                if (!audio.get("loop")) {
                    audio.bind("end", endFunction, this);
                }
                audio.play();
                return audio;
            },
            stopAndGoCamera: function (camera, ms) {
                var sequence = camera.get("initialSequence");
                sequence.pause();
                var timeoutFunction = function () {
                    sequence.play();
                };
                setTimeout(timeoutFunction, ms);
            },
            syncPlaylists: function (playLists) {
                var changeToMedia = function (media, playListDispatched) {
                    for (var i = 0, count = playLists.length; i < count; ++i) {
                        var playList = playLists[i];
                        if (playList != playListDispatched) {
                            var items = playList.get("items");
                            for (
                                var j = 0, countJ = items.length;
                                j < countJ;
                                ++j
                            ) {
                                if (items[j].get("media") == media) {
                                    if (playList.get("selectedIndex") != j) {
                                        playList.set("selectedIndex", j);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                };
                var changeFunction = function (event) {
                    var playListDispatched = event.source;
                    var selectedIndex = playListDispatched.get("selectedIndex");
                    if (selectedIndex < 0) return;
                    var media = playListDispatched
                        .get("items")
                        [selectedIndex].get("media");
                    changeToMedia(media, playListDispatched);
                };
                var mapPlayerChangeFunction = function (event) {
                    var panoramaMapLocation = event.source.get(
                        "panoramaMapLocation"
                    );
                    if (panoramaMapLocation) {
                        var map = panoramaMapLocation.get("map");
                        changeToMedia(map);
                    }
                };
                for (var i = 0, count = playLists.length; i < count; ++i) {
                    playLists[i].bind("change", changeFunction, this);
                }
                var mapPlayers = this.getByClassName("MapPlayer");
                for (var i = 0, count = mapPlayers.length; i < count; ++i) {
                    mapPlayers[i].bind(
                        "panoramaMapLocation_change",
                        mapPlayerChangeFunction,
                        this
                    );
                }
            },
            keepComponentVisibility: function (component, keep) {
                var key = "keepVisibility_" + component.get("id");
                var value = this.getKey(key);
                if (value == undefined && keep) {
                    this.registerKey(key, keep);
                } else if (value != undefined && !keep) {
                    this.unregisterKey(key);
                }
            },
            getPanoramaOverlayByName: function (panorama, name) {
                var overlays = this.getOverlays(panorama);
                for (var i = 0, count = overlays.length; i < count; ++i) {
                    var overlay = overlays[i];
                    var data = overlay.get("data");
                    if (data != undefined && data.label == name) {
                        return overlay;
                    }
                }
                return undefined;
            },
            changePlayListWithSameSpot: function (playList, newIndex) {
                var currentIndex = playList.get("selectedIndex");
                if (
                    currentIndex >= 0 &&
                    newIndex >= 0 &&
                    currentIndex != newIndex
                ) {
                    var currentItem = playList.get("items")[currentIndex];
                    var newItem = playList.get("items")[newIndex];
                    var currentPlayer = currentItem.get("player");
                    var newPlayer = newItem.get("player");
                    if (
                        (currentPlayer.get("class") == "PanoramaPlayer" ||
                            currentPlayer.get("class") == "Video360Player") &&
                        (newPlayer.get("class") == "PanoramaPlayer" ||
                            newPlayer.get("class") == "Video360Player")
                    ) {
                        var newCamera = this.cloneCamera(newItem.get("camera"));
                        this.setCameraSameSpotAsMedia(
                            newCamera,
                            currentItem.get("media")
                        );
                        this.startPanoramaWithCamera(
                            newItem.get("media"),
                            newCamera
                        );
                    }
                }
            },
            autotriggerAtStart: function (playList, callback, once) {
                var onChange = function (event) {
                    callback();
                    if (once == true) playList.unbind("change", onChange, this);
                };
                playList.bind("change", onChange, this);
            },
            playGlobalAudioWhilePlay: function (
                playList,
                index,
                audio,
                endCallback
            ) {
                var changeFunction = function (event) {
                    if (event.data.previousSelectedIndex == index) {
                        this.stopGlobalAudio(audio);
                        if (isPanorama) {
                            var media = playListItem.get("media");
                            var audios = media.get("audios");
                            audios.splice(audios.indexOf(audio), 1);
                            media.set("audios", audios);
                        }
                        playList.unbind("change", changeFunction, this);
                        if (endCallback) endCallback();
                    }
                };
                var audios = window.currentGlobalAudios;
                if (audios && audio.get("id") in audios) {
                    audio = audios[audio.get("id")];
                    if (audio.get("state") != "playing") {
                        audio.play();
                    }
                    return audio;
                }
                playList.bind("change", changeFunction, this);
                var playListItem = playList.get("items")[index];
                var isPanorama =
                    playListItem.get("class") == "PanoramaPlayListItem";
                if (isPanorama) {
                    var media = playListItem.get("media");
                    var audios = (media.get("audios") || []).slice();
                    if (audio.get("class") == "MediaAudio") {
                        var panoramaAudio =
                            this.rootPlayer.createInstance("PanoramaAudio");
                        panoramaAudio.set("autoplay", false);
                        panoramaAudio.set("audio", audio.get("audio"));
                        panoramaAudio.set("loop", audio.get("loop"));
                        panoramaAudio.set("id", audio.get("id"));
                        var stateChangeFunctions =
                            audio.getBindings("stateChange");
                        for (var i = 0; i < stateChangeFunctions.length; ++i) {
                            var f = stateChangeFunctions[i];
                            if (typeof f == "string")
                                f = new Function("event", f);
                            panoramaAudio.bind("stateChange", f, this);
                        }
                        audio = panoramaAudio;
                    }
                    audios.push(audio);
                    media.set("audios", audios);
                }
                return this.playGlobalAudio(audio, endCallback);
            },
            startPanoramaWithCamera: function (media, camera) {
                if (
                    window.currentPanoramasWithCameraChanged != undefined &&
                    window.currentPanoramasWithCameraChanged.indexOf(media) !=
                        -1
                ) {
                    return;
                }
                var playLists = this.getByClassName("PlayList");
                if (playLists.length == 0) return;
                var restoreItems = [];
                for (var i = 0, count = playLists.length; i < count; ++i) {
                    var playList = playLists[i];
                    var items = playList.get("items");
                    for (var j = 0, countJ = items.length; j < countJ; ++j) {
                        var item = items[j];
                        if (
                            item.get("media") == media &&
                            (item.get("class") == "PanoramaPlayListItem" ||
                                item.get("class") == "Video360PlayListItem")
                        ) {
                            restoreItems.push({
                                camera: item.get("camera"),
                                item: item,
                            });
                            item.set("camera", camera);
                        }
                    }
                }
                if (restoreItems.length > 0) {
                    if (window.currentPanoramasWithCameraChanged == undefined) {
                        window.currentPanoramasWithCameraChanged = [media];
                    } else {
                        window.currentPanoramasWithCameraChanged.push(media);
                    }
                    var restoreCameraOnStop = function () {
                        var index =
                            window.currentPanoramasWithCameraChanged.indexOf(
                                media
                            );
                        if (index != -1) {
                            window.currentPanoramasWithCameraChanged.splice(
                                index,
                                1
                            );
                        }
                        for (var i = 0; i < restoreItems.length; i++) {
                            restoreItems[i].item.set(
                                "camera",
                                restoreItems[i].camera
                            );
                            restoreItems[i].item.unbind(
                                "stop",
                                restoreCameraOnStop,
                                this
                            );
                        }
                    };
                    for (var i = 0; i < restoreItems.length; i++) {
                        restoreItems[i].item.bind(
                            "stop",
                            restoreCameraOnStop,
                            this
                        );
                    }
                }
            },
            changeBackgroundWhilePlay: function (playList, index, color) {
                var stopFunction = function (event) {
                    playListItem.unbind("stop", stopFunction, this);
                    if (
                        color == viewerArea.get("backgroundColor") &&
                        colorRatios == viewerArea.get("backgroundColorRatios")
                    ) {
                        viewerArea.set(
                            "backgroundColor",
                            backgroundColorBackup
                        );
                        viewerArea.set(
                            "backgroundColorRatios",
                            backgroundColorRatiosBackup
                        );
                    }
                };
                var playListItem = playList.get("items")[index];
                var player = playListItem.get("player");
                var viewerArea = player.get("viewerArea");
                var backgroundColorBackup = viewerArea.get("backgroundColor");
                var backgroundColorRatiosBackup = viewerArea.get(
                    "backgroundColorRatios"
                );
                var colorRatios = [0];
                if (
                    color != backgroundColorBackup ||
                    colorRatios != backgroundColorRatiosBackup
                ) {
                    viewerArea.set("backgroundColor", color);
                    viewerArea.set("backgroundColorRatios", colorRatios);
                    playListItem.bind("stop", stopFunction, this);
                }
            },
            pauseGlobalAudiosWhilePlayItem: function (
                playList,
                index,
                exclude
            ) {
                var self = this;
                var item = playList.get("items")[index];
                var media = item.get("media");
                var player = item.get("player");
                var caller = media.get("id");
                var endFunc = function () {
                    if (playList.get("selectedIndex") != index) {
                        if (hasState) {
                            player.unbind("stateChange", stateChangeFunc, self);
                        }
                        self.resumeGlobalAudios(caller);
                    }
                };
                var stateChangeFunc = function (event) {
                    var state = event.data.state;
                    if (state == "stopped") {
                        this.resumeGlobalAudios(caller);
                    } else if (state == "playing") {
                        this.pauseGlobalAudios(caller, exclude);
                    }
                };
                var mediaClass = media.get("class");
                var hasState =
                    mediaClass == "Video360" || mediaClass == "Video";
                if (hasState) {
                    player.bind("stateChange", stateChangeFunc, this);
                }
                this.pauseGlobalAudios(caller, exclude);
                this.executeFunctionWhenChange(
                    playList,
                    index,
                    endFunc,
                    endFunc
                );
            },
            playAudioList: function (audios) {
                if (audios.length == 0) return;
                var currentAudioCount = -1;
                var currentAudio;
                var playGlobalAudioFunction = this.playGlobalAudio;
                var playNext = function () {
                    if (++currentAudioCount >= audios.length)
                        currentAudioCount = 0;
                    currentAudio = audios[currentAudioCount];
                    playGlobalAudioFunction(currentAudio, playNext);
                };
                playNext();
            },
            showWindow: function (w, autoCloseMilliSeconds, containsAudio) {
                if (w.get("visible") == true) {
                    return;
                }
                var closeFunction = function () {
                    clearAutoClose();
                    this.resumePlayers(playersPaused, !containsAudio);
                    w.unbind("close", closeFunction, this);
                };
                var clearAutoClose = function () {
                    w.unbind("click", clearAutoClose, this);
                    if (timeoutID != undefined) {
                        clearTimeout(timeoutID);
                    }
                };
                var timeoutID = undefined;
                if (autoCloseMilliSeconds) {
                    var autoCloseFunction = function () {
                        w.hide();
                    };
                    w.bind("click", clearAutoClose, this);
                    timeoutID = setTimeout(
                        autoCloseFunction,
                        autoCloseMilliSeconds
                    );
                }
                var playersPaused = this.pauseCurrentPlayers(!containsAudio);
                w.bind("close", closeFunction, this);
                w.show(this, true);
            },
            getOverlays: function (media) {
                switch (media.get("class")) {
                    case "Panorama":
                        var overlays = media.get("overlays").concat() || [];
                        var frames = media.get("frames");
                        for (var j = 0; j < frames.length; ++j) {
                            overlays = overlays.concat(
                                frames[j].get("overlays") || []
                            );
                        }
                        return overlays;
                    case "Video360":
                    case "Map":
                        return media.get("overlays") || [];
                    default:
                        return [];
                }
            },
            pauseGlobalAudio: function (audio) {
                var audios = window.currentGlobalAudios;
                if (audios) {
                    audio = audios[audio.get("id")];
                }
                if (audio.get("state") == "playing") audio.pause();
            },
            getGlobalAudio: function (audio) {
                var audios = window.currentGlobalAudios;
                if (audios != undefined && audio.get("id") in audios) {
                    audio = audios[audio.get("id")];
                }
                return audio;
            },
            showPopupPanoramaVideoOverlay: function (
                popupPanoramaOverlay,
                closeButtonProperties,
                stopAudios
            ) {
                var self = this;
                var showEndFunction = function () {
                    popupPanoramaOverlay.unbind("showEnd", showEndFunction);
                    closeButton.bind("click", hideFunction, this);
                    setCloseButtonPosition();
                    closeButton.set("visible", true);
                };
                var endFunction = function () {
                    if (!popupPanoramaOverlay.get("loop")) hideFunction();
                };
                var hideFunction = function () {
                    self.MainViewer.set("toolTipEnabled", true);
                    popupPanoramaOverlay.set("visible", false);
                    closeButton.set("visible", false);
                    closeButton.unbind("click", hideFunction, self);
                    popupPanoramaOverlay.unbind("end", endFunction, self);
                    popupPanoramaOverlay.unbind(
                        "hideEnd",
                        hideFunction,
                        self,
                        true
                    );
                    self.resumePlayers(playersPaused, true);
                    if (stopAudios) {
                        self.resumeGlobalAudios();
                    }
                };
                var setCloseButtonPosition = function () {
                    var right = 10;
                    var top = 10;
                    closeButton.set("right", right);
                    closeButton.set("top", top);
                };
                this.MainViewer.set("toolTipEnabled", false);
                var closeButton = this.closeButtonPopupPanorama;
                if (closeButtonProperties) {
                    for (var key in closeButtonProperties) {
                        closeButton.set(key, closeButtonProperties[key]);
                    }
                }
                var playersPaused = this.pauseCurrentPlayers(true);
                if (stopAudios) {
                    this.pauseGlobalAudios();
                }
                popupPanoramaOverlay.bind("end", endFunction, this, true);
                popupPanoramaOverlay.bind(
                    "showEnd",
                    showEndFunction,
                    this,
                    true
                );
                popupPanoramaOverlay.bind("hideEnd", hideFunction, this, true);
                popupPanoramaOverlay.set("visible", true);
            },
            openLink: function (url, name) {
                if (url == location.href) {
                    return;
                }
                var isElectron =
                    (window &&
                        window.process &&
                        window.process.versions &&
                        window.process.versions["electron"]) ||
                    (navigator &&
                        navigator.userAgent &&
                        navigator.userAgent.indexOf("Electron") >= 0);
                if (name == "_blank" && isElectron) {
                    if (url.startsWith("/")) {
                        var r = window.location.href.split("/");
                        r.pop();
                        url = r.join("/") + url;
                    }
                    var extension = url.split(".").pop().toLowerCase();
                    if (extension != "pdf" || url.startsWith("file://")) {
                        var shell = window.require("electron").shell;
                        shell.openExternal(url);
                    } else {
                        window.open(url, name);
                    }
                } else if (isElectron && (name == "_top" || name == "_self")) {
                    window.location = url;
                } else {
                    var newWindow = window.open(url, name);
                    newWindow.focus();
                }
            },
        },
        scrollBarColor: "#000000",
        data: {
            name: "Player468",
        },
        mouseWheelEnabled: true,
        shadow: false,
        buttonToggleFullscreen:
            "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
        downloadEnabled: false,
        defaultVRPointer: "laser",
    };

    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function (index) {
        if (
            this.pointer < this.list.length &&
            this.list[this.pointer] == index
        ) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function () {
        if (!this.canBack()) return;
        this.playList.set("selectedIndex", this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function () {
        if (!this.canForward()) return;
        this.playList.set("selectedIndex", this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function () {
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function () {
        return this.pointer >= 0 && this.pointer < this.list.length - 1;
    };
    //

    if (script.data == undefined) script.data = {};
    script.data["history"] = {}; //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

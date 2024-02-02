import {withMutation} from "@apollo/client/react/hoc";

const theme_colors = {
    prussian_blue: "#012a4aff",
    indigo_dye: "#013a63ff",
    indigo_dye_2: "#01497cff",
    indigo_dye_3: "#014f86ff",
    ucla_blue: "#2a6f97ff",
    cerulean: "#2c7da0ff",
    air_force_blue: "#468fafff",
    air_superiority_blue: "#61a5c2ff",
    sky_blue: "#89c2d9ff",
    light_blue: "#a9d6e5ff",

    gradient_top: "linear-gradient(0deg, #012a4aff, #013a63ff, #01497cff, #014f86ff, #2a6f97ff, #2c7da0ff, #468fafff, #61a5c2ff, #89c2d9ff, #a9d6e5ff)",
    gradient_right: "linear-gradient(90deg, #012a4aff, #013a63ff, #01497cff, #014f86ff, #2a6f97ff, #2c7da0ff, #468fafff, #61a5c2ff, #89c2d9ff, #a9d6e5ff)",
    gradient_bottom: "linear-gradient(180deg, #012a4aff, #013a63ff, #01497cff, #014f86ff, #2a6f97ff, #2c7da0ff, #468fafff, #61a5c2ff, #89c2d9ff, #a9d6e5ff)",
    gradient_left: "linear-gradient(270deg, #012a4aff, #013a63ff, #01497cff, #014f86ff, #2a6f97ff, #2c7da0ff, #468fafff, #61a5c2ff, #89c2d9ff, #a9d6e5ff)",
}

export const themeSettings = {
    light: {
        backgroundColor: theme_colors.light_blue,
        textColor: 'black',
        gradient_left: theme_colors.gradient_left,
        gradient_right: theme_colors.gradient_right,
        gradient_bottom: theme_colors.gradient_bottom,
        gradient_top: theme_colors.gradient_top,
        button: {
            normal: {
                textColor: theme_colors.light_blue,
                backgroundColor: theme_colors.prussian_blue,
                borderColor: theme_colors.prussian_blue,
                hoverTextColor: theme_colors.prussian_blue,
                hoverBackgroundColor: theme_colors.light_blue
            },
            outline: {
                textColor: theme_colors.prussian_blue,
                backgroundColor: theme_colors.light_blue,
                borderColor: theme_colors.prussian_blue,
                hoverTextColor: theme_colors.light_blue,
                hoverBackgroundColor: theme_colors.prussian_blue
            }
        }
    },
    dark: {
        backgroundColor: theme_colors.prussian_blue,
        textColor: 'white',
        gradient_left: theme_colors.gradient_left,
        gradient_right: theme_colors.gradient_right,
        gradient_bottom: theme_colors.gradient_bottom,
        gradient_top: theme_colors.gradient_top,
        button: {
            normal: {
                textColor: theme_colors.prussian_blue,
                backgroundColor: theme_colors.light_blue,
                borderColor: theme_colors.light_blue,
                hoverTextColor: theme_colors.light_blue,
                hoverBackgroundColor: theme_colors.prussian_blue
            },
            outline: {
                textColor: theme_colors.light_blue,
                backgroundColor: theme_colors.prussian_blue,
                borderColor: theme_colors.light_blue,
                hoverTextColor: theme_colors.prussian_blue,
                hoverBackgroundColor: theme_colors.light_blue
            }
        }
    }
}
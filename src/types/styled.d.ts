import styled from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        mode: string,
        background: string,
        color: {
            primary: string,
            secundary: string,
            textColor: string,
            optionColor: {
                primary: string,
                secundary: string
            },
            activeColor: {
                primary: string,
                secundary: string
            },
        }
    }
}
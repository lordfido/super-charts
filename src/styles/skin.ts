/*
 * This file contains the color's scheme
 * the application will use. All of them are
 * associated to a particular component based
 * on its name.
 * 
 * This way:
 * - We have a central place where all colors are registered.
 * - We can make that Component1's background is the same color than Component2's background.
 * - We can update Component1's background without affecting Component2's background.
 */

import { BLUE, GREY, ORANGE, RED, WHITE } from "./colors";

export const DEFAULT_BG = GREY[50];
export const DEFAULT_COLOR = GREY[500];

export const HEADER_BG = WHITE;
export const HEADER_BORDER = GREY[100];
export const HEADER_COLOR = GREY[400];

export const TITLE1_COLOR = BLUE[800];

export const BUTTON_BG = WHITE;
export const BUTTON_BG_PRIMARY = ORANGE[400];
export const BUTTON_BORDER = GREY[70];
export const BUTTON_BORDER_HOVER = GREY[200];
export const BUTTON_COLOR = GREY[550];
export const BUTTON_COLOR_PRIMARY = WHITE;

export const TAB_BORDER = GREY[65];
export const TAB_BORDER_ACTIVE = ORANGE[300];
export const TAB_COLOR = GREY[400];
export const TAB_COLOR_ACTIVE = BLUE[800];

export const CARD_BG = WHITE;
export const CARD_BORDER = GREY[100];
export const CARD_TITLE_COLOR = BLUE[800];

export const INPUT_BG = WHITE;
export const INPUT_BORDER = GREY[100];
export const INPUT_BORDER_HOVER = BLUE[50];
export const INPUT_COLOR = BLUE[800];
export const INPUT_COLOR_DISABLED = GREY[120];

export const ERROR_COLOR = RED[400];

export const DATEPICKER_PANEL_BG = GREY[50];
export const DATEPICKER_PANEL_COLOR = INPUT_COLOR;

export const DATEPICKER_WEEKS_BG = GREY[60];
export const DATEPICKER_WEEKS_BG_HOVER = WHITE;
export const DATEPICKER_WEEKS_COLOR = GREY[400];

export const DATEPICKER_WEEKDAY_COLOR = GREY[400];

export const DATEPICKER_DAY_BG = 'transparent';
export const DATEPICKER_DAY_BG_SELECTED = ORANGE[300];
export const DATEPICKER_DAY_BG_ACTIVE = ORANGE[400];

export const DATEPICKER_DAY_COLOR = GREY[700];
export const DATEPICKER_DAY_COLOR_SELECTED = WHITE;
export const DATEPICKER_DAY_COLOR_ACTIVE = WHITE;
export const DATEPICKER_DAY_COLOR_DISABLED = INPUT_COLOR_DISABLED;

export const DATEPICKER_ACTIONS_BG = WHITE;

export const DROPDOWN_BG = GREY[60];
export const DROPDOWN_COLOR = GREY[400];
export const DROPDOWN_ITEM_BG = WHITE;
export const DROPDOWN_ITEM_BG_HOVER = GREY[50];
export const DROPDOWN_ITEM_COLOR = INPUT_COLOR;

export const BARCHART_GRID_COLOR = INPUT_BORDER;
export const BARCHART_AXIS_COLOR = GREY[400];
export const BARCHART_BAR_BG = ORANGE[400];

export const LINECHART_GRID_COLOR = INPUT_BORDER;
export const LINECHART_AXIS_COLOR = GREY[400];
export const LINECHART_LINE_COLOR = ORANGE[400];
export const LINECHART_REFERENCELINE_COLOR = BLUE[500];

export const KPI_BG = GREY[50];
export const KPI_COLOR = GREY[500];
export const KPI_VALUE_COLOR = BLUE[800];

/*
Copyright 2018-2021 <Pierre Constantineau>

3-Clause BSD License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
#ifndef HARDWARE_CONFIG_H
#define HARDWARE_CONFIG_H
#include "hardware_variants.h"

/* HARDWARE DEFINITION*/
/* key matrix size */
#define MATRIX_ROWS 5
#define MATRIX_COLS 14

#define MATRIX_ROW_PINS {13, 24, 9, 10}
#define MATRIX_COL_PINS {2, 47, 45, 43, 10, 9, 39, 34, 33, 38, 36, 11, 32, 24}
#define UNUSED_PINS \
    {               \
    }
#define WS2812B_LED_PIN 31
#define WS2812B_LED_COUNT 1
#define WS2812B_LED_ON 1
// #define BACKLIGHT_LED_PIN 38
// #define DEFAULT_PWM_VALUE 10000 // PWM intensity
// #define BACKLIGHT_PWM_ON 1
/* COL2ROW or ROW2COL */
#define DIODE_DIRECTION COL2ROW
#define BATTERY_TYPE BATT_LIPO
#define VBAT_PIN 31
#define VCC_PIN 12
#define VCC_POLARITY_ON 1

// #define STATUS_BLE_LED_PIN 19 // blue = 0.19
// #define STATUS_KB_LED_PIN 17  // red = 0.17

#endif /* HARDWARE_CONFIG_H */

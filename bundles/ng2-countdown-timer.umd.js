(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng2-countdown-timer', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ng2-countdown-timer'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CountdownComponent = (function () {
        function CountdownComponent() {
            var _this = this;
            this.displayString = '';
            this.showZero = false;
            this.reached = new core.EventEmitter();
            this.display = [];
            this.displayNumbers = [];
            this.wasReached = false;
            setInterval(function () { return _this._displayString(); }, 100);
        }
        /**
         * @return {?}
         */
        CountdownComponent.prototype._displayString = /**
         * @return {?}
         */
            function () {
                if (this.wasReached)
                    return;
                if (typeof this.units === 'string') {
                    this.units = this.units.split('|');
                }
                /** @type {?} */
                var givenDate = new Date(this.end);
                /** @type {?} */
                var now = new Date();
                /** @type {?} */
                var dateDifference = givenDate - now;
                if ((dateDifference < 100 && dateDifference > 0) || dateDifference < 0 && !this.wasReached) {
                    this.wasReached = true;
                    this.reached.next(now);
                }
                /** @type {?} */
                var lastUnit = this.units[this.units.length - 1];
                /** @type {?} */
                var unitConstantForMillisecs = {
                    year: (((1000 * 60 * 60 * 24 * 7) * 4) * 12),
                    month: ((1000 * 60 * 60 * 24 * 7) * 4),
                    weeks: (1000 * 60 * 60 * 24 * 7),
                    days: (1000 * 60 * 60 * 24),
                    hours: (1000 * 60 * 60),
                    minutes: (1000 * 60),
                    seconds: 1000
                };
                /** @type {?} */
                var unitsLeft = {};
                /** @type {?} */
                var returnText = '';
                /** @type {?} */
                var returnNumbers = '';
                /** @type {?} */
                var totalMillisecsLeft = dateDifference;
                /** @type {?} */
                var i;
                /** @type {?} */
                var unit;
                for (i in this.units) {
                    if (this.units.hasOwnProperty(i)) {
                        unit = this.units[i].trim();
                        if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
                            //$interval.cancel(countDownInterval);
                            throw new Error('Cannot repeat unit: ' + unit);
                        }
                        if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
                            throw new Error('Unit: ' + unit + ' is not supported. Please use following units: year, month, weeks, days, hours, minutes, seconds, milliseconds');
                        }
                        // If it was reached, everything is zero
                        unitsLeft[unit] = (this.wasReached) ? 0 : totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];
                        if (lastUnit === unit) {
                            unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
                        }
                        else {
                            unitsLeft[unit] = Math.floor(unitsLeft[unit]);
                        }
                        totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];
                        unitConstantForMillisecs[unit.toLowerCase()] = false;
                        // If it's less than 0, round to 0
                        unitsLeft[unit] = (unitsLeft[unit] > 0) ? unitsLeft[unit] : 0;
                        returnNumbers += ' ' + unitsLeft[unit] + ' | ';
                        returnText += ' ' + unit;
                    }
                }
                if (this.text === null || !this.text) {
                    this.text = {
                        Year: 'Year',
                        Month: 'Month',
                        Weeks: 'Weeks',
                        Days: 'Days',
                        Hours: 'Hours',
                        Minutes: 'Minutes',
                        Seconds: 'Seconds',
                        MilliSeconds: 'Milliseconds'
                    };
                }
                this.displayString = returnText
                    .replace('Year', this.text.Year + ' | ')
                    .replace('Month', this.text.Month + ' | ')
                    .replace('Weeks', this.text.Weeks + ' | ')
                    .replace('Days', this.text.Days + ' | ')
                    .replace('Hours', this.text.Hours + ' | ')
                    .replace('Minutes', this.text.Minutes + ' | ')
                    .replace('Seconds', this.text.Seconds);
                this.displayNumbers = returnNumbers.split('|');
                this.display = this.displayString.split('|');
            };
        CountdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'countdown',
                        template: "<div class=\"countdown\">\n  <div *ngFor=\"let time of display; let i = index\" class=\"measurements {{time}}\">\n    <p class=\"measurements-number\">\n      {{ (showZero && displayNumbers[i] < 10) ? '0' + displayNumbers[i].trim() : displayNumbers[i]}}\n    </p>\n    <span *ngIf=\"display[i+1]\" class=\"divider\"> {{divider}} </span>\n    <p class=\"measurements-text\">\n      {{time}}\n    </p>\n  </div>\n</div>\n<ng-content></ng-content>",
                        styles: [".countdown{display:flex;align-items:center;justify-content:center;align-content:center;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.countdown .measurements{flex:.1}.countdown .measurements .divider{float:right}"]
                    },] },
        ];
        /** @nocollapse */
        CountdownComponent.ctorParameters = function () { return []; };
        CountdownComponent.propDecorators = {
            units: [{ type: core.Input }],
            end: [{ type: core.Input }],
            displayString: [{ type: core.Input }],
            text: [{ type: core.Input }],
            divider: [{ type: core.Input }],
            showZero: [{ type: core.Input }],
            reached: [{ type: core.Output }]
        };
        return CountdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CountdownModule = (function () {
        function CountdownModule() {
        }
        CountdownModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [
                            CountdownComponent
                        ],
                        exports: [
                            CountdownComponent,
                        ]
                    },] },
        ];
        return CountdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.CountdownComponent = CountdownComponent;
    exports.CountdownModule = CountdownModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNvdW50ZG93bi10aW1lci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nMi1jb3VudGRvd24tdGltZXIvbGliL2NvdW50ZG93bi9jb3VudGRvd24uY29tcG9uZW50LnRzIiwibmc6Ly9uZzItY291bnRkb3duLXRpbWVyL2xpYi9jb3VudGRvd24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvdW50ZG93bicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+XHJcbiAgPGRpdiAqbmdGb3I9XCJsZXQgdGltZSBvZiBkaXNwbGF5OyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJtZWFzdXJlbWVudHMge3t0aW1lfX1cIj5cclxuICAgIDxwIGNsYXNzPVwibWVhc3VyZW1lbnRzLW51bWJlclwiPlxyXG4gICAgICB7eyAoc2hvd1plcm8gJiYgZGlzcGxheU51bWJlcnNbaV0gPCAxMCkgPyAnMCcgKyBkaXNwbGF5TnVtYmVyc1tpXS50cmltKCkgOiBkaXNwbGF5TnVtYmVyc1tpXX19XHJcbiAgICA8L3A+XHJcbiAgICA8c3BhbiAqbmdJZj1cImRpc3BsYXlbaSsxXVwiIGNsYXNzPVwiZGl2aWRlclwiPiB7e2RpdmlkZXJ9fSA8L3NwYW4+XHJcbiAgICA8cCBjbGFzcz1cIm1lYXN1cmVtZW50cy10ZXh0XCI+XHJcbiAgICAgIHt7dGltZX19XHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBzdHlsZXM6IFtgLmNvdW50ZG93bntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24tY29udGVudDpjZW50ZXI7Zm9udC1mYW1pbHk6XCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmfS5jb3VudGRvd24gLm1lYXN1cmVtZW50c3tmbGV4Oi4xfS5jb3VudGRvd24gLm1lYXN1cmVtZW50cyAuZGl2aWRlcntmbG9hdDpyaWdodH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnRkb3duQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgdW5pdHM6IGFueTtcclxuICBASW5wdXQoKSBlbmQ6IGFueTtcclxuICBASW5wdXQoKSBkaXNwbGF5U3RyaW5nOiBTdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0ZXh0OiBhbnk7XHJcbiAgQElucHV0KCkgZGl2aWRlcjogYW55O1xyXG4gIEBJbnB1dCgpIHNob3daZXJvOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWNoZWQ6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBkaXNwbGF5OiBhbnkgPSBbXTtcclxuICBkaXNwbGF5TnVtYmVyczogYW55ID0gW107XHJcbiAgd2FzUmVhY2hlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuX2Rpc3BsYXlTdHJpbmcoKSwgMTAwKTtcclxuICB9XHJcblxyXG4gIF9kaXNwbGF5U3RyaW5nKCkge1xyXG4gICAgaWYgKHRoaXMud2FzUmVhY2hlZClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy51bml0cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy51bml0cyA9IHRoaXMudW5pdHMuc3BsaXQoJ3wnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2l2ZW5EYXRlOiBhbnkgPSBuZXcgRGF0ZSh0aGlzLmVuZCk7XHJcbiAgICBsZXQgbm93OiBhbnkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRhdGVEaWZmZXJlbmNlOiBhbnkgPSBnaXZlbkRhdGUgLSBub3c7XHJcblxyXG4gICAgaWYgKChkYXRlRGlmZmVyZW5jZSA8IDEwMCAmJiBkYXRlRGlmZmVyZW5jZSA+IDApIHx8IGRhdGVEaWZmZXJlbmNlIDwgMCAmJiAhdGhpcy53YXNSZWFjaGVkKSB7XHJcbiAgICAgIHRoaXMud2FzUmVhY2hlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVhY2hlZC5uZXh0KG5vdyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxhc3RVbml0ID0gdGhpcy51bml0c1t0aGlzLnVuaXRzLmxlbmd0aCAtIDFdLFxyXG4gICAgICB1bml0Q29uc3RhbnRGb3JNaWxsaXNlY3MgPSB7XHJcbiAgICAgICAgeWVhcjogKCgoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpICogNCkgKiAxMiksXHJcbiAgICAgICAgbW9udGg6ICgoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpICogNCksXHJcbiAgICAgICAgd2Vla3M6ICgxMDAwICogNjAgKiA2MCAqIDI0ICogNyksXHJcbiAgICAgICAgZGF5czogKDEwMDAgKiA2MCAqIDYwICogMjQpLFxyXG4gICAgICAgIGhvdXJzOiAoMTAwMCAqIDYwICogNjApLFxyXG4gICAgICAgIG1pbnV0ZXM6ICgxMDAwICogNjApLFxyXG4gICAgICAgIHNlY29uZHM6IDEwMDBcclxuICAgICAgfSxcclxuICAgICAgdW5pdHNMZWZ0ID0ge30sXHJcbiAgICAgIHJldHVyblRleHQgPSAnJyxcclxuICAgICAgcmV0dXJuTnVtYmVycyA9ICcnLFxyXG4gICAgICB0b3RhbE1pbGxpc2Vjc0xlZnQgPSBkYXRlRGlmZmVyZW5jZSxcclxuICAgICAgaSxcclxuICAgICAgdW5pdDogYW55O1xyXG5cclxuICAgIGZvciAoaSBpbiB0aGlzLnVuaXRzKSB7XHJcbiAgICAgIGlmICh0aGlzLnVuaXRzLmhhc093blByb3BlcnR5KGkpKSB7XHJcblxyXG4gICAgICAgIHVuaXQgPSB0aGlzLnVuaXRzW2ldLnRyaW0oKTtcclxuICAgICAgICBpZiAodW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzW3VuaXQudG9Mb3dlckNhc2UoKV0gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAvLyRpbnRlcnZhbC5jYW5jZWwoY291bnREb3duSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVwZWF0IHVuaXQ6ICcgKyB1bml0KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1bml0Q29uc3RhbnRGb3JNaWxsaXNlY3MuaGFzT3duUHJvcGVydHkodW5pdC50b0xvd2VyQ2FzZSgpKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5pdDogJyArIHVuaXQgKyAnIGlzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgZm9sbG93aW5nIHVuaXRzOiB5ZWFyLCBtb250aCwgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGl0IHdhcyByZWFjaGVkLCBldmVyeXRoaW5nIGlzIHplcm9cclxuICAgICAgICB1bml0c0xlZnRbdW5pdF0gPSAodGhpcy53YXNSZWFjaGVkKSA/IDAgOiB0b3RhbE1pbGxpc2Vjc0xlZnQgLyB1bml0Q29uc3RhbnRGb3JNaWxsaXNlY3NbdW5pdC50b0xvd2VyQ2FzZSgpXTtcclxuXHJcbiAgICAgICAgaWYgKGxhc3RVbml0ID09PSB1bml0KSB7XHJcbiAgICAgICAgICB1bml0c0xlZnRbdW5pdF0gPSBNYXRoLmNlaWwodW5pdHNMZWZ0W3VuaXRdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdW5pdHNMZWZ0W3VuaXRdID0gTWF0aC5mbG9vcih1bml0c0xlZnRbdW5pdF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG90YWxNaWxsaXNlY3NMZWZ0IC09IHVuaXRzTGVmdFt1bml0XSAqIHVuaXRDb25zdGFudEZvck1pbGxpc2Vjc1t1bml0LnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgIHVuaXRDb25zdGFudEZvck1pbGxpc2Vjc1t1bml0LnRvTG93ZXJDYXNlKCldID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIElmIGl0J3MgbGVzcyB0aGFuIDAsIHJvdW5kIHRvIDBcclxuICAgICAgICB1bml0c0xlZnRbdW5pdF0gPSAodW5pdHNMZWZ0W3VuaXRdID4gMCkgPyB1bml0c0xlZnRbdW5pdF0gOiAwO1xyXG5cclxuICAgICAgICByZXR1cm5OdW1iZXJzICs9ICcgJyArIHVuaXRzTGVmdFt1bml0XSArICcgfCAnO1xyXG4gICAgICAgIHJldHVyblRleHQgKz0gJyAnICsgdW5pdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRleHQgPT09IG51bGwgfHwgIXRoaXMudGV4dCkge1xyXG4gICAgICB0aGlzLnRleHQgPSB7XHJcbiAgICAgICAgWWVhcjogJ1llYXInLFxyXG4gICAgICAgIE1vbnRoOiAnTW9udGgnLFxyXG4gICAgICAgIFdlZWtzOiAnV2Vla3MnLFxyXG4gICAgICAgIERheXM6ICdEYXlzJyxcclxuICAgICAgICBIb3VyczogJ0hvdXJzJyxcclxuICAgICAgICBNaW51dGVzOiAnTWludXRlcycsXHJcbiAgICAgICAgU2Vjb25kczogJ1NlY29uZHMnLFxyXG4gICAgICAgIE1pbGxpU2Vjb25kczogJ01pbGxpc2Vjb25kcydcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSByZXR1cm5UZXh0XHJcbiAgICAgIC5yZXBsYWNlKCdZZWFyJywgdGhpcy50ZXh0LlllYXIgKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ01vbnRoJywgdGhpcy50ZXh0Lk1vbnRoICsgJyB8ICcpXHJcbiAgICAgIC5yZXBsYWNlKCdXZWVrcycsIHRoaXMudGV4dC5XZWVrcyArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnRGF5cycsIHRoaXMudGV4dC5EYXlzICsgJyB8ICcpXHJcbiAgICAgIC5yZXBsYWNlKCdIb3VycycsIHRoaXMudGV4dC5Ib3VycyArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnTWludXRlcycsIHRoaXMudGV4dC5NaW51dGVzICsgJyB8ICcpXHJcbiAgICAgIC5yZXBsYWNlKCdTZWNvbmRzJywgdGhpcy50ZXh0LlNlY29uZHMpO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheU51bWJlcnMgPSByZXR1cm5OdW1iZXJzLnNwbGl0KCd8Jyk7XHJcbiAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXlTdHJpbmcuc3BsaXQoJ3wnKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7ICBcclxuaW1wb3J0IHsgQ291bnRkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGRvd24vY291bnRkb3duLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ291bnRkb3duQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb3VudGRvd25Db21wb25lbnQsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnRkb3duTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBK0JFO1lBQUEsaUJBRUM7aUNBWGdDLEVBQUU7NEJBR04sS0FBSzsyQkFDTSxJQUFJQSxpQkFBWSxFQUFFOzJCQUMzQyxFQUFFO2tDQUNLLEVBQUU7OEJBQ0YsS0FBSztZQUd6QixXQUFXLENBQUMsY0FBTSxPQUFB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
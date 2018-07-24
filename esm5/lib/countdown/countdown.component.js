/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CountdownComponent = /** @class */ (function () {
    function CountdownComponent() {
        var _this = this;
        this.displayString = '';
        this.showZero = false;
        this.reached = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'countdown',
                    template: "<div class=\"countdown\">\n  <div *ngFor=\"let time of display; let i = index\" class=\"measurements {{time}}\">\n    <p class=\"measurements-number\">\n      {{ (showZero && displayNumbers[i] < 10) ? '0' + displayNumbers[i].trim() : displayNumbers[i]}}\n    </p>\n    <span *ngIf=\"display[i+1]\" class=\"divider\"> {{divider}} </span>\n    <p class=\"measurements-text\">\n      {{time}}\n    </p>\n  </div>\n</div>\n<ng-content></ng-content>",
                    styles: [".countdown{display:flex;align-items:center;justify-content:center;align-content:center;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.countdown .measurements{flex:.1}.countdown .measurements .divider{float:right}"]
                },] },
    ];
    /** @nocollapse */
    CountdownComponent.ctorParameters = function () { return []; };
    CountdownComponent.propDecorators = {
        units: [{ type: Input }],
        end: [{ type: Input }],
        displayString: [{ type: Input }],
        text: [{ type: Input }],
        divider: [{ type: Input }],
        showZero: [{ type: Input }],
        reached: [{ type: Output }]
    };
    return CountdownComponent;
}());
export { CountdownComponent };
if (false) {
    /** @type {?} */
    CountdownComponent.prototype.units;
    /** @type {?} */
    CountdownComponent.prototype.end;
    /** @type {?} */
    CountdownComponent.prototype.displayString;
    /** @type {?} */
    CountdownComponent.prototype.text;
    /** @type {?} */
    CountdownComponent.prototype.divider;
    /** @type {?} */
    CountdownComponent.prototype.showZero;
    /** @type {?} */
    CountdownComponent.prototype.reached;
    /** @type {?} */
    CountdownComponent.prototype.display;
    /** @type {?} */
    CountdownComponent.prototype.displayNumbers;
    /** @type {?} */
    CountdownComponent.prototype.wasReached;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1jb3VudGRvd24tdGltZXIvIiwic291cmNlcyI6WyJsaWIvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBK0JyRTtRQUFBLGlCQUVDOzZCQVhnQyxFQUFFO3dCQUdOLEtBQUs7dUJBQ00sSUFBSSxZQUFZLEVBQUU7dUJBQzNDLEVBQUU7OEJBQ0ssRUFBRTswQkFDRixLQUFLO1FBR3pCLFdBQVcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxFQUFyQixDQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9DOzs7O0lBRUQsMkNBQWM7OztJQUFkO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQixNQUFNLENBQUM7UUFFVCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDOztRQUVELElBQUksU0FBUyxHQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFDeEMsSUFBSSxHQUFHLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7UUFDMUIsSUFBSSxjQUFjLEdBQVEsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUUxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxHQUFHLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMs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LElBQUksR0FBRyxLQUFLLENBQUM7YUFDdkMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDekMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDN0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzlDOztnQkE1SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsOGJBV2M7b0JBQ3hCLE1BQU0sRUFBRSxDQUFDLGtPQUFnTyxDQUFDO2lCQUMzTzs7Ozs7d0JBR0UsS0FBSztzQkFDTCxLQUFLO2dDQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsTUFBTTs7NkJBMUJUOztTQWtCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb3VudGRvd24nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPlxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IHRpbWUgb2YgZGlzcGxheTsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwibWVhc3VyZW1lbnRzIHt7dGltZX19XCI+XHJcbiAgICA8cCBjbGFzcz1cIm1lYXN1cmVtZW50cy1udW1iZXJcIj5cclxuICAgICAge3sgKHNob3daZXJvICYmIGRpc3BsYXlOdW1iZXJzW2ldIDwgMTApID8gJzAnICsgZGlzcGxheU51bWJlcnNbaV0udHJpbSgpIDogZGlzcGxheU51bWJlcnNbaV19fVxyXG4gICAgPC9wPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJkaXNwbGF5W2krMV1cIiBjbGFzcz1cImRpdmlkZXJcIj4ge3tkaXZpZGVyfX0gPC9zcGFuPlxyXG4gICAgPHAgY2xhc3M9XCJtZWFzdXJlbWVudHMtdGV4dFwiPlxyXG4gICAgICB7e3RpbWV9fVxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgc3R5bGVzOiBbYC5jb3VudGRvd257ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2ZvbnQtZmFtaWx5OlwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZn0uY291bnRkb3duIC5tZWFzdXJlbWVudHN7ZmxleDouMX0uY291bnRkb3duIC5tZWFzdXJlbWVudHMgLmRpdmlkZXJ7ZmxvYXQ6cmlnaHR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvdW50ZG93bkNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHVuaXRzOiBhbnk7XHJcbiAgQElucHV0KCkgZW5kOiBhbnk7XHJcbiAgQElucHV0KCkgZGlzcGxheVN0cmluZzogU3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdGV4dDogYW55O1xyXG4gIEBJbnB1dCgpIGRpdmlkZXI6IGFueTtcclxuICBASW5wdXQoKSBzaG93WmVybzogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFjaGVkOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgZGlzcGxheTogYW55ID0gW107XHJcbiAgZGlzcGxheU51bWJlcnM6IGFueSA9IFtdO1xyXG4gIHdhc1JlYWNoZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9kaXNwbGF5U3RyaW5nKCksIDEwMCk7XHJcbiAgfVxyXG5cclxuICBfZGlzcGxheVN0cmluZygpIHtcclxuICAgIGlmICh0aGlzLndhc1JlYWNoZWQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMudW5pdHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMudW5pdHMgPSB0aGlzLnVuaXRzLnNwbGl0KCd8Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdpdmVuRGF0ZTogYW55ID0gbmV3IERhdGUodGhpcy5lbmQpO1xyXG4gICAgbGV0IG5vdzogYW55ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXRlRGlmZmVyZW5jZTogYW55ID0gZ2l2ZW5EYXRlIC0gbm93O1xyXG5cclxuICAgIGlmICgoZGF0ZURpZmZlcmVuY2UgPCAxMDAgJiYgZGF0ZURpZmZlcmVuY2UgPiAwKSB8fCBkYXRlRGlmZmVyZW5jZSA8IDAgJiYgIXRoaXMud2FzUmVhY2hlZCkge1xyXG4gICAgICB0aGlzLndhc1JlYWNoZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJlYWNoZWQubmV4dChub3cpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsYXN0VW5pdCA9IHRoaXMudW5pdHNbdGhpcy51bml0cy5sZW5ndGggLSAxXSxcclxuICAgICAgdW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzID0ge1xyXG4gICAgICAgIHllYXI6ICgoKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KSAqIDQpICogMTIpLFxyXG4gICAgICAgIG1vbnRoOiAoKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KSAqIDQpLFxyXG4gICAgICAgIHdlZWtzOiAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpLFxyXG4gICAgICAgIGRheXM6ICgxMDAwICogNjAgKiA2MCAqIDI0KSxcclxuICAgICAgICBob3VyczogKDEwMDAgKiA2MCAqIDYwKSxcclxuICAgICAgICBtaW51dGVzOiAoMTAwMCAqIDYwKSxcclxuICAgICAgICBzZWNvbmRzOiAxMDAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHVuaXRzTGVmdCA9IHt9LFxyXG4gICAgICByZXR1cm5UZXh0ID0gJycsXHJcbiAgICAgIHJldHVybk51bWJlcnMgPSAnJyxcclxuICAgICAgdG90YWxNaWxsaXNlY3NMZWZ0ID0gZGF0ZURpZmZlcmVuY2UsXHJcbiAgICAgIGksXHJcbiAgICAgIHVuaXQ6IGFueTtcclxuXHJcbiAgICBmb3IgKGkgaW4gdGhpcy51bml0cykge1xyXG4gICAgICBpZiAodGhpcy51bml0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG5cclxuICAgICAgICB1bml0ID0gdGhpcy51bml0c1tpXS50cmltKCk7XHJcbiAgICAgICAgaWYgKHVuaXRDb25zdGFudEZvck1pbGxpc2Vjc1t1bml0LnRvTG93ZXJDYXNlKCldID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgLy8kaW50ZXJ2YWwuY2FuY2VsKGNvdW50RG93bkludGVydmFsKTtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlcGVhdCB1bml0OiAnICsgdW5pdCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzLmhhc093blByb3BlcnR5KHVuaXQudG9Mb3dlckNhc2UoKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaXQ6ICcgKyB1bml0ICsgJyBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGZvbGxvd2luZyB1bml0czogeWVhciwgbW9udGgsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBpdCB3YXMgcmVhY2hlZCwgZXZlcnl0aGluZyBpcyB6ZXJvXHJcbiAgICAgICAgdW5pdHNMZWZ0W3VuaXRdID0gKHRoaXMud2FzUmVhY2hlZCkgPyAwIDogdG90YWxNaWxsaXNlY3NMZWZ0IC8gdW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzW3VuaXQudG9Mb3dlckNhc2UoKV07XHJcblxyXG4gICAgICAgIGlmIChsYXN0VW5pdCA9PT0gdW5pdCkge1xyXG4gICAgICAgICAgdW5pdHNMZWZ0W3VuaXRdID0gTWF0aC5jZWlsKHVuaXRzTGVmdFt1bml0XSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVuaXRzTGVmdFt1bml0XSA9IE1hdGguZmxvb3IodW5pdHNMZWZ0W3VuaXRdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvdGFsTWlsbGlzZWNzTGVmdCAtPSB1bml0c0xlZnRbdW5pdF0gKiB1bml0Q29uc3RhbnRGb3JNaWxsaXNlY3NbdW5pdC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICB1bml0Q29uc3RhbnRGb3JNaWxsaXNlY3NbdW5pdC50b0xvd2VyQ2FzZSgpXSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBJZiBpdCdzIGxlc3MgdGhhbiAwLCByb3VuZCB0byAwXHJcbiAgICAgICAgdW5pdHNMZWZ0W3VuaXRdID0gKHVuaXRzTGVmdFt1bml0XSA+IDApID8gdW5pdHNMZWZ0W3VuaXRdIDogMDtcclxuXHJcbiAgICAgICAgcmV0dXJuTnVtYmVycyArPSAnICcgKyB1bml0c0xlZnRbdW5pdF0gKyAnIHwgJztcclxuICAgICAgICByZXR1cm5UZXh0ICs9ICcgJyArIHVuaXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy50ZXh0ID09PSBudWxsIHx8ICF0aGlzLnRleHQpIHtcclxuICAgICAgdGhpcy50ZXh0ID0ge1xyXG4gICAgICAgIFllYXI6ICdZZWFyJyxcclxuICAgICAgICBNb250aDogJ01vbnRoJyxcclxuICAgICAgICBXZWVrczogJ1dlZWtzJyxcclxuICAgICAgICBEYXlzOiAnRGF5cycsXHJcbiAgICAgICAgSG91cnM6ICdIb3VycycsXHJcbiAgICAgICAgTWludXRlczogJ01pbnV0ZXMnLFxyXG4gICAgICAgIFNlY29uZHM6ICdTZWNvbmRzJyxcclxuICAgICAgICBNaWxsaVNlY29uZHM6ICdNaWxsaXNlY29uZHMnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gcmV0dXJuVGV4dFxyXG4gICAgICAucmVwbGFjZSgnWWVhcicsIHRoaXMudGV4dC5ZZWFyICsgJyB8ICcpXHJcbiAgICAgIC5yZXBsYWNlKCdNb250aCcsIHRoaXMudGV4dC5Nb250aCArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnV2Vla3MnLCB0aGlzLnRleHQuV2Vla3MgKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ0RheXMnLCB0aGlzLnRleHQuRGF5cyArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnSG91cnMnLCB0aGlzLnRleHQuSG91cnMgKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ01pbnV0ZXMnLCB0aGlzLnRleHQuTWludXRlcyArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnU2Vjb25kcycsIHRoaXMudGV4dC5TZWNvbmRzKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXlOdW1iZXJzID0gcmV0dXJuTnVtYmVycy5zcGxpdCgnfCcpO1xyXG4gICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5U3RyaW5nLnNwbGl0KCd8Jyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
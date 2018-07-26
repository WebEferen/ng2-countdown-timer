# Angular 6 | Countdown timer

Countdown timer module (from current date to the given in the binding date).

## Instalation

```javascript 
npm install ng2-countdown-timer
```

In your `app.module`, add `CountdownModule` to your imports:

```javascript
import { CountdownModule } from "ng2-countdown-timer";

@NgModule({
   declarations: [
     AppComponent
   ],
   imports: [
     BrowserModule,
     CountdownModule
   ],
   bootstrap: [AppComponent]
 })
 ```

## Usage

 In your html template:

 ```javascript
 <countdown units="Year | Month | Days | Hours | Minutes | Seconds"  end="July 22, 2019"></countdown>
 ```

 To set a custom Language and divider, set this variable in your component.ts file:

 ```javascript
 text:any = {
     Year: 'Year',
     Month: 'Month',
     Weeks: "Weeks",
     Days: "Days",
     Hours: "Hours",
     Minutes: "Minutes",
     Seconds: "Seconds",
     MilliSeconds: "MilliSeconds"
   };
 ```

In your .html:

 ```javascript
 <countdown [text]="text" units="Year | Month | Days | Hours | Minutes | Seconds"  end="July 22, 2019"></countdown>
 ```

Thanks in advice **matheushf** for the concepts.
**Inspired on the component: https://github.com/matheushf/ng2-date-countdown**

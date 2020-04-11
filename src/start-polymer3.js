import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-ajax/iron-ajax.js';



class StartPolymer3 extends PolymerElement {
  
  static get template () {
    
    return html`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
      <style>
        paper-checkbox {
          --paper-checkbox-checked-ink-color: #FFFFFF;
          --paper-checkbox-unchecked-ink-color: #FFFFFF;
        }
        h1 {
          color: brown;
          text-align: center;
          font-size: x-large;
        }
      </style>

      <iron-ajax 
          auto id="ajax"
          url="https://pomber.github.io/covid19/timeseries.json"
          handle-as="json"
          last-response="{{response}}"
          on-response="handleResponse"
      > </iron-ajax>

      <h1 style=" margin-top: 35px;">CORONAVIRUS</h1>

 
      <div class="container">
        <h2 style="font-size: x-large;text-align: center;">Reports of COVID-19</h2>
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Country</th>
                <th>Total Cases</th>
              </tr>
            </thead>
            <tbody>
          
              <template is="dom-repeat" items="{{dataList}}">
                <tr>
                    <td>{{item.0}}</td>
                    <td>{{item.1}}</td>
                  </tr>
              </template>
            </tbody>
          </table>
      </div>

    `;
  }

  handleResponse(event){
    
    this.results=event.detail.response;
   
    this.dataList=[];
    
    for(let val in this.results)
    {
     this.countryList=[];
     this.countryList.push(val);
     this.countryList.push(this.results[val][this.results[val].length-1].confirmed)
     this.dataList.push(this.countryList)
      console.log(this.dataList);
    }

  
  }
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      },
      pie: {
        type: Boolean,
        value: false,
        observer: 'togglePie'
      },
      loadComplete: {
        type: Boolean,
        value: false
      },
      countryList: {
        type: Array,
        notify: true
      },
      dataList: {
        type: Array,
        notify: true
      }
    };
  }

  constructor() {
    
    super();
  }

  ready(){
    super.ready();
  }

}


customElements.define('start-polymer3', StartPolymer3);

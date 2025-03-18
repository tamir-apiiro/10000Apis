
const express = require('express')
import {handler192} from "./handler192";
const app = express()
app.get('/192', handler192)
app.listen(3000, () => {})
        
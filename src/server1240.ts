
const express = require('express')
import {handler1240} from "./handler1240";
const app = express()
app.get('/1240', handler1240)
app.listen(3000, () => {})
        
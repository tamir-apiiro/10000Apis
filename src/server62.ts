
const express = require('express')
import {handler62} from "./handler62";
const app = express()
app.get('/62', handler62)
app.listen(3000, () => {})
        
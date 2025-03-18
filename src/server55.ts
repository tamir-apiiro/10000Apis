
const express = require('express')
import {handler55} from "./handler55";
const app = express()
app.get('/55', handler55)
app.listen(3000, () => {})
        
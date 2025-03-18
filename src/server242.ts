
const express = require('express')
import {handler242} from "./handler242";
const app = express()
app.get('/242', handler242)
app.listen(3000, () => {})
        
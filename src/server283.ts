
const express = require('express')
import {handler283} from "./handler283";
const app = express()
app.get('/283', handler283)
app.listen(3000, () => {})
        
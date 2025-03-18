
const express = require('express')
import {handler240} from "./handler240";
const app = express()
app.get('/240', handler240)
app.listen(3000, () => {})
        
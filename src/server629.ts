
const express = require('express')
import {handler629} from "./handler629";
const app = express()
app.get('/629', handler629)
app.listen(3000, () => {})
        
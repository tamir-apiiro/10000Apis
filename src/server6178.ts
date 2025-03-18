
const express = require('express')
import {handler6178} from "./handler6178";
const app = express()
app.get('/6178', handler6178)
app.listen(3000, () => {})
        
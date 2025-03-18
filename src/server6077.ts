
const express = require('express')
import {handler6077} from "./handler6077";
const app = express()
app.get('/6077', handler6077)
app.listen(3000, () => {})
        
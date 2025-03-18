
const express = require('express')
import {handler462} from "./handler462";
const app = express()
app.get('/462', handler462)
app.listen(3000, () => {})
        
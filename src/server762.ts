
const express = require('express')
import {handler762} from "./handler762";
const app = express()
app.get('/762', handler762)
app.listen(3000, () => {})
        
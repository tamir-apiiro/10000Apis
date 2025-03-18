
const express = require('express')
import {handler1302} from "./handler1302";
const app = express()
app.get('/1302', handler1302)
app.listen(3000, () => {})
        
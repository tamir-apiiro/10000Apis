
const express = require('express')
import {handler830} from "./handler830";
const app = express()
app.get('/830', handler830)
app.listen(3000, () => {})
        
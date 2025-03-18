
const express = require('express')
import {handler7830} from "./handler7830";
const app = express()
app.get('/7830', handler7830)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7542} from "./handler7542";
const app = express()
app.get('/7542', handler7542)
app.listen(3000, () => {})
        
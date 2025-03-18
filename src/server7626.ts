
const express = require('express')
import {handler7626} from "./handler7626";
const app = express()
app.get('/7626', handler7626)
app.listen(3000, () => {})
        
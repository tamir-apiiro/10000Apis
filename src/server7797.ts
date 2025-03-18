
const express = require('express')
import {handler7797} from "./handler7797";
const app = express()
app.get('/7797', handler7797)
app.listen(3000, () => {})
        
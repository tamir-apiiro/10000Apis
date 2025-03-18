
const express = require('express')
import {handler7774} from "./handler7774";
const app = express()
app.get('/7774', handler7774)
app.listen(3000, () => {})
        
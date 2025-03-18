
const express = require('express')
import {handler2307} from "./handler2307";
const app = express()
app.get('/2307', handler2307)
app.listen(3000, () => {})
        
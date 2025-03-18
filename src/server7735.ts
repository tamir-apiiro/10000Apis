
const express = require('express')
import {handler7735} from "./handler7735";
const app = express()
app.get('/7735', handler7735)
app.listen(3000, () => {})
        
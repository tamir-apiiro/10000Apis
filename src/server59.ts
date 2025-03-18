
const express = require('express')
import {handler59} from "./handler59";
const app = express()
app.get('/59', handler59)
app.listen(3000, () => {})
        
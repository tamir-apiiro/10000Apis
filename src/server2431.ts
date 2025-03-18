
const express = require('express')
import {handler2431} from "./handler2431";
const app = express()
app.get('/2431', handler2431)
app.listen(3000, () => {})
        
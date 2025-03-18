
const express = require('express')
import {handler560} from "./handler560";
const app = express()
app.get('/560', handler560)
app.listen(3000, () => {})
        
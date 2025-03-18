
const express = require('express')
import {handler1431} from "./handler1431";
const app = express()
app.get('/1431', handler1431)
app.listen(3000, () => {})
        
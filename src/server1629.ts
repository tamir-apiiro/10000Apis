
const express = require('express')
import {handler1629} from "./handler1629";
const app = express()
app.get('/1629', handler1629)
app.listen(3000, () => {})
        
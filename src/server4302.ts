
const express = require('express')
import {handler4302} from "./handler4302";
const app = express()
app.get('/4302', handler4302)
app.listen(3000, () => {})
        
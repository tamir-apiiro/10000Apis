
const express = require('express')
import {handler302} from "./handler302";
const app = express()
app.get('/302', handler302)
app.listen(3000, () => {})
        
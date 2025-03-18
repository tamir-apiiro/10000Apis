
const express = require('express')
import {handler480} from "./handler480";
const app = express()
app.get('/480', handler480)
app.listen(3000, () => {})
        
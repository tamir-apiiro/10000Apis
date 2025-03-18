
const express = require('express')
import {handler2480} from "./handler2480";
const app = express()
app.get('/2480', handler2480)
app.listen(3000, () => {})
        
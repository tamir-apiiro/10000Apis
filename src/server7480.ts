
const express = require('express')
import {handler7480} from "./handler7480";
const app = express()
app.get('/7480', handler7480)
app.listen(3000, () => {})
        
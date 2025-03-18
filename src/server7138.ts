
const express = require('express')
import {handler7138} from "./handler7138";
const app = express()
app.get('/7138', handler7138)
app.listen(3000, () => {})
        
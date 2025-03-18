
const express = require('express')
import {handler7984} from "./handler7984";
const app = express()
app.get('/7984', handler7984)
app.listen(3000, () => {})
        
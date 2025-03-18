
const express = require('express')
import {handler7991} from "./handler7991";
const app = express()
app.get('/7991', handler7991)
app.listen(3000, () => {})
        
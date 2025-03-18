
const express = require('express')
import {handler7901} from "./handler7901";
const app = express()
app.get('/7901', handler7901)
app.listen(3000, () => {})
        
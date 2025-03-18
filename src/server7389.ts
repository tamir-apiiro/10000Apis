
const express = require('express')
import {handler7389} from "./handler7389";
const app = express()
app.get('/7389', handler7389)
app.listen(3000, () => {})
        
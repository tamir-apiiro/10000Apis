
const express = require('express')
import {handler7340} from "./handler7340";
const app = express()
app.get('/7340', handler7340)
app.listen(3000, () => {})
        
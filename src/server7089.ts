
const express = require('express')
import {handler7089} from "./handler7089";
const app = express()
app.get('/7089', handler7089)
app.listen(3000, () => {})
        
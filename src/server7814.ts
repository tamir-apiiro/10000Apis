
const express = require('express')
import {handler7814} from "./handler7814";
const app = express()
app.get('/7814', handler7814)
app.listen(3000, () => {})
        
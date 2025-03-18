
const express = require('express')
import {handler7013} from "./handler7013";
const app = express()
app.get('/7013', handler7013)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7256} from "./handler7256";
const app = express()
app.get('/7256', handler7256)
app.listen(3000, () => {})
        
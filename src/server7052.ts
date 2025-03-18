
const express = require('express')
import {handler7052} from "./handler7052";
const app = express()
app.get('/7052', handler7052)
app.listen(3000, () => {})
        
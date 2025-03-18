
const express = require('express')
import {handler7913} from "./handler7913";
const app = express()
app.get('/7913', handler7913)
app.listen(3000, () => {})
        
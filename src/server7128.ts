
const express = require('express')
import {handler7128} from "./handler7128";
const app = express()
app.get('/7128', handler7128)
app.listen(3000, () => {})
        
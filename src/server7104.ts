
const express = require('express')
import {handler7104} from "./handler7104";
const app = express()
app.get('/7104', handler7104)
app.listen(3000, () => {})
        
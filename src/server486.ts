
const express = require('express')
import {handler486} from "./handler486";
const app = express()
app.get('/486', handler486)
app.listen(3000, () => {})
        
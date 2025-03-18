
const express = require('express')
import {handler7486} from "./handler7486";
const app = express()
app.get('/7486', handler7486)
app.listen(3000, () => {})
        
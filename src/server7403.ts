
const express = require('express')
import {handler7403} from "./handler7403";
const app = express()
app.get('/7403', handler7403)
app.listen(3000, () => {})
        
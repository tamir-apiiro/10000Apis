
const express = require('express')
import {handler7120} from "./handler7120";
const app = express()
app.get('/7120', handler7120)
app.listen(3000, () => {})
        
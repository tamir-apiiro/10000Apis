
const express = require('express')
import {handler660} from "./handler660";
const app = express()
app.get('/660', handler660)
app.listen(3000, () => {})
        
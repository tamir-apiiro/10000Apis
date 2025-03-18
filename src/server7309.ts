
const express = require('express')
import {handler7309} from "./handler7309";
const app = express()
app.get('/7309', handler7309)
app.listen(3000, () => {})
        
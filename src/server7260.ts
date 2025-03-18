
const express = require('express')
import {handler7260} from "./handler7260";
const app = express()
app.get('/7260', handler7260)
app.listen(3000, () => {})
        
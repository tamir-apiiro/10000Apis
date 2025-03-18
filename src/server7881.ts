
const express = require('express')
import {handler7881} from "./handler7881";
const app = express()
app.get('/7881', handler7881)
app.listen(3000, () => {})
        
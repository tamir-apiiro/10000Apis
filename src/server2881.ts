
const express = require('express')
import {handler2881} from "./handler2881";
const app = express()
app.get('/2881', handler2881)
app.listen(3000, () => {})
        
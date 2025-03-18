
const express = require('express')
import {handler7853} from "./handler7853";
const app = express()
app.get('/7853', handler7853)
app.listen(3000, () => {})
        
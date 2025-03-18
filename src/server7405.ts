
const express = require('express')
import {handler7405} from "./handler7405";
const app = express()
app.get('/7405', handler7405)
app.listen(3000, () => {})
        
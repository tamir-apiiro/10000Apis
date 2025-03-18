
const express = require('express')
import {handler7675} from "./handler7675";
const app = express()
app.get('/7675', handler7675)
app.listen(3000, () => {})
        
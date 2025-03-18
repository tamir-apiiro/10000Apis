
const express = require('express')
import {handler7833} from "./handler7833";
const app = express()
app.get('/7833', handler7833)
app.listen(3000, () => {})
        
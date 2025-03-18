
const express = require('express')
import {handler2147} from "./handler2147";
const app = express()
app.get('/2147', handler2147)
app.listen(3000, () => {})
        
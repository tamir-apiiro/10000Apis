
const express = require('express')
import {handler2358} from "./handler2358";
const app = express()
app.get('/2358', handler2358)
app.listen(3000, () => {})
        
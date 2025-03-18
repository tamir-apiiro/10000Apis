
const express = require('express')
import {handler2592} from "./handler2592";
const app = express()
app.get('/2592', handler2592)
app.listen(3000, () => {})
        
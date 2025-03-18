
const express = require('express')
import {handler2446} from "./handler2446";
const app = express()
app.get('/2446', handler2446)
app.listen(3000, () => {})
        
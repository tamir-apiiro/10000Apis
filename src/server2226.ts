
const express = require('express')
import {handler2226} from "./handler2226";
const app = express()
app.get('/2226', handler2226)
app.listen(3000, () => {})
        
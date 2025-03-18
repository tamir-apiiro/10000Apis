
const express = require('express')
import {handler2785} from "./handler2785";
const app = express()
app.get('/2785', handler2785)
app.listen(3000, () => {})
        
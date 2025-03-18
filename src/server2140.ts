
const express = require('express')
import {handler2140} from "./handler2140";
const app = express()
app.get('/2140', handler2140)
app.listen(3000, () => {})
        

const express = require('express')
import {handler2241} from "./handler2241";
const app = express()
app.get('/2241', handler2241)
app.listen(3000, () => {})
        
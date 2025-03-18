
const express = require('express')
import {handler2393} from "./handler2393";
const app = express()
app.get('/2393', handler2393)
app.listen(3000, () => {})
        
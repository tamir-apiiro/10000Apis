
const express = require('express')
import {handler2359} from "./handler2359";
const app = express()
app.get('/2359', handler2359)
app.listen(3000, () => {})
        
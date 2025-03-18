
const express = require('express')
import {handler2169} from "./handler2169";
const app = express()
app.get('/2169', handler2169)
app.listen(3000, () => {})
        
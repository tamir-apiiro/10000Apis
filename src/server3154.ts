
const express = require('express')
import {handler3154} from "./handler3154";
const app = express()
app.get('/3154', handler3154)
app.listen(3000, () => {})
        
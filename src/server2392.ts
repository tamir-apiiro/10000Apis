
const express = require('express')
import {handler2392} from "./handler2392";
const app = express()
app.get('/2392', handler2392)
app.listen(3000, () => {})
        
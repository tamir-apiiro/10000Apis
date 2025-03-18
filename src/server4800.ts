
const express = require('express')
import {handler4800} from "./handler4800";
const app = express()
app.get('/4800', handler4800)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7375} from "./handler7375";
const app = express()
app.get('/7375', handler7375)
app.listen(3000, () => {})
        
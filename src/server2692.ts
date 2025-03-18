
const express = require('express')
import {handler2692} from "./handler2692";
const app = express()
app.get('/2692', handler2692)
app.listen(3000, () => {})
        
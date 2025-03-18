
const express = require('express')
import {handler2628} from "./handler2628";
const app = express()
app.get('/2628', handler2628)
app.listen(3000, () => {})
        
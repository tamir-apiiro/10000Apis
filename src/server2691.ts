
const express = require('express')
import {handler2691} from "./handler2691";
const app = express()
app.get('/2691', handler2691)
app.listen(3000, () => {})
        
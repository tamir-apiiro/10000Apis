
const express = require('express')
import {handler2949} from "./handler2949";
const app = express()
app.get('/2949', handler2949)
app.listen(3000, () => {})
        
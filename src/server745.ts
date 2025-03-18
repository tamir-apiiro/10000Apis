
const express = require('express')
import {handler745} from "./handler745";
const app = express()
app.get('/745', handler745)
app.listen(3000, () => {})
        
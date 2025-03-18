
const express = require('express')
import {handler923} from "./handler923";
const app = express()
app.get('/923', handler923)
app.listen(3000, () => {})
        
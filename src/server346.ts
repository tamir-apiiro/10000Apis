
const express = require('express')
import {handler346} from "./handler346";
const app = express()
app.get('/346', handler346)
app.listen(3000, () => {})
        
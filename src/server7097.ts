
const express = require('express')
import {handler7097} from "./handler7097";
const app = express()
app.get('/7097', handler7097)
app.listen(3000, () => {})
        
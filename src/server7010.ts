
const express = require('express')
import {handler7010} from "./handler7010";
const app = express()
app.get('/7010', handler7010)
app.listen(3000, () => {})
        
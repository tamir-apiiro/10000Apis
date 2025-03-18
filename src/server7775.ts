
const express = require('express')
import {handler7775} from "./handler7775";
const app = express()
app.get('/7775', handler7775)
app.listen(3000, () => {})
        
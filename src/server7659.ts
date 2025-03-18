
const express = require('express')
import {handler7659} from "./handler7659";
const app = express()
app.get('/7659', handler7659)
app.listen(3000, () => {})
        
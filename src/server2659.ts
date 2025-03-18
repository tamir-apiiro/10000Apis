
const express = require('express')
import {handler2659} from "./handler2659";
const app = express()
app.get('/2659', handler2659)
app.listen(3000, () => {})
        
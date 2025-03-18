
const express = require('express')
import {handler4659} from "./handler4659";
const app = express()
app.get('/4659', handler4659)
app.listen(3000, () => {})
        
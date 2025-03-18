
const express = require('express')
import {handler659} from "./handler659";
const app = express()
app.get('/659', handler659)
app.listen(3000, () => {})
        
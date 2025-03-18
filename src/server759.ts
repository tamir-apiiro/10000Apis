
const express = require('express')
import {handler759} from "./handler759";
const app = express()
app.get('/759', handler759)
app.listen(3000, () => {})
        
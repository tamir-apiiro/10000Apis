
const express = require('express')
import {handler7759} from "./handler7759";
const app = express()
app.get('/7759', handler7759)
app.listen(3000, () => {})
        
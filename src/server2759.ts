
const express = require('express')
import {handler2759} from "./handler2759";
const app = express()
app.get('/2759', handler2759)
app.listen(3000, () => {})
        
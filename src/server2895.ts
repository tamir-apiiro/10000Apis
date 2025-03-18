
const express = require('express')
import {handler2895} from "./handler2895";
const app = express()
app.get('/2895', handler2895)
app.listen(3000, () => {})
        
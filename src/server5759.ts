
const express = require('express')
import {handler5759} from "./handler5759";
const app = express()
app.get('/5759', handler5759)
app.listen(3000, () => {})
        
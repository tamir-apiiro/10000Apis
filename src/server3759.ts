
const express = require('express')
import {handler3759} from "./handler3759";
const app = express()
app.get('/3759', handler3759)
app.listen(3000, () => {})
        
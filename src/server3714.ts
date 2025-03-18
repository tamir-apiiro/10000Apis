
const express = require('express')
import {handler3714} from "./handler3714";
const app = express()
app.get('/3714', handler3714)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3685} from "./handler3685";
const app = express()
app.get('/3685', handler3685)
app.listen(3000, () => {})
        
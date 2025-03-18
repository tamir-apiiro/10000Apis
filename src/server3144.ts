
const express = require('express')
import {handler3144} from "./handler3144";
const app = express()
app.get('/3144', handler3144)
app.listen(3000, () => {})
        
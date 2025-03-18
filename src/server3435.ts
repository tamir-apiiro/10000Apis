
const express = require('express')
import {handler3435} from "./handler3435";
const app = express()
app.get('/3435', handler3435)
app.listen(3000, () => {})
        
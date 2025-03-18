
const express = require('express')
import {handler3295} from "./handler3295";
const app = express()
app.get('/3295', handler3295)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3573} from "./handler3573";
const app = express()
app.get('/3573', handler3573)
app.listen(3000, () => {})
        
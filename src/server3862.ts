
const express = require('express')
import {handler3862} from "./handler3862";
const app = express()
app.get('/3862', handler3862)
app.listen(3000, () => {})
        
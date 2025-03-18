
const express = require('express')
import {handler3238} from "./handler3238";
const app = express()
app.get('/3238', handler3238)
app.listen(3000, () => {})
        
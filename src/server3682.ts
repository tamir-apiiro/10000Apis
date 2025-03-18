
const express = require('express')
import {handler3682} from "./handler3682";
const app = express()
app.get('/3682', handler3682)
app.listen(3000, () => {})
        
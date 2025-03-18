
const express = require('express')
import {handler3998} from "./handler3998";
const app = express()
app.get('/3998', handler3998)
app.listen(3000, () => {})
        
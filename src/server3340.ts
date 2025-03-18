
const express = require('express')
import {handler3340} from "./handler3340";
const app = express()
app.get('/3340', handler3340)
app.listen(3000, () => {})
        
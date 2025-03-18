
const express = require('express')
import {handler5967} from "./handler5967";
const app = express()
app.get('/5967', handler5967)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3569} from "./handler3569";
const app = express()
app.get('/3569', handler3569)
app.listen(3000, () => {})
        

const express = require('express')
import {handler5551} from "./handler5551";
const app = express()
app.get('/5551', handler5551)
app.listen(3000, () => {})
        
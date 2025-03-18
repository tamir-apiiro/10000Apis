
const express = require('express')
import {handler3763} from "./handler3763";
const app = express()
app.get('/3763', handler3763)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3128} from "./handler3128";
const app = express()
app.get('/3128', handler3128)
app.listen(3000, () => {})
        
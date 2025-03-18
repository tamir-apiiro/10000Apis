
const express = require('express')
import {handler3318} from "./handler3318";
const app = express()
app.get('/3318', handler3318)
app.listen(3000, () => {})
        
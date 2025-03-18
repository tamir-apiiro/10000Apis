
const express = require('express')
import {handler5556} from "./handler5556";
const app = express()
app.get('/5556', handler5556)
app.listen(3000, () => {})
        
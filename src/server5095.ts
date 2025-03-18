
const express = require('express')
import {handler5095} from "./handler5095";
const app = express()
app.get('/5095', handler5095)
app.listen(3000, () => {})
        
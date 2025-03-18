
const express = require('express')
import {handler5484} from "./handler5484";
const app = express()
app.get('/5484', handler5484)
app.listen(3000, () => {})
        
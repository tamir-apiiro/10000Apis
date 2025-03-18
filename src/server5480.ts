
const express = require('express')
import {handler5480} from "./handler5480";
const app = express()
app.get('/5480', handler5480)
app.listen(3000, () => {})
        
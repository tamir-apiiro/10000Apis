
const express = require('express')
import {handler5161} from "./handler5161";
const app = express()
app.get('/5161', handler5161)
app.listen(3000, () => {})
        
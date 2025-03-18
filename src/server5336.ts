
const express = require('express')
import {handler5336} from "./handler5336";
const app = express()
app.get('/5336', handler5336)
app.listen(3000, () => {})
        
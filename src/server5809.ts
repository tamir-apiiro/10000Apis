
const express = require('express')
import {handler5809} from "./handler5809";
const app = express()
app.get('/5809', handler5809)
app.listen(3000, () => {})
        

const express = require('express')
import {handler5032} from "./handler5032";
const app = express()
app.get('/5032', handler5032)
app.listen(3000, () => {})
        
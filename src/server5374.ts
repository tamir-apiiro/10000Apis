
const express = require('express')
import {handler5374} from "./handler5374";
const app = express()
app.get('/5374', handler5374)
app.listen(3000, () => {})
        
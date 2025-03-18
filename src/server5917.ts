
const express = require('express')
import {handler5917} from "./handler5917";
const app = express()
app.get('/5917', handler5917)
app.listen(3000, () => {})
        
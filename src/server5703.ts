
const express = require('express')
import {handler5703} from "./handler5703";
const app = express()
app.get('/5703', handler5703)
app.listen(3000, () => {})
        
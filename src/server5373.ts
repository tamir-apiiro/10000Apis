
const express = require('express')
import {handler5373} from "./handler5373";
const app = express()
app.get('/5373', handler5373)
app.listen(3000, () => {})
        
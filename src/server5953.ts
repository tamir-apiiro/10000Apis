
const express = require('express')
import {handler5953} from "./handler5953";
const app = express()
app.get('/5953', handler5953)
app.listen(3000, () => {})
        
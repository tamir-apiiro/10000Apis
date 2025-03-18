
const express = require('express')
import {handler5016} from "./handler5016";
const app = express()
app.get('/5016', handler5016)
app.listen(3000, () => {})
        

const express = require('express')
import {handler5237} from "./handler5237";
const app = express()
app.get('/5237', handler5237)
app.listen(3000, () => {})
        
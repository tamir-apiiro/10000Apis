
const express = require('express')
import {handler5531} from "./handler5531";
const app = express()
app.get('/5531', handler5531)
app.listen(3000, () => {})
        
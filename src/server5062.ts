
const express = require('express')
import {handler5062} from "./handler5062";
const app = express()
app.get('/5062', handler5062)
app.listen(3000, () => {})
        
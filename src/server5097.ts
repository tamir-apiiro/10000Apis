
const express = require('express')
import {handler5097} from "./handler5097";
const app = express()
app.get('/5097', handler5097)
app.listen(3000, () => {})
        
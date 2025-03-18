
const express = require('express')
import {handler5769} from "./handler5769";
const app = express()
app.get('/5769', handler5769)
app.listen(3000, () => {})
        
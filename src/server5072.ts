
const express = require('express')
import {handler5072} from "./handler5072";
const app = express()
app.get('/5072', handler5072)
app.listen(3000, () => {})
        
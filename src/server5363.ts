
const express = require('express')
import {handler5363} from "./handler5363";
const app = express()
app.get('/5363', handler5363)
app.listen(3000, () => {})
        
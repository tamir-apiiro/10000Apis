
const express = require('express')
import {handler5670} from "./handler5670";
const app = express()
app.get('/5670', handler5670)
app.listen(3000, () => {})
        
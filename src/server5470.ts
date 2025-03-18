
const express = require('express')
import {handler5470} from "./handler5470";
const app = express()
app.get('/5470', handler5470)
app.listen(3000, () => {})
        
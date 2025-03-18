
const express = require('express')
import {handler5402} from "./handler5402";
const app = express()
app.get('/5402', handler5402)
app.listen(3000, () => {})
        
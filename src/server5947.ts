
const express = require('express')
import {handler5947} from "./handler5947";
const app = express()
app.get('/5947', handler5947)
app.listen(3000, () => {})
        

const express = require('express')
import {handler5568} from "./handler5568";
const app = express()
app.get('/5568', handler5568)
app.listen(3000, () => {})
        
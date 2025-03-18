
const express = require('express')
import {handler5661} from "./handler5661";
const app = express()
app.get('/5661', handler5661)
app.listen(3000, () => {})
        
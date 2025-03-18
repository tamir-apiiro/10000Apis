
const express = require('express')
import {handler5998} from "./handler5998";
const app = express()
app.get('/5998', handler5998)
app.listen(3000, () => {})
        

const express = require('express')
import {handler5498} from "./handler5498";
const app = express()
app.get('/5498', handler5498)
app.listen(3000, () => {})
        
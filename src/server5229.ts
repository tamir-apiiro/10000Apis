
const express = require('express')
import {handler5229} from "./handler5229";
const app = express()
app.get('/5229', handler5229)
app.listen(3000, () => {})
        
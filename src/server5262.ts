
const express = require('express')
import {handler5262} from "./handler5262";
const app = express()
app.get('/5262', handler5262)
app.listen(3000, () => {})
        
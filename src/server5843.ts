
const express = require('express')
import {handler5843} from "./handler5843";
const app = express()
app.get('/5843', handler5843)
app.listen(3000, () => {})
        
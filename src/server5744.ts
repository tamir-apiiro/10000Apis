
const express = require('express')
import {handler5744} from "./handler5744";
const app = express()
app.get('/5744', handler5744)
app.listen(3000, () => {})
        
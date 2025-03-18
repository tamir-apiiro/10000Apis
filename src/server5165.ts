
const express = require('express')
import {handler5165} from "./handler5165";
const app = express()
app.get('/5165', handler5165)
app.listen(3000, () => {})
        
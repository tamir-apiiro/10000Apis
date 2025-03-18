
const express = require('express')
import {handler5701} from "./handler5701";
const app = express()
app.get('/5701', handler5701)
app.listen(3000, () => {})
        
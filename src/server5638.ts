
const express = require('express')
import {handler5638} from "./handler5638";
const app = express()
app.get('/5638', handler5638)
app.listen(3000, () => {})
        
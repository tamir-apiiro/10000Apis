
const express = require('express')
import {handler5565} from "./handler5565";
const app = express()
app.get('/5565', handler5565)
app.listen(3000, () => {})
        
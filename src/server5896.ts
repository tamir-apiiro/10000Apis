
const express = require('express')
import {handler5896} from "./handler5896";
const app = express()
app.get('/5896', handler5896)
app.listen(3000, () => {})
        
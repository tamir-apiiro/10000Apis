
const express = require('express')
import {handler5475} from "./handler5475";
const app = express()
app.get('/5475', handler5475)
app.listen(3000, () => {})
        
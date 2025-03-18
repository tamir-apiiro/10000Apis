
const express = require('express')
import {handler5058} from "./handler5058";
const app = express()
app.get('/5058', handler5058)
app.listen(3000, () => {})
        
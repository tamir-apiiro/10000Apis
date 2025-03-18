
const express = require('express')
import {handler5477} from "./handler5477";
const app = express()
app.get('/5477', handler5477)
app.listen(3000, () => {})
        
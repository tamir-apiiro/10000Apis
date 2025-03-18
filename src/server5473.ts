
const express = require('express')
import {handler5473} from "./handler5473";
const app = express()
app.get('/5473', handler5473)
app.listen(3000, () => {})
        
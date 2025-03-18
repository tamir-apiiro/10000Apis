
const express = require('express')
import {handler5635} from "./handler5635";
const app = express()
app.get('/5635', handler5635)
app.listen(3000, () => {})
        
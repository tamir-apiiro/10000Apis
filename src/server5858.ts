
const express = require('express')
import {handler5858} from "./handler5858";
const app = express()
app.get('/5858', handler5858)
app.listen(3000, () => {})
        
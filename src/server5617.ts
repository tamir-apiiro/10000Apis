
const express = require('express')
import {handler5617} from "./handler5617";
const app = express()
app.get('/5617', handler5617)
app.listen(3000, () => {})
        
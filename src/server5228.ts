
const express = require('express')
import {handler5228} from "./handler5228";
const app = express()
app.get('/5228', handler5228)
app.listen(3000, () => {})
        
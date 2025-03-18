
const express = require('express')
import {handler5045} from "./handler5045";
const app = express()
app.get('/5045', handler5045)
app.listen(3000, () => {})
        
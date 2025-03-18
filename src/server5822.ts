
const express = require('express')
import {handler5822} from "./handler5822";
const app = express()
app.get('/5822', handler5822)
app.listen(3000, () => {})
        
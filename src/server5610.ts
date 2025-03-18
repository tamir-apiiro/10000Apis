
const express = require('express')
import {handler5610} from "./handler5610";
const app = express()
app.get('/5610', handler5610)
app.listen(3000, () => {})
        
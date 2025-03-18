
const express = require('express')
import {handler5960} from "./handler5960";
const app = express()
app.get('/5960', handler5960)
app.listen(3000, () => {})
        
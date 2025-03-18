
const express = require('express')
import {handler5616} from "./handler5616";
const app = express()
app.get('/5616', handler5616)
app.listen(3000, () => {})
        
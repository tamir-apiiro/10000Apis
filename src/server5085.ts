
const express = require('express')
import {handler5085} from "./handler5085";
const app = express()
app.get('/5085', handler5085)
app.listen(3000, () => {})
        
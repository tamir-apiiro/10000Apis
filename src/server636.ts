
const express = require('express')
import {handler636} from "./handler636";
const app = express()
app.get('/636', handler636)
app.listen(3000, () => {})
        
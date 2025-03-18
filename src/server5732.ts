
const express = require('express')
import {handler5732} from "./handler5732";
const app = express()
app.get('/5732', handler5732)
app.listen(3000, () => {})
        
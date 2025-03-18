
const express = require('express')
import {handler5641} from "./handler5641";
const app = express()
app.get('/5641', handler5641)
app.listen(3000, () => {})
        
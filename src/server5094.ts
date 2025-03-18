
const express = require('express')
import {handler5094} from "./handler5094";
const app = express()
app.get('/5094', handler5094)
app.listen(3000, () => {})
        
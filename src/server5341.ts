
const express = require('express')
import {handler5341} from "./handler5341";
const app = express()
app.get('/5341', handler5341)
app.listen(3000, () => {})
        

const express = require('express')
import {handler5296} from "./handler5296";
const app = express()
app.get('/5296', handler5296)
app.listen(3000, () => {})
        
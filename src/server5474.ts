
const express = require('express')
import {handler5474} from "./handler5474";
const app = express()
app.get('/5474', handler5474)
app.listen(3000, () => {})
        
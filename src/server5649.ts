
const express = require('express')
import {handler5649} from "./handler5649";
const app = express()
app.get('/5649', handler5649)
app.listen(3000, () => {})
        
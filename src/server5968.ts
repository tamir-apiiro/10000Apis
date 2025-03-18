
const express = require('express')
import {handler5968} from "./handler5968";
const app = express()
app.get('/5968', handler5968)
app.listen(3000, () => {})
        
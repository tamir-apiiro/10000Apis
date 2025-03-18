
const express = require('express')
import {handler5845} from "./handler5845";
const app = express()
app.get('/5845', handler5845)
app.listen(3000, () => {})
        
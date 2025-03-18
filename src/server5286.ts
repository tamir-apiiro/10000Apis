
const express = require('express')
import {handler5286} from "./handler5286";
const app = express()
app.get('/5286', handler5286)
app.listen(3000, () => {})
        
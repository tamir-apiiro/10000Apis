
const express = require('express')
import {handler5580} from "./handler5580";
const app = express()
app.get('/5580', handler5580)
app.listen(3000, () => {})
        

const express = require('express')
import {handler5497} from "./handler5497";
const app = express()
app.get('/5497', handler5497)
app.listen(3000, () => {})
        
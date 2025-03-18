
const express = require('express')
import {handler5945} from "./handler5945";
const app = express()
app.get('/5945', handler5945)
app.listen(3000, () => {})
        
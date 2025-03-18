
const express = require('express')
import {handler5283} from "./handler5283";
const app = express()
app.get('/5283', handler5283)
app.listen(3000, () => {})
        
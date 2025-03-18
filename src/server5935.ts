
const express = require('express')
import {handler5935} from "./handler5935";
const app = express()
app.get('/5935', handler5935)
app.listen(3000, () => {})
        
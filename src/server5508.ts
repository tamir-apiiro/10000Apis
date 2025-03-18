
const express = require('express')
import {handler5508} from "./handler5508";
const app = express()
app.get('/5508', handler5508)
app.listen(3000, () => {})
        
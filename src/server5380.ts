
const express = require('express')
import {handler5380} from "./handler5380";
const app = express()
app.get('/5380', handler5380)
app.listen(3000, () => {})
        

const express = require('express')
import {handler5995} from "./handler5995";
const app = express()
app.get('/5995', handler5995)
app.listen(3000, () => {})
        
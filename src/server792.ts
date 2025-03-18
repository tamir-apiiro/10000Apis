
const express = require('express')
import {handler792} from "./handler792";
const app = express()
app.get('/792', handler792)
app.listen(3000, () => {})
        
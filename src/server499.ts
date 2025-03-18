
const express = require('express')
import {handler499} from "./handler499";
const app = express()
app.get('/499', handler499)
app.listen(3000, () => {})
        
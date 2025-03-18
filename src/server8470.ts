
const express = require('express')
import {handler8470} from "./handler8470";
const app = express()
app.get('/8470', handler8470)
app.listen(3000, () => {})
        